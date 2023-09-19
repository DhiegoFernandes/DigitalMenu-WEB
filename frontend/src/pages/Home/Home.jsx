import { Link } from "react-router-dom";
import './Home.css';

import fundo from "./images/fundo.png";
/* 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; */



function Home() {

  /*  const element = <FontAwesomeIcon icon={faCoffee} />; */

  return (
    <>
      <header>
        <div id="navbar" className="navbar">
          <Link className="digitalMenu" to="/">
            <h1 className="logo"><span className="color-secondary">D</span>igital <span className="color-secondary">M</span>enu</h1>
          </Link>
          <nav>
            <ul>
              <li><Link className="direciona" to="/loginatendente">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="tela-login" className="tela-login" >
          <div className="row flex-items">
            <div className="column-1">
              <img className="fundo" src={fundo} />
            </div>
            <div className="column-2">
              <h1>Bem Vindo!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus numquam quasi maiores voluptatem eius
                modi sint tempore dolorem ipsam amet consequatur similique pariatur quod, a ullam dolore aperiam ratione
                nulla?</p>
              <button className="btn-primary"><Link className="direciona" to="/loginmesa">Iniciar Pedido</Link></button>


            </div>
          </div>
        </section>


      </main>

      <footer className="borda">
        <div className="social-footer">
          <a href=""><i className="fa-2x"></i></a>
          <a href=""><i className="fab fa-instagram fa-2x"></i></a>
          <a href=""><i className="fab fa-twitter fa-2x"></i></a>
        </div>
        <p> (footer bugado em resolucoes baixas)</p>
      </footer>


    </>
  )
}

export default Home;
