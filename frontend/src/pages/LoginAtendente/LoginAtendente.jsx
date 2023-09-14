import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";

import './LoginAtendente.css';

import logoDM from "./images/DigitalMenu1.png";

function LoginAtendente() {

  const { autenticacaoAtendente } = useContext(MainContext);

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");


  const [tipoSenha, setTipoSenha] = useState("password");

  return (
    <>

      <header>
        <div id="navbar" className="navbar">
          <h1 className="logo"><span className="color-secondary">D</span>igital <span className="color-secondary">M</span>enu</h1>
        </div>
      </header>

      <main>
        <div>
          <div className="fotodm">
            <img src={logoDM} alt="Logo Digital Menu" />
          </div>

          <div className="dados">
            <h2 className="texto1">Entre como administrador</h2>

            {/*  <label for="Login">Login</label>
            <input type="text" id="login" placeholder="Login">

              <label for="Senha">Senha</label>
              <input type="password" id="senha" placeholder="Senha">

                <input type="submit" value="Entrar"> */}
            <form>
              <div>
                <input
                  autoFocus
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                  type="text"
                />
                <div>
                  <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    type={tipoSenha}
                  />
                  {tipoSenha === "password" ? (
                    <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setTipoSenha("text")
                      }} >mostrar senha</button>
                  ) : (
                    <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setTipoSenha("password")
                      }}>esconder senha</button>)}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(e) => autenticacaoAtendente(e, nome, senha)}>Entrar</button>
                <p><Link to="/">voltar</Link></p>
              </div>
            </form>


          </div>
        </div>

      </main>

      <footer className="borda">
        <div>
          <a href=""><i className="fab fa-facebook fa-2x"></i></a>
          <a href=""><i className="fab fa-instagram fa-2x"></i></a>
          <a href=""><i className="fab fa-twitter fa-2x"></i></a>
        </div>
        <p>Copyright</p>
      </footer>





    </>
  )
}

export default LoginAtendente;