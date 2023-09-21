import './LoginMesa.css';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";

import um from "./images/1.png";
import dois from "./images/2.png";
import tres from "./images/3.png";
import quatro from "./images/4.png";
import cinco from "./images/5.png";
import seis from "./images/6.png";
import sete from "./images/7.png";
import oito from "./images/8.png";

function LoginMesa() {

  const { autenticacaoMesa } = useContext(MainContext);

  const [idMesa, setidMesa] = useState("");

  return (
    <>


      <header>
      <div id="navbar" className="navbar">
          <Link className="digitalMenu" to="/">
            <h1 className="logo"><span className="color-secondary">D</span>igital <span className="color-secondary">M</span>enu</h1>
          </Link>
        </div>
      </header>

      <div className="mensagem">
        <h2 className='centralizaGlobal'>RESTAURANTE</h2>
        <h2 className='centralizaGlobal'>Escolha sua mesa</h2>
      </div>


      <main className="principal">
        <div className="Formato-mesa">
          <div className="mesas">
            <p>Mesa1</p>
            <button className="btn-numero" type="submit" onClick={(e) => autenticacaoMesa(e, 1)}><img className="tamanho-img" src={um} /></button>
          </div>
          <div className="mesas">
            <p>Mesa2</p>
            <button className="btn-numero" type="submit" onClick={(e) => autenticacaoMesa(e, 2)}><img className="tamanho-img" src={dois} /></button>
          </div>
          <div className="mesas">
            <p>Mesa3</p>
            <img className="tamanho-img"
              src={tres} />
          </div>
          <div className="mesas">
            <p>Mesa4</p>
            <img className="tamanho-img"
              src={quatro} />
          </div>
        </div>
        <div className="Formato-mesa">
          <div className="mesas" >
            <p>Mesa5</p>
            <img className="tamanho-img"
              src={cinco} />
          </div>
          <div className="mesas">
            <p>Mesa6</p>
            <img className="tamanho-img"
              src={seis} />
          </div>
          <div className="mesas">
            <p>Mesa7</p>
            <img className="tamanho-img"
              src={sete} />
          </div>
          <div className="mesas">
            <p>Mesa8</p>
            <img className="tamanho-img"
              src={oito} />
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

      <form className='formTemporario'>
        <input autoFocus value={idMesa}
          onChange={(e) => setidMesa(e.target.value)} placeholder="numero da mesa (temporario)" type="number" />
        <div>
          <button className="btn-entrarMesa"  type="submit" onClick={(e) => autenticacaoMesa(e, idMesa)}>Entrar</button>
        </div>
        
      </form>

    </>
  )
}

export default LoginMesa;