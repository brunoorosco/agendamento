# 📅 API de Agendamento

Esta API gerencia **agendamentos de serviços**, vinculando **profissionais** a horários disponíveis e clientes.

## 🚀 Tecnologias

- Node.js 22
- TypeScript
- Prisma ORM
- PostgreSQL (ou MySQL)
- Fastify (ou Express)

---

## 📦 **Instalação**

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/brunoorosco/agendamento.git
cd agendamento
```

### 2️⃣ Instale as Dependências

```bash
npm install
```

### 3️⃣ Configure o Banco de Dados

Crie um arquivo **`.env`** na raiz do projeto e adicione:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/agendamento"
```

Se for MySQL:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/agendamento"
```

### 4️⃣ Execute as Migrações

```bash
npm run db:migrate
```

---

## 🚀 **Rodando o Projeto**

### ▶️ Ambiente de Desenvolvimento

```bash
npm run start:dev
```

### ▶️ Build e Produção

```bash
npm run build
npm start
```

---

## 📌 **Rotas da API**

### 🔹 Criar um Profissional

**POST** `/professionals`

```json
{
  "name": "Dra. Camila Souza",
  "companyId": 1
}
```

### 🔹 Criar um Horário Disponível

**POST** `/schedules`

```json
{
  "professionalId": 1,
  "availableDates": ["2024-03-25T10:00:00.000Z", "2024-03-25T14:00:00.000Z"]
}
```

### 🔹 Agendar um Serviço

**POST** `/agendamentos`

```json
{
  "professionalId": 1,
  "date": "2024-03-25T14:00:00.000Z",
  "customerName": "João Silva",
  "customerPhone": "+55 11 98765-4321",
  "service": "Consulta de Nutrição"
}
```

---

## 🛠 **Comandos Úteis**

| Comando              | Descrição                                    |
| -------------------- | -------------------------------------------- |
| `npm run start`      | Inicia o servidor em produção                |
| `npm run start:dev`  | Inicia o servidor em modo de desenvolvimento |
| `npm run db:migrate` | Executa as migrações no banco de dados       |
| `npm run db:deploy`  | Aplica migrações em produção                 |

---

## 📜 **Licença**

Este projeto está sob a licença MIT.
