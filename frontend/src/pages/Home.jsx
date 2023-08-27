import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Digital Menu</h1>
      <nav id='navbar'>
      <h2><Link to="/login">Login</Link></h2>
      </nav>
      <Outlet />
    </>
  )
}

export default Home;
