const authModel = require('../models/authModel');
const connection = require('../models/connection');

exports.login = async( req, res) => {
    const { nome, senha} = req.body;

    try{
        // futuramente verificar autenticacao com a mesa escolhuda
        const user = await authModel.autenticar(nome, senha /*,mesa*/);

        if(user.length > 0){
            res.status(200).json({message : 'Login bem-sucedido'});
        }else{
        res.status(401).json({error : 'Credenciais invalidas'})
        }
    }catch(err){
        console.error('Erro ao autenticar',err);
        res.status(500).json({error : 'Erro ao autenticar usuario'});
    }
};

exports.register = async (req, res) => {
    const {nome, senha} = req.body;

    try{
        const existUser = await authModel.verificaExistencia(nome);

        if(existUser.length > 0){
            res.status(404).json({error : 'Usuario ja existe'});
        }else{
            await authModel.registrar(nome,senha);
            res.status(201).json({success : 'Registro bem-sucedido'});
        }
    }catch(err){
        console.log('Erro ao registrar',err);
        res.status(500).json({error : 'Erro ao registrar user'});
    }    
};

exports.delete = async(req,res)=>{
    const {nome} = req.params;

    try{
        await authModel.delete(nome);
        res.status(200).json({success : 'Usuário deletado com sucesso!'});
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Erro ao deletar usuário'});
    }
};

exports.get = async(req,res)=>{
    const {nome} = req.params;

    try{
       const usuario = await authModel.buscarPorUsuario(nome);
        res.json(usuario);
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Usuario nao esta cadastrado"});
    }
};