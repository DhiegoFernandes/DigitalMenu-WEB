import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";

function LoginMesa() {
  
  const {autenticacaoMesa} = useContext(MainContext);

  const [idMesa, setidMesa] = useState("");

  return (
    <>
      <div>
        <h2>Login Mesa</h2>
        <p><Link to="/">voltar</Link></p>
      </div>
      <form>
        <div>
          <input 
            autoFocus
            value={idMesa}
            onChange={(e) => setidMesa(e.target.value)}
            placeholder="Número"
            type="number"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={(e) => autenticacaoMesa(e, idMesa)}
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginMesa;