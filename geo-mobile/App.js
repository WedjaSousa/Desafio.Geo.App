import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [foto, setFoto] = useState(null);
  const [enviando, setEnviando] = useState(false);

  
  const API_URL = 'http://192.168.1.7:3000/api/equipamentos';
  
  const selecionarFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
      base64: true, 
    });

    if (!result.canceled) {
      setFoto(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  };

  const enviarDados = async () => {
    if (!titulo || !local) {
      Alert.alert('Atenção', 'Preencha pelo menos Título e Local.');
      return;
    }

    setEnviando(true);
    try {
      await axios.post(API_URL, {
        titulo,
        descricao,
        local,
        laboratorio,
        foto
      });
      
      Alert.alert('Sucesso!', 'Defeito registrado.');
      setTitulo('');
      setDescricao('');
      setLocal('');
      setLaboratorio('');
      setFoto(null);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor. Verifique o IP.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>REPORTAR DEFEITO DO EQUIPAMENTO</Text>
      
      <Text style={styles.label}>Título do Problema:</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} placeholder="Ex: Mouse danificado" />

      <Text style={styles.label}>Descrição do Problema:</Text>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Detalhes do defeito..." multiline />

      <Text style={styles.label}>Local:</Text>
      <TextInput style={styles.input} value={local} onChangeText={setLocal} placeholder="Ex: Bloco A" />

      <Text style={styles.label}>Laboratório:</Text>
      <TextInput style={styles.input} value={laboratorio} onChangeText={setLaboratorio} placeholder="Ex: Lab 10" />

      <Button title="📷 ADICIONAR FOTO" onPress={selecionarFoto} />
      
      {foto && <Image source={{ uri: foto }} style={styles.preview} />}

      <View style={styles.footer}>
        {enviando ? (
          <ActivityIndicator size="large" color="#3169c3ff" />
        ) : (
          <Button title="ENVIAR RELATÓRIO" onPress={enviarDados} color="#28a745" />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, paddingTop: 50, backgroundColor: '#94b3e2ff' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#ffffffff' },
  label: { fontSize: 16, marginBottom: 5, fontWeight: '600', color: '#05065cff' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  preview: { width: '100%', height: 200, marginTop: 15, borderRadius: 10, resizeMode: 'cover' },
  footer: { marginTop: 30 }
});