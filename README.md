# 🎵 Mood Music

Mood Music is a full-stack web application that lets users sign up, log in, and create, share, or browse curated playlists and tracks that match their mood.  

It’s built with **Node.js, Express, MongoDB, and EJS**, featuring user authentication and CRUD functionality — all wrapped in a chill, music-driven aesthetic. 🎧

---

## 🧩 Tech Stack
- **Frontend:** EJS templating + Bootstrap + Custom CSS (music-themed gradients)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** Passport.js (local strategy)  
- **Other:** dotenv, express-session, bcrypt  

---

## 💫 Features
- 🎶 User authentication (Signup / Login / Logout)  
- 🎵 Create and post tracks or playlists  
- ❤️ Like, dislike, or delete songs/playlists  
- 📻 Browse all users’ shared music  
- 🖌️ Responsive, modern UI with music-inspired styling  
- 🔒 Passwords hashed and secured with bcrypt  

---

## 🚀 Getting Started

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
👉 http://localhost:3000
```


---

## 🗂️ Folder Structure
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

## 🧠 Core Logic

Users register and log in via Passport local strategy. Once logged in, they can add tracks or playlists to share with the community.

- Music data is stored in MongoDB and rendered dynamically using EJS.
- Users can like (❤️) or dislike (👎) tracks, or delete (🗑️) their own.
- Logout clears the session, returning them to the login screen.

---

## 💻 Example

Name: leeanneeagan@example.com  
Track: “Chill Vibes - Lo-fi Beats”  
Likes: ❤️❤️❤️


---

## 🌠 Future Enhancements

Personal playlists with uploaded tracks:
- Mood-based categories (chill, upbeat, focus, sleep)
- Public/private playlist toggles
- Notifications for liked tracks
- Animated music visualizers 🎶✨

---

## 🪶 Author

Leeanne Eagan 🎵
Curating vibes and building interactive musical experiences.
GitHub


---

## 📜 License

This project is licensed under the MIT License — remix, share, and spread the mood!


---

This is fully **GitHub-ready**, using Markdown formatting, emojis, and headings for clarity.  

If you want, I can also create a **version that visually uses emojis for each folder and file** to make it feel like a “music mood board” inside GitHub — very aesthetic.  

Do you want me to make that version too?

