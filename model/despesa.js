let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var despesaShema = new Schema({
    nome: {type: String, required: true},
    categoria: {type: String},
    valor: {type: Number, required: true},
});

module.exports = mongoose.model("despesa", despesaShema);