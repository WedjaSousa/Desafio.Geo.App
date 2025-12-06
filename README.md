# 📱 App de Reporte de Equipamentos Defeituosos

> Aplicação Fullstack desenvolvida para o registro e rastreamento de equipamentos defeituosos em ambientes laboratoriais. O sistema permite que o usuário capture evidências visuais, registre informações essenciais (local, descrição) e salve todos os dados em um banco de dados na nuvem.

---

## ✨ Funcionalidades Principais

* **Registro Completo:** Preenchimento de formulário com Título, Descrição, Local, e identificação do Laboratório.
* **Captura de Imagem:** Capacidade de selecionar e capturar fotos da galeria ou diretamente da câmera para documentar o defeito.
* **Armazenamento em Nuvem:** Envio seguro dos dados (texto e referências de imagem) para a API e armazenamento no **MongoDB Atlas**.
* **Interface Intuitiva:** Desenvolvido em React Native para uma experiência de usuário fluida e moderna.

---

## 🛠️ Stack Tecnológica

| Componente | Tecnologia | Observações |
| :--- | :--- | :--- |
| **Frontend (Mobile)** | **React Native (Expo)** | Permite desenvolvimento rápido para iOS e Android. |
| **Backend (API)** | **Node.js com Express** | Servidor robusto e escalável para manipulação de dados e rotas. |
| **Banco de Dados** | **MongoDB Atlas** | Banco de dados NoSQL na nuvem para armazenamento de dados e imagens. |
| **Ferramentas** | **Git / npm** | Gerenciamento de dependências e controle de versão. |

---

## 🚀 Como Rodar o Projeto Localmente (Fullstack)

Como as pastas de dependências (`node_modules`) não foram incluídas no repositório, é necessário instalar as dependências separadamente para o Backend e para o Frontend.

### 1. Configuração e Inicialização do Backend (API)

O Backend será responsável por receber as requisições do App Mobile e interagir com o MongoDB.

1.  Abra o **Terminal 1** e certifique-se de estar na pasta `backend`.
    ```bash
    cd backend
    ```
2.  Instale todas as dependências do servidor:
    ```bash
    npm install
    ```
3.  Inicie o servidor Node.js:
    ```bash
    node server.js
    ```

---

### 2. Configuração e Inicialização do Mobile (Frontend)

O Frontend exige uma configuração de IP para se comunicar com o Backend rodando localmente.

1.  Abra o **Terminal 2** e navegue para a pasta `geo-mobile`:
    ```bash
    cd ../geo-mobile
    ```
2.  Instale todas as dependências do aplicativo móvel:
    ```bash
    npm install
    ```

#### ⚠️ Ajuste Crucial: Conexão IP da API

Para que o aplicativo no seu celular se comunique com o servidor rodando no seu computador (Codespaces), você precisa informar o endereço IP correto:

1.  Abra o arquivo **`App.js`** (ou o arquivo de configuração da API no Frontend).
2.  Localize a variável de URL da API (`const API_URL`).
3.  Substitua o endereço IP existente pelo **endereço IPv4 atual da sua máquina** (ou o endereço do seu *Codespace* se estiver usando Tunnel).
    *Exemplo:* `const API_URL = 'http://192.168.0.XX:3000';`

#### 🚀 Rodando o App

Depois de ajustar o IP, inicie o Expo Metro Bundler:

```bash
npx expo start --tunnel
```

---
- Atividade desenvolvida por Wedja Sousa para a disciplina de Coding Mobile ministrada pelo professor Geraldo. | Devido à complexidade e às dificuldades no desenvolvimento e compreensão, a entrega está sendo realizada com atraso.
