const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để phục vụ file tĩnh
app.use(express.static('public'));

// Route chính để render trang web
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
