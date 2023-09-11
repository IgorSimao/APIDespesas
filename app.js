var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var despesasRouter = require('./routes/despesasRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', despesasRouter);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error. status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})
module.exports = app;
