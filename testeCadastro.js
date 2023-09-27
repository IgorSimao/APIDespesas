let connection = require('./config/database') ();
let despesaModel = require("./model/despesa");

let despesa = new despesaModel({
    nome: "Escola",
    categoria: "Outros",
    valor: 200
})

despesa.save()
.then(savedDespesa => {
    console.log("Despesa Salva: " + despesa)
})
.catch(error => {
    console.log("Erro: " + error)
})