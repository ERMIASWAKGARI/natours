# Natours

A Node.js, Express, and MongoDB learning project for building a RESTful API for managing tour data.

## 🚀 Features

- Create, read, update, and delete (CRUD) tours
- Middleware for logging and request parsing
- Simple file-based persistence for development
- API endpoint structure following REST principles

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (future integration)
- **morgan** for request logging
- **nodemon** for development hot-reloading

## 📂 Project Structure

```

Natours/
├── dev-data/            # Sample JSON data
├── app.js               # Main Express application
├── package.json         # Project dependencies & scripts
├── routes/              # API route handlers (future expansion)
└── controllers/         # Controller logic (future expansion)

```

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/ERMIASWAKGARI/natours.git

# Install dependencies
npm install
```

## ▶️ Usage

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📌 API Endpoints (examples)

- `GET /api/v1/tours` — Get all tours
- `GET /api/v1/tours/:id` — Get a specific tour
- `POST /api/v1/tours` — Create a new tour
- `PATCH /api/v1/tours/:id` — Update a tour
- `DELETE /api/v1/tours/:id` — Delete a tour

## 📜 License

This project is licensed under the ISC License.

```

---

I can also **add sample API request/response examples** so your README doubles as documentation for testing in Postman or curl.
Do you want me to make that version? It’ll make the repo look extra polished.
```
