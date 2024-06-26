const express = require("express");
const proxy = require("express-http-proxy");

const app = express();
app.set("view engine", "ejs");

const targetUrl = "https://www.madamecoco.com";

app.use(express.static("static"));

app.use("/api/", proxy(targetUrl));
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/list/");
});

app.get("/users/login", (req, res) => {
  res.render("login", "");
});

app.post("/users/login", (req, res) => {
  require("request").post(
    {
      headers: {
        Accept: "application/json",
      },
    },
    function (error, response, body) {
      res.render("login", JSON.parse(body));
    }
  );
});

app.get("/users/register", (req, res) => {
  console.log("register");
  res.render("register", "");
});

app.post("/users/register", (req, res) => {
  require("request").post(
    `${targetUrl}/users/register`,
    {
      headers: {
        "content-type": "application/json",
      },
    },
    function (error, response, body) {
      console.log(body);
      res.render("register", JSON.parse(body));
    }
  );
});

app.get("/list/", (req, res) => {
  let queryString =
    req.url.split("?").length > 1 ? `?${req.url.split("?")[1]}` : "";
  require("request").get(
    `${targetUrl}/list/${queryString}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
    function (error, response, body) {
      res.render("index", JSON.parse(body));
    }
  );
});

app.get("/product/:id", (req, res) => {
  require("request").get(
    `${targetUrl}/product/${req.params.id}/`,
    {
      headers: {
        Accept: "application/json",
      },
    },
    function (error, response, body) {
      if (error) {
        console.error("Hata:", error);
        res.status(500).send("Sunucu hatası");
        return;
      }

      if (response.statusCode !== 200) {
        console.error("HTTP Hatası:", response.statusCode);
        res.render("error", {
          statusCode: response.statusCode,
          message: "Bir hata oluştu",
        });
        return;
      }

      res.render("product", JSON.parse(body));
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port}/ adresinde çalışıyor.`);
});
console.log("Madame Coco Projesine Hos Geldiniz :)");
console.log(" ");
