const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const dbConfig = {
  user: 'HUAWEI\\23ism',         
  password: '',                  
  server: 'HUAWEI\\SQLEXPRESS',  
  database: 'RestaurantlarUygulamasi', 
  options: {
    encrypt: false,              
    enableArithAbort: true
  }
};

app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
  
    try {
      await sql.connect(dbConfig);
  
      const request = new sql.Request();
      request.input('email', sql.VarChar, email);
      request.input('username', sql.VarChar, username);
      request.input('password', sql.VarChar, password);
      
  
      const result = await request.query(
        'INSERT INTO dbo.Kayit (email, username, password) VALUES (@email, @username, @password)'
      );
  
      res.status(201).send({ message: 'Kayıt işlemi başarıyla gerçekleştirildi!' });
    } catch (err) {
      console.error('SQL error', err);
      res.status(500).send({ error: 'Kayıt işlemi başarısız oldu.' });
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});