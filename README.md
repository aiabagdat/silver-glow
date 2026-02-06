Silver Glow — Production Web Application
 Project Overview
Silver Glow is an individual academic full-stack web application that represents a luxury silver jewelry platform.
The project demonstrates backend development with Node.js, Express, and MongoDB, combined with a production-ready web interface and cloud deployment.
The application supports full CRUD functionality, environment variable configuration, and deployment to a public hosting platform.
 Live Demo (Production)
 Deployed URL:
https://silver-glow.onrender.com
 This is a public production deployment (localhost is not used).
 Technologies Used
Node.js
Express.js
MongoDB Atlas
HTML / CSS / JavaScript
Render (Deployment)
GitHub (Version Control)
 Project Structure
silver-glow-part2/
├── database/
│   └── mongo.js
├── public/
│   ├── products.js
│   └── style.css
├── views/
│   ├── index.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   └── 404.html
├── server.js
├── package.json
├── .gitignore
├── README.md
 Database
Database: MongoDB Atlas
Database Name: silverGlowDB
Collection: products
Product Schema
Each product document contains:
name (String)
price (Number)
description (String)
createdAt (Date)
The collection is created automatically on the first insert.
 API Endpoints (CRUD)
Create Product
POST /api/products
Read All Products
GET /api/products
Read Product by ID
GET /api/products/:id
Update Product
PUT /api/products/:id
Delete Product
DELETE /api/products/:id
Advanced Query Features
Filtering:
/api/products?name=Silver Ring
Sorting:
/api/products?sortBy=price&order=asc
/api/products?sortBy=price&order=desc
Projection:
/api/products?fields=name,price
 Web Interface
The production web interface allows:
Viewing the product catalog
Adding new products
Editing existing products
Deleting products
Dynamic data loading via fetch() (no Postman required)
Available pages:
/ — Home
/products — Product management (CRUD)
/about — Project information
/contact — Contact form
 Environment Variables
Environment variables are used for secure configuration.
Local (.env — NOT pushed to GitHub)
PORT=3000
MONGO_URI=your_mongodb_connection_string
Production
Environment variables are configured directly in Render Dashboard.
 How to Run Locally
Install dependencies:
npm install
Create a .env file:
PORT=3000
MONGO_URI=your_mongodb_connection_string
Start the server:
node server.js
Open in browser:
http://localhost:3000
 Deployment
The application is deployed using Render:
Connected to GitHub repository
Automatic deployment from main branch
Environment variables configured in production
MongoDB Atlas used as a cloud database
 Author
Aisulu Azimkhan
Individual Academic Project
 Course
Web Technologies 2 (Backend)
