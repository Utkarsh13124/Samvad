
# 📞 Samvad – Real-Time Video Conferencing Platform

Samvad is a custom-built video conferencing platform with Zoom-inspired features such as real-time video, chat, and screen sharing, powered by WebRTC and Socket.io.

## ✨ Features

- 🔹 Real-time video conferencing (WebRTC)
- 🔹 Group chat support (Socket.io)
- 🔹 Unique meeting rooms with generated IDs
- 🔹 Join meetings via direct links
- 🔹 Text + media sharing
- 🔹 Screen sharing
- 🔹 Authentication system
- 🔹 Meeting history tracking

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Context API
- Vite
- Material UI (MUI)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Socket.io
- WebRTC

## 📂 Folder Structure

```
📦 Samvad/
├── 📁 Backend/
│   └── 📁 src/
│       ├── 📁 controllers/
│       ├── 📁 models/
│       ├── 📁 routes/
│       └── 📄 app.js
├── 📁 Frontend/
│   ├── 📁 public/
│   └── 📁 src/
│       ├── 📁 assets/
│       ├── 📁 contexts/
│       ├── 📁 pages/
│       ├── 📁 styles/
│       ├── 📁 utils/
│       ├── 📄 App.jsx
│       ├── 📄 environment.jsx
│       ├── 📄 main.jsx
│       └── 📄 App.css / index.css
├── 📄 fundamentals.txt
├── 📄 Planning.txt
```

## ⚙️ Setup Instructions (Local Installation)

1. **Clone the repo**

```bash
git clone https://github.com/Utkarsh13124/Samvad.git
cd Samvad
```

2. **Install dependencies**

* For backend:

```bash
cd Backend
npm install
```

* For frontend:

```bash
cd ../Frontend
npm install
```

3. **Configure environment**

* Open `Frontend/src/environment.jsx`
* Set `isProd = false` to run locally

4. **Run the application**

* Backend:

```bash
cd Backend
npm start
```

* Frontend:

```bash
cd ../Frontend
npm run dev
```

## 🚀 Deployment

The app is deployed and available live:

🔗 **Live Demo**: [https://samvad-xowv.onrender.com/](https://samvad-xowv.onrender.com/)

> For deployment, ensure `isProd = true` in `Frontend/src/environment.jsx`.

---

## 🙌 Contribution

PRs and suggestions are welcome. Feel free to fork the repo and raise issues.

## 🐞 Known Issues

- On slow connections, peer connections may take longer to establish.
- UI responsiveness is limited on small screen devices.

---
