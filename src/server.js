const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect(
  'mongodb://127.0.0.1:27017/teste', {
    useNewUrlParser: true,
  },
  (err) => {
    if(err)
      console.log('Erro ao conectar ao MongoDB');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.listen(3333, function () {
  console.log('app listening on port 3333')} );