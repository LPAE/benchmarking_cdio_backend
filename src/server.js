const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect(
  `${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
  },
  (err) => {
    if(err)
      console.log('Erro ao conectar ao MongoDB');
    else
      console.log('Conectado ao MongoDB')
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.listen(process.env.PORT || 3333);