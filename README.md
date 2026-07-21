# 🏡 StayScape

StayScape is a full-stack accommodation booking platform inspired by Airbnb. It allows users to explore unique stays, create and manage property listings, upload images, search destinations, leave reviews, and securely authenticate using Passport.js.

## 🌐 Live Demo

🔗 https://stayscape-vdtp.onrender.com

## ✨ Features

### 🏠 Property Listings
- Browse accommodation listings
- View detailed property information
- Responsive card-based UI
- Categories (Beaches, Mountains, Camping, Boats, Arctic, etc.)

### 🔍 Search
- Search listings by
  - Title
  - Location
  - Country

### 👤 Authentication
- User Registration
- Login & Logout
- Password hashing with Passport.js
- Session-based authentication

### ✍️ Listing Management
- Create new listings
- Edit existing listings
- Delete listings
- Only owners can edit/delete their own properties

### ⭐ Reviews
- Add reviews
- Delete reviews
- Only review owners can delete their reviews

### 🖼 Image Uploads
- Cloudinary integration
- Multer for file uploads

### 🗺 Maps
- Interactive Mapbox integration
- Displays property location

### 💰 Price Toggle
- Display prices before/after taxes

### 📱 Responsive Design
- Bootstrap 5
- Mobile-friendly navbar
- Responsive cards and forms

---

# 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- passport-local
- passport-local-mongoose

### Cloud Services
- Cloudinary
- MongoDB Atlas
- Render
- Mapbox

---

# 📂 Project Structure

```
StayScape
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── views/
│   ├── listings/
│   ├── users/
│   ├── includes/
│   └── layouts/
│
├── public/
│   ├── css/
│   ├── js/
│
├── utils/
├── init/
├── app.js
├── cloudConfig.js
├── schema.js
└── package.json
```
# 🔒 Authorization

StayScape implements role-based authorization.

✔ Only logged-in users can create listings

✔ Only listing owners can edit or delete their listings

✔ Only logged-in users can post reviews

✔ Only review owners can delete their reviews

---

# 📚 What I Learned

During this project I gained hands-on experience with:

- Building RESTful web applications
- MVC Architecture
- Authentication using Passport.js
- Authorization
- MongoDB Atlas
- Cloudinary Integration
- Mapbox APIs
- File Uploads with Multer
- Express Middleware
- Session Management
- Form Validation using Joi
- Deploying Full Stack Applications on Render

---

# 👨‍💻 Author

**Harith D.N**

GitHub: https://github.com/Harithdn

LinkedIn: *(Add your LinkedIn profile here)*

---

# 📄 License

This project is built for educational and portfolio purposes.
