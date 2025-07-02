# Shortly – Encurtador de Links (Frontend)

Este é o Shortly, um encurtador de links simples e eficiente. O projeto foi desenvolvido com React + TypeScript usando o Vite para build e Bootstrap para estilização. Os dados são salvos em localStorage, simulando uma experiência real sem backend.

## Sobre o Projeto

- Crie e gerencie links encurtados personalizados
- Associe tags para organizar seus links
- Tudo armazenado localmente com localStorage
- Redirecionamento funcional através da rota /r/:short_code

## Como criar o projeto do zero

Caso queira replicar do início:

```bash
# Criar projeto com Vite + React + TypeScript
npm create vite@latest shortly -- --template react-ts

# Entrar na pasta do projeto
cd shortly

# Instalar as dependências
npm install

# Instalar React Router DOM
npm install react-router-dom

# Instalar Bootstrap
npm install bootstrap

# Rodar o projeto localmente
npm run dev
```

## Como rodar o projeto (caso já tenha clonado)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/shortly.git
cd shortly
```

Se você já tem o repositório clonado, atualize com:

```bash
git pull
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm run dev
```

Acesse no navegador: http://localhost:5173

## Estrutura do Projeto

```
shortly/
├─ public/
├─ src/
│  ├─ pages/         # Telas principais (Home, Login, Register, Tags, Links, Redirect)
│  ├─ components/    # Componentes reutilizáveis (ex: Layout)
│  ├─ context/       # Context API com links e tags
│  ├─ utils/         # Funções auxiliares (ex: normalizar URLs, gerar short codes)
│  ├─ App.tsx        # Configuração das rotas
│  └─ main.tsx       # Bootstrap do app
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Funcionalidades

- Criação de links encurtados com short codes aleatórios
- Redirecionamento automático via /r/:short_code
- Normalização automática de URLs (ex: google.com → https://google.com)
- Gerenciamento completo de tags (criar, editar, excluir)
- Contador de cliques (mockado)
- Persistência local com localStorage
- Interface responsiva com Bootstrap 5
