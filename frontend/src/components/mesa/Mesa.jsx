import './Mesa.css';

function Mesa() {
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
                        <span>Número da mesa: <input type="text" /></span>
                        <button className='btn-sistema laranja'>Cadastrar</button>
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