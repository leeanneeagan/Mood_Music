## 🎵 Mood Music
Mood Music is a full-stack web app that lets users sign up, log in, and share songs that match their mood, rate them too!
Built with Node.js, Express, MongoDB, and EJS, it includes user authentication, full CRUD functionality, and a fresh, music-driven vibe. 🎧
---

![Mood Music App Screenshot](public/img/main.png)

---
## Tech Stack

- **Frontend:** EJS templating + Bootstrap + Custom CSS (music-themed gradients)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** Passport.js (Local Strategy)  
- **Other:** dotenv, express-session, bcrypt  

---

## ✨ Features

- User authentication (Signup / Login / Logout)  
- Add **Artist** + **Song Title** for every post  
- Rate songs (1–5 stars)  
- See **average rating** calculated automatically from all users  
- Edit or delete your own songs  
- Browse music shared by all users  
- Responsive, modern UI with a music-inspired vibe  
- Passwords securely hashed with bcrypt 
---

## Getting Started

1. **Clone this repo**
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

2. **Install dependencies**
npm install

3. **Create a .env file
Inside the project root, add your environment variables:
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key


4. **Start the app
npm start

Then visit:
http://localhost:3000
```


---

##  Folder Structure
```
.  
├── public/  
│   ├── style.css  
│   └── main.js  
├── views/  
│   ├── index.ejs  
│   ├── login.ejs  
│   ├── signup.ejs  
│   └── profile.ejs  
├── models/  
│   └── user.js  
├── routes/  
│   └── main.js  
├── server.js  
├── package.json  
└── README.md
```



---

## Core Logic

Users register and log in via Passport local strategy. Once logged in, they can add songs to share with the community.

- Music data is stored in MongoDB and rendered dynamically using EJS.
- Each song can be rated 1–5 stars by any logged-in user.
- Logout clears the session, returning them to the login screen.

---

##  Example
Artist	       Song	              Average Rating
FKJ	           Tadow	          ⭐⭐⭐⭐☆ (4.3)
SZA	           Snooze	          ⭐⭐⭐⭐⭐ (5.0)
Anderson .Paak	Come Down	      ⭐⭐⭐⭐☆ (4.6)
---

## 🌠Future Enhancements
-  Mood-based song categories (chill, hype, focus, romantic)
-  Create personal playlists with public/private toggle
-  Notifications when someone rates your song
-  Real-time animated music visualizer synced to track energy

---

##  Author

Leeanne Eagan 
Curating vibes and building interactive musical experiences.
GitHub


---

##  License

This project is licensed under the MIT License — remix, share, and spread the mood!



