const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors=require("cors");

app.use(bodyParser.json());
  app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'reactdb'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

app.post('/AddInfo', (req, res) => {
  const { id, hoTen,gioiTinh, ngaySinh,noiSinh,dantoc,tonGiao,hoKhau,noiTotNghiep,namTotNghiep,cmnd,ngayCap,noiCap,diaChiNhanh,dienthoai,dienThoaiPhuHuynh,nganhDangKy } = req.body; 
  const sql = 'INSERT INTO kt2903 (`id`, `hoTen`, `gioiTinh`, `ngaySinh`,`noiSinh`,`dantoc`,`tonGiao`,`hoKhau`,`noiTotNghiep`,`namTotNghiep`,`cmnd`,`ngayCap`,`noiCap`,`diaChiNhanh`,`dienthoai`,`dienThoaiPhuHuynh`,`nganhDangKy`) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  connection.query(sql, [id,hoTen,gioiTinh,ngaySinh,noiSinh,dantoc,tonGiao,hoKhau,noiTotNghiep,namTotNghiep,cmnd,ngayCap,noiCap,diaChiNhanh,dienthoai,dienThoaiPhuHuynh,nganhDangKy], (error, results, fields) => {
    if (error) {
     
      console.error('Error adding info:', error);
      res.status(500).json({ error: 'Failed to add info' });
      return;
    }
    res.json({ message: 'Info added successfully' });
  });
});
app.get('/Info', (req, res) => {
  const sql = 'SELECT * FROM kt2903';

  connection.query(sql, (error, results, fields) => {
    if (error) {
      
      console.error('Error fetching infoes:', error);
      res.status(500).json({ error: 'Failed to fetch infoes' });
      return;
    }

    res.json(results);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});