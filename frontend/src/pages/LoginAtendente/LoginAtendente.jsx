import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";

import './LoginAtendente.css';

import logoDM from "./images/DigitalMenu1.png";
import olhoFechado from "./images/eyeclosed.png";
import olhoAberto from "./images/eyeopen.png";
import Header from "../../components/Header";


function LoginAtendente() {

  const { autenticacaoAtendente } = useContext(MainContext);

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");


  const [tipoSenha, setTipoSenha] = useState("password");

  return (
    <>
      <Header />

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
              <div >
                <input
                  autoFocus
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                  type="text"
                />


                <div className="senha">
                  <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    type={tipoSenha}
                  />
                  {tipoSenha === "password" ? (
                    <button className="senha" type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setTipoSenha("text")
                      }} ><img className="olhos" src={olhoFechado} /></button>
                  ) : (
                    <button className="senha" type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setTipoSenha("password")
                      }}><img className="olhos" src={olhoAberto} /></button>)}
                </div>
              </div>
              <div className="centralizaGlobal">
                <button className="btn-entrar"
                  type="submit"
                  onClick={(e) => autenticacaoAtendente(e, nome, senha)}>Entrar</button>
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