import { useState, useContext } from 'react';
import './Mesa.css';
import { MainContext } from '../../context/context';


function Mesa() {

    const {cadastrarMesa} = useContext(MainContext);

    const [idMesa, setIdMesa] = useState("");

    return (
        <>

            <div className="mesa-main">
                <h1>Mesas</h1>
                <span>Pesquisar</span>
                <div>
                    <button className='btn-sistema laranja'>Status</button>
                    <button className='btn-sistema laranja'>Número</button>
                    <button className='btn-sistema laranja'>Todos</button>
                </div>
                <div className="mesa-tabela">
                    {/* {data} */}
                </div>
                <div className="mesa-cadastrOpcoes">
                    <div className="mesa-cadastrOpcoes-esquerda">
                        <h2>Cadastrar Mesa</h2>
                        <span>Número da mesa: 
                            <input 
                            autoFocus
                            value={idMesa} 
                            onChange={(e) => setIdMesa(e.target.value)}
                            placeholder='' 
                            type="text" 
                        />
                        </span>
                        <button className='btn-sistema laranja'
                        type='submit'
                        onClick={(e)=> cadastrarMesa(e, idMesa)}
                        >
                            Cadastrar
                        </button>
                    </div>
                    <div className="mesa-cadastrOpcoes-direita">
                        <h2>Opções</h2>
                        <button className='btn-sistema laranja'>Deletar</button>
                        <button className='btn-sistema laranja'>Atualizar</button>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Mesa;