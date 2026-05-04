# 🧭 SCAN Horizon — Smart Campus Navigation

SCAN Horizon adalah aplikasi web berbasis mobile yang membantu mahasiswa, staf, dan pengunjung menemukan ruangan dan fasilitas di dalam kampus Horizon University Indonesia dengan cepat dan mudah menggunakan peta interaktif.

---

## 🎯 Project Overview

Banyak mahasiswa mengalami kesulitan dalam mencari ruangan karena:
- Layout gedung yang kompleks (terutama Gedung A, B, C)
- Tidak adanya sistem navigasi digital
- Informasi lokasi yang tidak praktis

SCAN Horizon hadir sebagai solusi dengan menyediakan:
- 🔍 Pencarian ruangan
- 🗺️ Peta interaktif berbasis layout gedung
- 📍 Highlight lokasi secara visual
- 📱 Tampilan mobile-first yang intuitif

---

## 🚀 Features

### ✅ Core Features
- Building selection (Gedung A/B/C & Gedung D)
- Room search (real-time filtering)
- Interactive map (PNG-based layout)
- Highlight ruangan dengan overlay
- Detail informasi ruangan
- Zoom & pan map
- Floor selector (multi lantai)

### ✨ UI/UX Features
- Modern mobile UI (SaaS style)
- Smooth highlight animation
- Glassmorphism card
- Gradient overlay hero background
- Lucide icon system

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS v4 (@tailwindcss/vite)
- React Router DOM
- react-zoom-pan-pinch

### UI
- Lucide Icons
- Custom CSS Variables (Horizon Theme)

### Data
- Static JSON (rooms.js)

---

## 📂 Project Structure

```
src/
├── components/
├── data/
├── pages/
├── App.jsx
├── index.css
└── main.jsx

public/
└── maps/
```

---

## 🔄 User Flow

1. User membuka aplikasi
2. Memilih gedung
3. Masuk ke halaman map
4. Mencari ruangan
5. Map update
6. Ruangan di-highlight
7. Detail ruangan muncul

---

## 🧪 How to Run

```
git clone https://github.com/username/scan-horizon.git
cd scan-horizon
npm install
npm run dev
```

---

## 👨‍💻 Author

Muhammad Ridho Darmawan

---

⭐ Jika project ini bermanfaat, jangan lupa kasih star!
