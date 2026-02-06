Скопируй вот ЭТУ версию (я её адаптировала под GitHub 👇)
# Silver Glow — Production Web Application

## Project Overview
Silver Glow is an individual academic full-stack web application representing a luxury silver jewelry platform.

The project demonstrates backend development using Node.js, Express, and MongoDB, combined with a production-ready web interface and cloud deployment.

---

## Live Demo
**Production URL:**  
https://silver-glow.onrender.com

---

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- HTML, CSS, JavaScript
- Render (Deployment)
- GitHub

---

## Project Structure
silver-glow-part2/
├── database/
│ └── mongo.js
├── public/
│ ├── products.js
│ └── style.css
├── views/
│ ├── index.html
│ ├── products.html
│ ├── about.html
│ ├── contact.html
│ └── 404.html
├── server.js
├── package.json
├── .gitignore
├── README.md

---

## Database
- MongoDB Atlas
- Database name: silverGlowDB
- Collection: products

Each product contains:
- name (String)
- price (Number)
- description (String)
- createdAt (Date)

---

## API Endpoints (CRUD)

Create product:
POST /api/products

Read all products:
GET /api/products

Read by ID:
GET /api/products/:id

Update product:
PUT /api/products/:id

Delete product:
DELETE /api/products/:id

---

## Web Interface
The application provides a production web interface that allows:
- Viewing products
- Adding new products
- Editing existing products
- Deleting products

All operations are performed via the web UI without using Postman.

---

## Environment Variables

Local `.env` file:
PORT=3000
MONGO_URI=your_mongodb_connection_string

Production variables are configured in Render.

---

## How to Run Locally
npm install
node server.js

Open in browser:
http://localhost:3000

---

## Deployment
The application is deployed using Render and connected to MongoDB Atlas.

---

## Author
Aisulu Azimkhan  
Individual Academic Project

---

## Course
Web Technologies 2 (Backend)  
Assignment 3 – Part 2
