let despesas = [
    {id: 1, nome: "Alugel", valor: 800},
    {id: 2, nome: "Gasolina", valor: 300}
]
module.exports = {
    getAllDespesas : function(req, res, next){
        res.setHeader("content-type", "application/json");
        res.status(200).json(despesas);
    }
}