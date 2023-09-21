import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
        <div id="navbar" className="navbar">
          <Link className="digitalMenu" to="/">
            <h1 className="logo"><span className="color-secondary">D</span>igital <span className="color-secondary">M</span>enu</h1>
          </Link>
        </div>
      </header>
    )
}

export default Header;