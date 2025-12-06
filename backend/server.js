const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
// Aumentamos o limite para aceitar fotos
app.use(bodyParser.json({ limit: '50mb' }));

// --- MINHA CONEXÃO ---
const mongoURI = 'mongodb+srv://admin:12345@cluster0.ie8wczm.mongodb.net/?appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Conectado com Sucesso!'))
  .catch(err => console.log('Erro ao conectar:', err));

// --- O MODELO DE DADOS (O que o professor pediu) ---
const EquipamentoSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  local: String,
  laboratorio: String,
  foto: String,
  dataHora: { type: Date, default: Date.now }
});

const Equipamento = mongoose.model('Equipamento', EquipamentoSchema);

// --- ROTA PARA SALVAR ---
app.post('/api/equipamentos', async (req, res) => {
  try {
    const novoEquipamento = new Equipamento(req.body);
    await novoEquipamento.save();
    res.status(201).json({ message: 'Salvo com sucesso!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao salvar' });
  }
});

// --- RODAR O SERVIDOR ---
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});