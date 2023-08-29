import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/context";

function LoginMesa() {
  
  const {autenticacaoMesa} = useContext(MainContext);

  const [numero, setNumero] = useState("");

  return (
    <>
      <div>
        <h2>Login Mesa</h2>
        <p><Link to="/">voltar</Link></p>
      </div>
      <form className="formulario">
        <div className="numero">
          <input 
            autoFocus
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder="Número"
            type="number"
            className="numero"
          />
        </div>
        <div className="botao-enviar">
          <button
            type="submit"
            onClick={(e) => autenticacaoMesa(e, numero)}
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginMesa;