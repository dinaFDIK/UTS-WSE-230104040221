🧩 UTS — “Membangun RESTful API dengan CRUD Lengkap dan 7
 RESTful Principles”
 Resource: articles (Sesuai Digit Akhir NIM 1) Mata Kuliah: Web Service Engineering   Dosen
 Pengampu: Muhayat, M.IT
 📄 Deskripsi Proyek
 Proyek ini mengimplementasikan RESTful API berbasis Express.js untuk resource articles dengan
 operasi CRUD lengkap, validasi input, serta penerapan 7 Prinsip RESTful API.
 Resource Detail
 Nama Resource (URI): /api/articles
 Field Utama (Wajib Validasi): title , author , content
 Port Default: 3000
 🎯 Tujuan Utama (Sesuai Soal UTS)
 Mendesain endpoint RESTful untuk resource articles .  
Mengimplementasikan CRUD lengkap (GET, POST, PUT, DELETE).  
Menerapkan 7 RESTful Principles secara eksplisit.  
Menerapkan Validasi input ( title , author , content ) dan Error Handling.
 🧱 Struktur Folder Project
Struktur proyek mengikuti format modular yang disyaratkan:
UTS-WSE-NimAnda/
├─ package.json
├─ README.md
├─ src/
│  ├─ app.js
│  ├─ routes/
│  │   └─ articles.routes.js
│  ├─ controllers/
│  │   └─ articles.controller.js
│  ├─ data/
│  │   └─ articles.data.js
└─ package-lock.json

 🧠 Konsep Arsitektur Singkat
1. Client (Postman / Thunder Client): Mengirim request CRUD.  
1/3
 https://gemini.google.com/app/afbae2247c92afb8?hl=id
11/10/25, 5:06 PM
 Google Gemini
2. API Server (Express): Titik masuk utama, mengatur middleware dan endpoint dasar ( /api/info ).
3. Router ( articles.routes.js ): Mendefinisikan semua endpoint RESTful dan mengarahkan
 request ke Controller.  
4. Controller / Handler: Berisi semua logika bisnis (CRUD) dan validasi input.  
5. Data Layer ( articles.data.js ): Menyimpan data dummy sementara.
 ⚙ Cara Menjalankan Proyek
 1. Instalasi Dependensi:
 npm install
 2. Menjalankan Server: Aplikasi wajib dijalankan dengan:
 npm run dev
 Server akan berjalan di http://localhost:3000 .
 🧮 7 RESTful Principles (Wajib Diterapkan)
 Prinsip 1 (Resource-Oriented URI): URI menggunakan kata benda jamak: /api/articles .
 Prinsip 2 (Proper HTTP Methods): Menggunakan GET, POST, PUT, DELETE sesuai fungsinya.
 Prinsip 3 (Stateless Communication): Tiap request independen tanpa session/state di server.
 Prinsip 4 (Consistent Status Codes): Menggunakan 200, 201, 204, 400, 404, 500 yang tepat.
 Prinsip 5 (JSON Representation): Semua response berformat JSON yang rapi dan seragam.
 Prinsip 6 (Validation & Error Handling): Memeriksa field wajib ( title , author , content ) dan
 mengembalikan error 400.
 Prinsip 7 (Discoverability): Menyertakan endpoint /api/info .
 🧰 Daftar Endpoint RESTful API
 Semua endpoint menggunakan base URL: http://localhost:3000/api/
 GET (READ)
 Endpoint: /articles
 Deskripsi: Ambil semua data artikel.
 Status: 200 OK
 2/3
 https://gemini.google.com/app/afbae2247c92afb8?hl=id
11/10/25, 5:06 PM
 Google Gemini
 Endpoint: /articles/:id
 Deskripsi: Ambil artikel berdasarkan ID.
 Status: 200 OK atau 404 Not Found
 Endpoint: /info
 Deskripsi: Informasi service (Discoverability).
 Status: 200 OK
 POST (CREATE)
 Endpoint: /articles
 Deskripsi: Tambah data baru.
 Status: 201 Created atau 400 Bad Request (Jika validasi gagal)
 Body Contoh: {"title": "Judul Baru", "author": "Penulis", "content": "Isi..."}
 PUT (UPDATE)
 Endpoint: /articles/:id
 DELETE
 Deskripsi: Update penuh data.
 Status: 200 OK atau 404 Not Found
 Body Contoh: {"title": "Judul Revisi", "author": "Penulis Baru", "content":
 "Konten baru..."}
 Endpoint: /articles/:id
 Deskripsi: Hapus data.
 Status: 204 No Content atau 404 Not Found
 📸 Bukti Pengujian (5 Screenshot Wajib)
 Screenshot harus membuktikan semua fungsi dan error handling:
 1. GET Semua Data: GET /api/articles (Status 200 OK)
 2. GET by ID: GET /api/articles/1 (Status 200 OK)
 3. POST Berhasil: POST /api/articles (Status 201 Created)
 4. POST Gagal (Validasi): POST /api/articles (Status 400 Bad Request)
 5. DELETE Berhasil: DELETE /api/articles/:id (Status 204 No Content