Silver Glow — Backend API with MongoDB (CRUD)
Project Overview
Silver Glow is an individual academic web application project that demonstrates backend development using Node.js, Express, and MongoDB.
The project represents a luxury silver jewelry platform and focuses on backend API design, database integration, and full CRUD functionality.
Technologies Used
Node.js
Express.js
MongoDB (native Node.js driver)
HTML, CSS, JavaScript
Database
Database: MongoDB
Database Name: silverGlowDB
Main Collection: products
Product Schema
Each product contains the following fields:
name (String)
price (Number)
description (String)
createdAt (Date)
The collection is created automatically on the first insert.
API Endpoints (CRUD)
Create Product
POST
/api/products
Read All Products
GET
/api/products
Read Product by ID
GET
/api/products/:id
Update Product
PUT
/api/products/:id
Delete Product
DELETE
/api/products/:id
Advanced Query Features
Filtering
/api/products?name=Silver Ring
Sorting
Descending:
/api/products?sortBy=price&order=desc
Ascending:
/api/products?sortBy=price&order=asc
Projection
/api/products?fields=name,price
Frontend Pages
/ — Home page
/products — Product management interface (CRUD)
/about — About page
/contact — Contact form
How to Run the Project
Install dependencies:
npm install
Start MongoDB:
mongod
Run the server:
node server.js
Open in browser:
http://localhost:3000
Author
Aisulu Azimkhan
Individual academic project

1. READ ALL (все продукты)
http://localhost:3000/api/products
 2. FILTERING (фильтрация по имени)
http://localhost:3000/api/products?name=Silver Ring
 3. SORTING (сортировка по цене ↓)
http://localhost:3000/api/products?sortBy=price&order=desc
 4. SORTING (сортировка по цене ↑)
http://localhost:3000/api/products?sortBy=price&order=asc
 5. PROJECTION (только name и price)
http://localhost:3000/api/products?fields=name,price
 6. FILTERING + SORTING
http://localhost:3000/api/products?name=Silver Ring&sortBy=price&order=desc
 7. FILTERING + PROJECTION
http://localhost:3000/api/products?name=Silver Ring&fields=name,price
 8. SORTING + PROJECTION
http://localhost:3000/api/products?sortBy=price&order=desc&fields=name,price
 9. READ BY ID (пример)
http://localhost:3000/api/products/PUT_YOUR_ID_HERE
 12. DELETE (пример)
http://localhost:3000/api/products/PUT_YOUR_ID_HERE

