

# Silver Glow — Full-Stack CRUD Web Application

**Deployed (Render):** https://silver-glow-1.onrender.com  
**Repository:** https://github.com/aiabagdat/silver-glow

---

## 1. Project Summary

Silver Glow is an individual academic full-stack web application that demonstrates:
- RESTful backend development with **Node.js + Express**
- Cloud database integration with **MongoDB Atlas**
- Full **CRUD** operations (Create, Read, Update, Delete)
- Frontend interaction using **Fetch API**
- Production deployment on **Render** with environment variables

---

## 2. Technology Stack

- Node.js
- Express.js
- MongoDB Atlas (MongoDB Native Driver)
- HTML / CSS
- JavaScript (Fetch API)
- Git & GitHub
- Render (Deployment)

---

## 3. Data Model

**Database:** `silverGlowDB`  
**Collection:** `products`

**Product fields:**
- `name` (String)
- `price` (Number)
- `description` (String)
- `createdAt` (Date)

---

## 4. Routes

### Web Pages
- `/` — Home
- `/products` — Product Management (CRUD UI)
- `/about` — About
- `/contact` — Contact

### API (CRUD)
- `GET /api/products` — Read all products
- `GET /api/products/:id` — Read by ID
- `POST /api/products` — Create product
- `PUT /api/products/:id` — Update product
- `DELETE /api/products/:id` — Delete product

Additional endpoint:
- `GET /api/info` — Project info (JSON)

---

## 5. How to Verify (Deployed)

Open the following pages:

- Home: https://silver-glow-1.onrender.com/
- CRUD UI: https://silver-glow-1.onrender.com/products
- API Products (JSON): https://silver-glow-1.onrender.com/api/products
- API Info (JSON): https://silver-glow-1.onrender.com/api/info

### CRUD demonstration (via `/products`)
1) **Create:** fill the form → click **Add Product** → item appears  
2) **Read:** refresh the page → items remain stored (MongoDB)  
3) **Update:** click **Edit** → change values → item updates  
4) **Delete:** click **Delete** → item is removed  

All operations are performed through the web interface (no Postman required).
