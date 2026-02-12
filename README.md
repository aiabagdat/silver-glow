Silver Glow — Full-Stack CRUD Application
 Live Deployment

Render URL:
https://silver-glow-1.onrender.com

 Project Description

Silver Glow is a full-stack web application developed using Node.js, Express, and MongoDB Atlas.

The project demonstrates:

REST API implementation

Full CRUD operations

MongoDB cloud database integration

Frontend interaction using Fetch API

Deployment on Render

 Technologies

Node.js

Express.js

MongoDB Atlas

HTML / CSS

JavaScript (Fetch API)

Render (Deployment)

 Database

Database: silverGlowDB
Collection: products

Product fields:

name (String)

price (Number)

description (String)

createdAt (Date)

CRUD API Endpoints
Operation	Method	Route
Create	POST	/api/products
Read All	GET	/api/products
Read by ID	GET	/api/products/:id
Update	PUT	/api/products/:id
Delete	DELETE	/api/products/:id
 How to Verify the Application
 Web Interface (Render)

Open:

Home Page:
https://silver-glow-1.onrender.com/

Product Management:
https://silver-glow-1.onrender.com/products

Test CRUD:

Add a product using the form

Refresh page (data persists)

Edit product

Delete product

All operations are performed through the web interface.

 API Verification

Open in browser:

All products:
https://silver-glow-1.onrender.com/api/products

Project info:
https://silver-glow-1.onrender.com/api/info

The API returns JSON responses.

💻 Run Locally
npm install
npm start


Create .env file:

PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string


Open:
http://localhost:3000



Aisulu Azimkhan
Individual Academic Project