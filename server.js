const express = require('express');
const proxy = require('express-http-proxy');
const http = require('http');

const app = express();
app.set('view engine', 'ejs')

const targetUrl = "https://www.madamecoco.com"; 


app.use(express.static('static'));

app.use('/api/', proxy(targetUrl));

app.get('/', (req, res) => {
  res.redirect("/list/");
});

app.get('/list/', (req, res) => {
  let queryString = req.url.split("?").length > 1 ? `?${req.url.split("?")[1]}` : "";

  require('request').get(
      `${targetUrl}/list/${queryString}`, 
      {
        headers: {
          "Accept": "application/json"
        },
      },
      function(error, response, body){
        res.render('index', JSON.parse(body))
      }
  );
});

app.get('/product/:id', (req, res) => {
  require('request').get(
      `${targetUrl}/product/${req.params.id}/`, 
      {
        headers: {
          "Accept": "application/json"
        },
      },
      function(error, response, body){
        res.render('product', JSON.parse(body))
      }
  );
})



const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port}/ adresinde çalışıyor.`);
});
console.log("Madame Coco Projesine Hos Geldiniz :)");
console.log(" ");
