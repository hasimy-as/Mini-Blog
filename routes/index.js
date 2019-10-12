import express from 'express';
let Route = express.Router();

Route.get('/', (req, res) => {
  res.render('index', { nama: 'Artikel' });
});

Route.get('/artikel', (req, res) => res.render('artikel/artikel'));

Route.get('/artikel1', (req, res) => res.render('artikel/artikel1'));

Route.get('/artikel2', (req, res) => res.render('artikel/artikel2'));

Route.get('/artikel3', (req, res) => res.render('artikel/artikel3'));

Route.get('/saya', (req, res) => res.render('tentang'));

export default Route;
