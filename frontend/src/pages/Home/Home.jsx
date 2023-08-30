import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <>
      <h1 className="titulo">Digital Menu</h1>
      <nav id='navbar'>
      <h2><Link to="/loginatendente">Login Atendente</Link></h2>
      <h2><Link to="/loginmesa">Login Mesa</Link></h2>
      </nav>
    </>
  )
}

export default Home;
