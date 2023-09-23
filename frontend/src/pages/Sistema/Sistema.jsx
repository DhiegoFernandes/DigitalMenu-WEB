import {useContext} from "react";
import {MainContext} from "../../context/context.jsx"
import { Link } from "react-router-dom";
import './Sistema.css';

/* import de componentes */
import Mesa from '../../components/mesa/Mesa';
import Relatorio from '../../components/Relatorio/Relatorio';

/* import de imagens */
import pedido from './images/pedido.png';
import produto from './images/produto.png';
import categorias from './images/categoria.png';
import mesas from './images/table.png';
import usuarios from './images/usuarios.png';
import administrador from './images/administrador.png';
import grafico from './images/grafico.png';

function Sistema() {
    const { logout } = useContext(MainContext);

    return (
        <>
            <div className="sistema">
                <div className="logo1">
                    <Link className="digitalMenu" to="/">
                        <h1 className="logo"><span className="color-secondary">D</span>igital <span className="color-secondary">M</span>enu</h1>
                    </Link>
                </div>
                <div className='barra-lateral'>
                    <div className="botoes-barraLateral">
                        <button className="btn-direciona">Relatórios <img className="img-botoes" src={grafico} alt="" /></button>
                        <button className="btn-direciona">Pedidos <img className="img-botoes" src={pedido} alt="" /></button>
                        <button className="btn-direciona">Produtos <img className="img-botoes" src={produto} alt="" /></button>
                        <button className="btn-direciona">Categorias <img className="img-botoes" src={categorias} alt="" /></button>
                        <button className="btn-direciona">Mesas <img className="img-botoes" src={mesas} alt="" /></button>
                        <button className="btn-direciona">Usuários <img className="img-botoes" src={usuarios} alt="" /></button>
                        <button className="btn-direciona" onClick={logout}>Sair</button>
                    </div>

                </div>
                <div className='barra-superior'>
                    <div className="usuario">
                        <div>
                            <h2>Bem-vindo(a)!</h2>
                            <h2>(usuario)</h2>
                        </div>
                        <img className="img-usuario" src={administrador} alt="" />
                    </div>
                </div>
                <div className='container-principal'>
                    <Relatorio />
                    <Mesa />

                </div>
            </div>

            <h1>DigitalMenu - Copyright</h1>



        </>
    )
}

export default Sistema;