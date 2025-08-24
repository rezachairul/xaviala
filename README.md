# 🌇 Platform Karya Tulis Xaviala

Platform web dinamis untuk karya tulis multi-genre (puisi, cerpen, pantun, dll) dengan fitur interaktif.  
Proyek ini dibuat menggunakan **Next.js 13 (App Router)** dengan database **SQLite** (MVP), dan mendukung mode **Publik** serta **Admin**.

---

## ✨ Fitur Utama

### Publik (Pembaca)
- 📖 Daftar karya tulis (puisi, cerpen, pantun, dll).
- 🔎 Filter & kategori karya tulis.
- 📝 Halaman detail karya (baca full).
- ⭐ Rating & 💬 komentar.
- 🎵 Mood tagging & integrasi musik (Tahap 2).
- 🔍 Pencarian tulisan (Tahap 2).

### Admin (Penulis / Pengelola)
- 🔐 Login Admin.
- 📊 Dashboard manajemen konten.
- ✍️ CRUD kategori & karya tulis.
- 🖼️ Upload media (cover, header, hero image).
- ✅ Validasi teks KBBI (Tahap 2).

---

## 🌐 Referensi
- Website lama penulis (Blogspot): [https://laulakn.blogspot.com/](https://laulakn.blogspot.com/)

## 🗂️ Struktur Folder

```plaintext
📦app
 ┣ 📂(public)                # Area publik (pembaca)
 │ ┣ 📂tulisan               # List & detail karya
 │ ┣ 📂kategori              # List kategori
 │ ┣ 📂search                # Search tulisan (Tahap 2)
 │ ┗ 📜page.js               # Landing page
 │
 ┣ 📂(admin)                 # Area admin (pengelola)
 │ ┣ 📂dashboard             # Dashboard overview
 │ ┣ 📂tulisan               # CRUD karya tulis
 │ ┣ 📂kategori              # CRUD kategori
 │ ┗ 📂media                 # Upload media
 │
 ┣ 📜layout.js               # Layout global
 ┣ 📜globals.css
 ┗ 📜page.js                 # Redirect ke halaman publik
 
📦components                 # Komponen reusable (UI)
📦lib                        # Database, auth, utils
📦services                   # API eksternal (musik, KBBI)
📦public                      # File statis (gambar, icon)
