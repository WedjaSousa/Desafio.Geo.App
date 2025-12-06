# App de Reporte de Equipamentos 

Aplicação Fullstack desenvolvida para o registro de equipamentos defeituosos em laboratórios. O sistema permite capturar foto, título, descrição e localização, salvando tudo em um banco de dados na nuvem.

## 🛠️ Tecnologias Utilizadas

- **Mobile:** React Native (Expo)
- **Backend:** Node.js (Express)
- **Banco de Dados:** MongoDB Atlas (Nuvem)

---

## 🚀 Como rodar o projeto

Como as dependências (pastas `node_modules`) não foram enviadas para deixar o projeto leve, siga os passos abaixo para instalar e rodar.

### 1. Configuração do Backend (Servidor)
Abra um terminal na pasta `backend` e execute:

```bash
# Instalar as ferramentas necessárias
npm install

# Rodar o servidor
node server.js
```

Se tudo der certo, aparecerá: "MongoDB Conectado com Sucesso!"

2. Configuração do Mobile (App)
Abra um novo terminal na pasta geo-mobile e execute:
```bash
# Instalar as ferramentas necessárias
npm install
⚠️ Atenção Importante (Configuração de IP): Antes de rodar, abra o arquivo App.js, verifique a linha const API_URL e substitua o endereço IP pelo IPv4 da sua máquina atual (ex: 192.168.0.XX).

Depois de ajustar o IP, rode o projeto:
npx expo start
```
Leia o QR Code com o aplicativo Expo Go no seu celular.

📱 Funcionalidades
Preenchimento de formulário (Título, Descrição, Local, Laboratório).

Captura de foto da galeria.

Envio dos dados para a API.

Armazenamento seguro no MongoDB Atlas.
