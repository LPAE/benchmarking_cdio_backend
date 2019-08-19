const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-k1xjv.mongodb.net/test?retryWrites=true&w=majority', {
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