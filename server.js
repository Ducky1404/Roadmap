const express = require('express');
const app = express();

// Sử dụng cổng từ môi trường hoặc mặc định là 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Ứng dụng Node.js đang chạy thành công!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
