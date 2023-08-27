import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [usuario, setUsuario] = useState("mesa");

  const [tipoSenha, setTipoSenha] = useState("password");

  return (
    <>
      <div>
        <h2>Login</h2>
        <p><Link to="/">voltar</Link></p>
      </div>
      <div>
        fazer opition de mesa ou garçom e o context do autenticacaoLogin
      </div>
      <form className="formulario">
        <div className="email-e-senha">
          <input 
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="email"
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
            onClick={(e) => atenticacaoLogin(e, email, senha)}
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  )
}

export default Login;