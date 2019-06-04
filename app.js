var express = require('express'),
    app = express(),
    request = require('request');

app.set("view engine", "ejs");



app.get("/websites", (req, res)=>{
    request("https://jsonplaceholder.typicode.com/users", (error, response, body) =>{
        if (!error && response.statusCode == 200){
            var website = JSON.parse(body)
            res.render("websites", {website: website});
        }
    });
});

app.get("/contatos", (req, res)=>{
    request("https://jsonplaceholder.typicode.com/users", (error, response, body) =>{
        if (!error && response.statusCode == 200){
            var contatos = JSON.parse(body);
            contatos.sort((a, b) => (a.name > b.name) ? 1 : -1)
            res.render("contatos", {contatos: contatos});
        }
    });
});

app.get("/enderecos", (req, res)=>{
    request("https://jsonplaceholder.typicode.com/users", (error, response, body) =>{
        if (!error && response.statusCode == 200){
            var enderecos = JSON.parse(body);
            res.render("enderecos", {enderecos:enderecos});
        }
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });