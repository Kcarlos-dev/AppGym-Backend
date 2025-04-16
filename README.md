
# AppGym-Backend

![GitHub last commit](https://img.shields.io/github/last-commit/Kcarlos-dev/AppGym-Backend)
![GitHub repo size](https://img.shields.io/github/repo-size/Kcarlos-dev/AppGym-Backend)
![GitHub](https://img.shields.io/github/license/Kcarlos-dev/AppGym-Backend)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)

> **Backend para sistema de gestão de academias — desenvolvido com Node.js.**  
> 🚧 Projeto em desenvolvimento 🚧

---

## 📌 Descrição

Este projeto fornece a estrutura de backend para uma aplicação de gestão de academias. Ele expõe uma API RESTful com suporte para autenticação de usuários, gerenciamento de treinos, uploads de imagem e controle administrativo.

---

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MySQL (com mysql2)**
- **JWT (jsonwebtoken)**
- **Multer**
- **password-hash**
- **Nodemon**

---

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Kcarlos-dev/AppGym-Backend.git
   cd AppGym-Backend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o ambiente**
   - Renomeie o arquivo `.env.example` para `.env` e configure com seus dados:

     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=suasenha
     DB_PORT=3306
     DB_DATABASE=DB_GYM
     JWT_KEY=sua_chave_secreta
     ```

4. **Execute o servidor**
   ```bash
   npm run dev
   ```

   O servidor deve rodar em: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Estrutura de Diretórios

```
src/
├── app.js
├── config/
├── controllers/
├── middleware/
├── migrations/
├── models/
├── routes/
│   ├── AdmRoutes.js
│   ├── AuthRoutes.js
│   └── UserRoutes.js
├── seed/
└── storage/
```

---

## 📚 Documentação da API (Resumo)

### 🔐 Autenticação

| Método | Rota      | Protegida | Descrição             |
|--------|-----------|-----------|------------------------|
| POST   | /auth     | ❌        | Login do usuário       |
| GET    | /user     | ✅        | Retorna dados do usuário autenticado |

---

### 👤 Usuário

| Método | Rota             | Protegida | Descrição                    |
|--------|------------------|-----------|------------------------------|
| POST   | /create          | ❌        | Criação de novo usuário      |
| PUT    | /alter/:id       | ✅        | Atualização de dados do usuário |
| PUT    | /adm/:id         | ✅        | Atualização de administrador |
| GET    | /training        | ✅        | Retorna treinos              |

---

### 🛠️ Administração

| Método | Rota                   | Protegida | Descrição                          |
|--------|------------------------|-----------|-------------------------------------|
| GET    | /exercicios/:user      | ✅        | Lista exercícios do usuário        |
| POST   | /maquinas              | ✅        | Cadastra novos exercícios          |
| PUT    | /alter/treino          | ✅        | Altera treinos existentes          |
| POST   | /maquinas/img          | ✅        | Faz upload de imagem para máquinas |

---

## 🧪 Testes

*(Em desenvolvimento. Contribuições são bem-vindas!)*

---

## 📅 Status do Projeto

- 📌 Último commit: **16 de abril de 2025**
- ⚠️ Status: **Ativo, em desenvolvimento**
- ⭐ Popularidade: 0 estrelas / 0 forks / 1 subscriber

---



## 👨‍💻 Autor

**Carlos**  
GitHub: [@Kcarlos-dev](https://github.com/Kcarlos-dev)

---

> Sinta-se à vontade para abrir *issues* ou contribuir com melhorias! 🚀