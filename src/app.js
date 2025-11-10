const express = require('express');
const articleRoutes = require('./routes/articles.routes');

const app = express();
const PORT = 3000; 

// Middleware untuk mem-parsing body request JSON (Prinsip 5: JSON Representation)
app.use(express.json());

// --- 7. Discoverability: Endpoint /api/info ---
// GET /api/info (Prinsip 7: Discoverability)
app.get('/api/info', (req, res) => {
  // Prinsip 4: Consistent Status Codes (200 OK)
  res.status(200).json({
    status: "success",
    serviceName: "Web Service Engineering UTS API",
    version: "1.0.0",
    resource: "articles",
    endpoints: [
      { method: "GET", path: "/api/articles", description: "Mendapatkan semua artikel" },
      { method: "GET", path: "/api/articles/:id", description: "Mendapatkan artikel berdasarkan ID" },
      { method: "POST", path: "/api/articles", description: "Menambah artikel baru" },
      { method: "PUT", path: "/api/articles/:id", description: "Mengubah artikel berdasarkan ID" },
      { method: "DELETE", path: "/api/articles/:id", description: "Menghapus artikel berdasarkan ID" },
      { method: "GET", path: "/api/info", description: "Informasi service" }
    ]
  });
});

// --- Register Resource Routes ---
// Semua endpoint berawal dari /api/<resource> (Prinsip 1: Resource-Oriented URI)
app.use('/api/articles', articleRoutes);

// --- Global Error Handling ---
// Catch-all untuk route yang tidak ditemukan (404)
app.use((req, res, next) => {
  // Prinsip 4: Consistent Status Codes (404 Not Found)
  res.status(404).json({
    status: "fail",
    // Menggunakan backtick (`) untuk template literal
    message: `Endpoint ${req.originalUrl} tidak ditemukan`,
  });
});


app.listen(PORT, () => {
  // Menggunakan backtick (`) untuk template literal
  console.log(`Server berjalan di http://localhost:${PORT}`);
});