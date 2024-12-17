const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để phục vụ file tĩnh (public)
app.use(express.static('public'));

// Route chính
app.get('/', (req, res) => {
    res.send('<h1>Chào mừng bạn đến với ứng dụng Node.js trên Render!</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
