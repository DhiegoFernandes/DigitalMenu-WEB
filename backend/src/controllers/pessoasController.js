const pessoasModel = require('../models/pessoasModel');

console.log(pessoasModel.get.getPessoas);

const getAll = (req, res) => {
    
    const pessoas =  pessoasModel.get.getPessoas();
    return res.status(200).json(pessoas)
};

module.exports = {
    getAll
};