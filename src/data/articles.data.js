// Mengimplementasikan Prinsip 3: Stateless Communication (data di server hanya dummy)
// Mengimplementasikan Prinsip 5: JSON Representation (data awal berbentuk array of object)

let articles = [
  { 
    id: 1, 
    title: "Membangun RESTful API dengan Express.js", 
    author: "Dina Muzaina Aqillah", 
    content: "Langkah-langkah membuat API CRUD dasar.",
    createdAt: new Date().toISOString()
  },
  { 
    id: 2, 
    title: "7 Prinsip RESTful API", 
    author: "Muzaina Aqillah", 
    content: "Penerapan URI, HTTP Methods, dan Status Code yang benar.",
    createdAt: new Date().toISOString()
  }
];

module.exports = articles;