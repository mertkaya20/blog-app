📝 Blog App
A full-featured blog application built to practice TanStack Query for server state management in React.

🇹🇷 Türkçe açıklama aşağıda / Turkish description below

🚀 Features

📋 List all blog posts with pagination
📄 View post details with comments
✍️ Create new posts
✏️ Edit existing posts
🗑️ Delete posts
⚡ Automatic cache invalidation after mutations
🪝 Clean and reusable code structure with custom hooks

🛠️ Tech Stack

React — UI library
Vite — Build tool and dev server
TanStack Query — Server state management
Axios — HTTP requests
React Router v6 — Client-side routing
Tailwind CSS — Styling
JSON Server — Mock REST API
Custom Hooks — All TanStack Query logic abstracted into reusable hooks (usePosts, usePost, useComments, useAddPost, useUpdatePost, useDeletePost)

📦 Installation

# Clone the repository

git clone https://github.com/mertkaya20/blog-app.git
cd blog-app

# Install dependencies

npm install

# Start the mock API (keep this terminal open)

cd blog-app
npx json-server db.json --port 3001

# In a new terminal, start the dev server

npm run dev
App will be running at http://localhost:5173
API will be running at http://localhost:3001

📁 Project Structure
src/
├── pages/
│ ├── Home.jsx # Post list with pagination
│ ├── PostDetail.jsx # Single post + comments
│ ├── NewPost.jsx # Create post form
│ └── EditPost.jsx # Edit post form
├── components/
│ ├── Navbar.jsx
│ ├── PostCard.jsx
│ └── CommentList.jsx
└── services/
└── tanstack.js # All custom hooks (useQuery & useMutation)

🔗 API Endpoints
GET/posts # Get all posts
GET/posts/:id # Get single post
POST/posts # Create post
PATCH/posts/:id # Update post
DELETE/posts/:id # Delete post
GET/comments?postId=:id # Get comments by post

📝 Blog App (Türkçe)
TanStack Query ile React'ta server state yönetimini öğrenmek için geliştirilmiş tam özellikli bir blog uygulaması.

🚀 Özellikler

📋 Pagination ile blog yazılarını listeleme
📄 Yazı detayını ve yorumları görüntüleme
✍️ Yeni yazı oluşturma
✏️ Mevcut yazıları düzenleme
🗑️ Yazı silme
⚡ Mutation sonrası otomatik cache yenileme
🪝 Custom hook'lar ile temiz ve yeniden kullanılabilir kod yapısı

🛠️ Kullanılan Teknolojiler

React — UI kütüphanesi
Vite — Build tool and dev server
TanStack Query — Server state yönetimi
Axios — HTTP istekleri
React Router v6 — Sayfa yönetimi
Tailwind CSS — Stil
JSON Server — Mock REST API
Custom Hooks — Tüm TanStack Query işlemleri yeniden kullanılabilir hook'lara ayrıldı (usePosts, usePost, useComments, useAddPost, useUpdatePost, useDeletePost)

📦 Kurulum

# Repoyu klonla

git clone https://github.com/mertkaya20/blog-app.git
cd blog-app

# Bağımlılıkları yükle

npm install

# Mock API'yi başlat (bu terminali açık tut)

cd blog-app
npx json-server db.json --port 3001

# Yeni terminalde geliştirme sunucusunu başlat

npm run dev
Uygulama http://localhost:5173 adresinde çalışacak
API http://localhost:3001 adresinde çalışacak

📁 Proje Yapısı
src/
├── pages/
│ ├── Home.jsx # Pagination ile yazı listesi
│ ├── PostDetail.jsx # Tekil yazı + yorumlar
│ ├── NewPost.jsx # Yazı oluşturma formu
│ └── EditPost.jsx # Yazı düzenleme formu
├── components/
│ ├── Navbar.jsx
│ ├── PostCard.jsx
│ └── CommentList.jsx
└── services/
└── tanstack.js # Tüm custom hook'lar (useQuery & useMutation)

🔗 API Endpoint'leri
GET /posts # Tüm postları getir
GET/posts/:id # Tek post getir
POST/posts # Post oluştur
PATCH/posts/:id # Post güncelle
DELETE/posts/:id # Post sil
GET/comments?postId=: # id Posta ait yorumları getir
