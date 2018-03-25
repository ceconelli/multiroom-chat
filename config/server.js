//importar o modulo do framework express

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//iniciar o objeto express

var app = express();

//setar as variaveis 'view engine' e 'views' do express
app.set('view engine','ejs');
app.set('views','./app/views'); //indica onde estão as views

//configurar o middleware express.static
app.use(express.static('./app/public'));

//configurar o middleware body parser
/* quando houver post de formulario,é possivel
 * recuperar as informações inseridas atraves 
 * da propriedade body do request */
app.use(bodyParser.urlencoded({extended : true}));

//configurar o middleware express.validator
app.use(expressValidator());


//efetua o auto load das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .include('app/models')
    .include('app/controllers')
    .into(app);

//exportar o app para que o app.js possa usá-lo
module.exports = app;