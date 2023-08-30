import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";

function LoginAtendente() {

  const {autenticacaoAtendente} = useContext(MainContext);
  
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");


  const [tipoSenha, setTipoSenha] = useState("password");

  return (
    <>
      <div>
        <h2>Login Atendente</h2>
        <p><Link to="/">voltar</Link></p>
      </div>
      <form className="formulario">
        <div className="nome-e-senha">
          <input 
            autoFocus
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            type="text"
            className="nome"
          />
          <div>
            <input 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="senha"
              type={tipoSenha}
            />
            {tipoSenha === "password" ? (
              <button
                className="botao-mostraSenha"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoSenha("text")
                }}
              >
                mostrar senha
              </button>
            ) : (
              <button
                className="botao-escondeSenha"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoSenha("password")
                }}
              >
                esconder senha
              </button>
            )}
          </div>
        </div>
        <div className="botao-enviar">
          <button
            type="submit"
            onClick={(e) => autenticacaoAtendente(e, nome, senha)}
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginAtendente;