const express = require('express');
const proxy = require('express-http-proxy');
const http = require('http');

const app = express();
app.set('view engine', 'ejs')

const targetUrl = "https://www.madamecoco.com"; 


app.use(express.static('static'))

app.use('/api/', proxy(targetUrl));

app.get('/', (req, res) => {
  require('request').get(
      `${targetUrl}/list/?format=json`, 
      {},
      function(error, response, body){
        res.render('index', JSON.parse(body))
      }
  );
})

app.get('/product/:id', (req, res) => {
  require('request').get(
      `${targetUrl}/product/${req.params.id}/?format=json`, 
      {},
      function(error, response, body){
        res.render('product', JSON.parse(body))
      }
  );
})



const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port}/ adresinde çalışıyor.`);
});
