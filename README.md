
# 🧠 PsycheCounselAI — LLM-Powered Mental Health Chatbot

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Made with LLaMA 3.2](https://img.shields.io/badge/LLM-LLaMA%203.2-blue)](https://huggingface.co)  
[![Built with MERN & FastAPI](https://img.shields.io/badge/Stack-MERN%20%2B%20FastAPI-lightgrey)](#tech-stack)

**PsycheCounselAI** is an AI-powered mental health companion built to support psychotherapy sessions through intelligent and empathetic conversations. Powered by **LLaMA 3.2** and fine-tuned using Hugging Face Transformers, it blends psychological therapy with state-of-the-art language models.

---

## 🧩 Tech Stack

- **Frontend:** React (Vite)  
- **Backend:** FastAPI + Node.js  
- **AI Engine:** Meta's LLaMA 3.2 via Hugging Face Transformers  
- **Notebook:** Jupyter (for training logs, analytics)  
- **Middleware:** Express.js  
- **Model Endpoint:** LLaMA 3.2 served via API  

---

## 💡 Features

- 🧠 **LLM-based Psychotherapy Chat** – Empathetic, multi-turn conversations  
- 🔐 **Secure & Private** – Anonymity-first architecture  
- 🧘 **Mood & Sentiment Detection**  
- 🖥️ **Modern UI with Vite**  
- 📔 **Notebook for Analysis & Model Interaction**  
- ⚡ **Real-time API with FastAPI**  

---

## 🚀 Getting Started

### 🖼️ Frontend (React + Vite)

```bash
cd client
npm install
npm run dev
```

### ⚙️ Backend (Node)

```bash
cd server
npm install
npm start
```

---

### 🔑 Environment Variables

Set the following variables for local development:

- **Backend (`server/.env` or system env):**

```env
MONGO_URI=mongodb://localhost:27017/psyche
```

- **Frontend (`client/.env`):**

```env
VITE_API_URL=https://your-ngrok-url.ngrok-free.app
```

---

## 📸 Screenshots

![Home UI](/client/public/homess.png)
![Chat UI](/client/public/chatss.png)

---

## 📌 Roadmap

- [x] LLaMA 3.2 core chat integration  
- [x] Anonymous therapy chat  
- [x] FastAPI + Node hybrid backend  
- [x] Voice-to-text support  
- [ ] Chat history export (CSV/JSON)  
- [ ] Therapist dashboard  

---

## 🤝 Contributing

Want to help? Fork, clone, and open a pull request:

```bash
git clone https://github.com/rj25031/PsycheCounselAI---LLM-Mental-Health-Chatbot.git
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- Meta AI — LLaMA 3.2  
- Hugging Face Transformers  
- Vercel, FastAPI, and MERN community  
- All open-source contributors supporting mental health tech  

---

> 🧘 _“Your mind matters. Talk to someone—even if it's AI.”_
