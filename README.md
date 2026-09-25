# 🏡 StayScape

> A full-stack accommodation booking platform inspired by Airbnb, built with **Node.js, Express.js, MongoDB Atlas, EJS, Passport.js, Cloudinary, and Mapbox**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://stayscape-vdtp.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)]
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)]
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge&logo=bootstrap)]

StayScape allows users to explore unique stays, create and manage property listings, upload images, search destinations, leave reviews, and securely authenticate using Passport.js.

## 🌐 Live Demo

🔗 **https://stayscape-vdtp.onrender.com**

---

# ✨ Features

## 🏠 Property Listings

- Browse accommodation listings
- View detailed property information
- Responsive card-based UI
- Browse by categories:
  - Beaches
  - Mountains
  - Camping
  - Boats
  - Arctic
  - Castles
  - Farms
  - Rooms
  - and more...

## 🔍 Search

Search listings by:

- Property Title
- Location
- Country

## 👤 Authentication

- User Registration
- Login & Logout
- Secure password hashing using Passport.js
- Session-based authentication

## ✍️ Listing Management

- Create new listings
- Edit existing listings
- Delete listings
- Only listing owners can edit or delete their own listings

## ⭐ Reviews

- Add reviews
- Delete reviews
- Only review owners can delete their reviews

## 🖼 Image Uploads

- Cloudinary integration
- Image upload using Multer

## 🗺 Interactive Maps

- Mapbox integration
- Displays property location on an interactive map

## 💰 Price Toggle

- Toggle prices before and after taxes

## 📱 Responsive Design

- Fully responsive UI
- Bootstrap 5
- Mobile-friendly navigation

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- Passport.js
- passport-local
- passport-local-mongoose

## Cloud & Deployment

- Cloudinary
- Mapbox
- MongoDB Atlas
- Render

---

# 📂 Project Structure

```text
StayScape
│
├── controllers/
├── middleware/
├── models/
├── public/
│   ├── css/
│   └── js/
│
├── routes/
├── utils/
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── init/
├── app.js
├── cloudConfig.js
├── schema.js
└── package.json
```

---

# 🔒 Authorization

StayScape implements role-based authorization.

- ✅ Only logged-in users can create listings
- ✅ Only listing owners can edit or delete their listings
- ✅ Only logged-in users can post reviews
- ✅ Only review owners can delete their reviews

---

# 📚 What I Learned

During this project, I gained hands-on experience with:

- Building RESTful web applications
- MVC Architecture
- Authentication using Passport.js
- Authorization and Access Control
- MongoDB Atlas
- Cloudinary Integration
- Mapbox API
- File Uploads with Multer
- Express Middleware
- Session Management
- Form Validation using Joi
- Deploying Full-Stack Applications on Render

---

# 🚀 Future Improvements

- ❤️ Wishlist/Favorites
- 📅 Booking System
- 💳 Payment Integration
- 👤 User Profiles
- 📧 Email Verification
- 🔐 Forgot Password
- 🌙 Dark Mode
- 🔎 Advanced Filters

---



# 📄 License

This project is developed for **educational and portfolio purposes**.
