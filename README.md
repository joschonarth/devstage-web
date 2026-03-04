<div align="center">

<img alt="devstage" src="./src/assets/logo.svg" />

# devstage

*Indique, convide e suba no ranking.*

<img src="https://img.shields.io/github/last-commit/joschonarth/devstage-web?style=default&logo=git&logoColor=white&color=6F9DE2&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/devstage-web?style=default&color=6F9DE2&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/devstage-web?style=default&color=6F9DE2&labelColor=27272a" alt="repo-language-count">

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)

</div>

---

---

## 📃 Sobre

O **devstage** é uma aplicação web de sistema de indicações e convites para eventos. Após se cadastrar em um evento, cada participante recebe um link único de convite para compartilhar. A cada nova inscrição gerada através do link, o usuário acumula pontos e sobe no ranking global — podendo acompanhar em tempo real quantos acessos seu link recebeu, quantas inscrições foram feitas e sua posição no ranking de indicações. O frontend é construído com **Next.js**, **TypeScript** e **Tailwind CSS**.

---

## 🛠️ Tecnologias

- ⚛️ **[React](https://react.dev/)** — Biblioteca para construção de interfaces declarativas.
- ▲ **[Next.js](https://nextjs.org/)** — Framework React com App Router, SSR e otimizações de performance.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária direto no JSX.
- 🐠 **[Orval](https://orval.dev/)** — Geração automática de clients HTTP e tipos a partir da spec OpenAPI.
- 📋 **[React Hook Form](https://react-hook-form.com/)** — Gerenciamento de formulários performático e flexível.
- 🛡️ **[Zod](https://zod.dev/)** — Validação e parsing de schemas com inferência de tipos.
- 🔍 **[Biome](https://biomejs.dev/)** — Linting e formatação de código de alta performance.

---

## ✨ Funcionalidades

- [x] 📝 Inscrição em eventos
- [x] 🔗 Geração de link único de convite por participante
- [x] 👥 Convite de novas pessoas através do link personalizado
- [x] 📊 Estatísticas de acessos ao link de convite
- [x] 🎯 Contagem de inscrições geradas pelo link
- [x] 🏆 Posição do usuário no ranking de indicações
- [x] 🌍 Ranking global de indicações

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/)
- 🔌 API do **devstage** em execução — veja o repositório: **[devstage-server](https://github.com/joschonarth/devstage-server)**

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/devstage-web.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd devstage-web
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

### 🔌 API

Este projeto consome a **devstage API**, que precisa estar disponível para que a aplicação funcione corretamente. Siga as instruções do repositório abaixo para rodá-la:

👉 **[devstage-server](https://github.com/joschonarth/devstage-server)**

### 🤖 Geração de cliente HTTP

Os clients HTTP são gerados automaticamente pelo **Orval** a partir da spec OpenAPI exposta pelo server. Para regenerar:

```bash
npx orval
```

### ▶️ Execução

```bash
npm run dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no navegador.

```bash
# Gera o build de produção
npm run build

# Inicia o servidor de produção
npm run start
```

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
