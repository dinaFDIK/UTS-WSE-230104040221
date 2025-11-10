const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.controller');

// Prinsip 1: Resource-Oriented URI (/api/articles menggunakan kata benda jamak)
// Prinsip 2: Proper HTTP Methods (GET, POST, PUT, DELETE)

// GET All & POST Create
router.route('/')
  .get(articleController.getAll)    // Ambil semua data
  .post(articleController.create);  // Tambah data baru

// GET By ID, PUT Update, DELETE Remove
router.route('/:id')
  .get(articleController.getById)   // Ambil data berdasarkan id
  .put(articleController.update)    // Update data
  .delete(articleController.remove); // Hapus data

// WAJIB: Mengekspor router instance
module.exports = router;