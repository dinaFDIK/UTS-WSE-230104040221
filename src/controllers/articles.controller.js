let articles = require('../data/articles.data');

// Helper function untuk validasi (Prinsip 6: Validation & Error Handling)
const validateArticle = (data) => {
  if (!data.title) {
    return "Field 'title' wajib diisi"; // Contoh Respon Error
  }
  if (!data.author) {
    return "Field 'author' wajib diisi";
  }
  if (!data.content) {
    return "Field 'content' wajib diisi";
  }
  return null;
};

// --- READ: Ambil Semua Data ---
// GET /api/articles (Prinsip 2: Proper HTTP Methods & Prinsip 1: Resource-Oriented URI)
exports.getAll = (req, res) => {
  // Prinsip 4: Consistent Status Codes (200 OK)
  res.status(200).json({
    status: "success",
    count: articles.length,
    data: articles,
  });
};

// --- READ: Ambil Data Berdasarkan ID ---
// GET /api/articles/:id
exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find(a => a.id === id);

  if (!article) {
    // Prinsip 4: Consistent Status Codes (404 Not Found)
    return res.status(404).json({
      status: "fail",
      message: `Article dengan ID ${id} tidak ditemukan`,
    });
  }

  // Prinsip 4: Consistent Status Codes (200 OK)
  res.status(200).json({
    status: "success",
    data: article,
  });
};

// --- CREATE: Tambah Data Baru ---
// POST /api/articles
exports.create = (req, res) => {
  const validationError = validateArticle(req.body);

  if (validationError) {
    // Prinsip 4: Consistent Status Codes (400 Bad Request)
    // Prinsip 6: Validation & Error Handling
    return res.status(400).json({
      status: "fail",
      message: validationError,
    });
  }

  const newArticle = {
    id: articles.length ? Math.max(...articles.map(a => a.id)) + 1 : 1, // ID baru
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    createdAt: new Date().toISOString(),
  };

  articles.push(newArticle);

  // Prinsip 4: Consistent Status Codes (201 Created)
  res.status(201).json({
    status: "success",
    message: "Data Article berhasil dibuat",
    data: newArticle,
  });
};

// --- UPDATE: Ubah Data ---
// PUT /api/articles/:id
exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const articleIndex = articles.findIndex(a => a.id === id);

  if (articleIndex === -1) {
    // Prinsip 4: Consistent Status Codes (404 Not Found)
    return res.status(404).json({
      status: "fail",
      message: `Article dengan ID ${id} tidak ditemukan`,
    });
  }
  
  const validationError = validateArticle(req.body);
  if (validationError) {
    // Prinsip 4: Consistent Status Codes (400 Bad Request)
    // Prinsip 6: Validation & Error Handling
    return res.status(400).json({
      status: "fail",
      message: validationError,
    });
  }

  const updatedArticle = {
    ...articles[articleIndex], // Ambil data lama
    ...req.body,               // Timpa dengan data baru dari body
    id: id,                    // Pastikan ID tetap sama
    updatedAt: new Date().toISOString(),
  };

  articles[articleIndex] = updatedArticle;

  // Prinsip 4: Consistent Status Codes (200 OK)
  res.status(200).json({
    status: "success",
    message: "Data Article berhasil diupdate",
    data: updatedArticle,
  });
};

// --- DELETE: Hapus Data ---
// DELETE /api/articles/:id
exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const articleIndex = articles.findIndex(a => a.id === id);

  if (articleIndex === -1) {
    // Prinsip 4: Consistent Status Codes (404 Not Found)
    return res.status(404).json({
      status: "fail",
      message: `Article dengan ID ${id} tidak ditemukan`,
    });
  }

  articles.splice(articleIndex, 1);

  // Prinsip 4: Consistent Status Codes (204 No Content)
  // Tidak ada body, hanya status code
  res.status(204).send();
};