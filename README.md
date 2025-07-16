# Livraria Online

Projeto completo de uma livraria online com funcionalidades de cadastro, edição, visualização e exclusão de livros. Utiliza React com TypeScript no frontend e Fastify com MySQL no backend.

## Funcionalidades

- Listagem de livros com imagem, título e autor
- Detalhamento completo de cada livro
- Cadastro de novos livros com seleção de gêneros
- Edição e exclusão de livros existentes
- Navegação entre páginas
- Integração com banco de dados relacional

---

## Tecnologias Utilizadas

### Frontend
- React
- TypeScript
- React Router DOM
- Fetch API

### Backend
- Fastify
- TypeScript
- MySQL
- @fastify/cors
- mysql2

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar dependências

#### Frontend:

```bash
cd frontend
npm install
```

#### Backend:

```bash
cd backend
npm install
```

---

## Configuração do Banco de Dados

### 1. Criar o banco MySQL

```sql
CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  autor VARCHAR(255),
  paginas INT,
  anoPublicacao INT,
  editora VARCHAR(255),
  imagem VARCHAR(1000),
  ondeComprar VARCHAR(255),
  nota INT CHECK (nota BETWEEN 1 AND 10)
);

CREATE TABLE generos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) UNIQUE
);

CREATE TABLE livros_generos (
  livro_id INT,
  genero_id INT,
  FOREIGN KEY (livro_id) REFERENCES livros(id),
  FOREIGN KEY (genero_id) REFERENCES generos(id)
);
```

---

## Executando o Backend

```bash
cd backend
npm run dev
```

> O backend estará disponível em `http://localhost:8000`

---

## Executando o Frontend

```bash
cd frontend
npm run dev
```

> O frontend estará disponível em `http://localhost:5173`

---

## Estrutura de Pastas

```
projeto-livraria/
├── backend/
│   └── index.ts (Fastify server)
├── frontend/
│   ├── App.tsx
│   ├── PaginaCatalogo.tsx
│   ├── LivroSelecionado.tsx
│   ├── PaginaCadastro.tsx
│   ├── PaginaCatalogo.css
│   └── PaginaCadastro.css
```

---

## Desenvolvedora

Rayka Neres
