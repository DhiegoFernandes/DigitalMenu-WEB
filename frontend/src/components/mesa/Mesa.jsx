import './Mesa.css';

function Mesa() {

return(
    <>

    <div className="mesa-main">
        <h1>Mesas</h1>
        <span>Pesquisar</span>
        <div className="mesa-botoes-pesquisa">
            <button>Status</button>
            <button>Número</button>
            <button>Todos</button>
        </div>
        <div className="mesa-tabela">
            {/* {data} */}
            DADOS
        </div>
        <div className="mesa-cadastrOpcoes">
            <div className="mesa-cadastrOpcoes-esquerda">
                <h2>Cadastrar Mesa</h2>
                <span>Número da mesa: <input type="text" /></span>
                <button>Cadastrar</button>
            </div>
            <div className="mesa-cadastrOpcoes-direita">
                <h2>Opções</h2>
                <button>Alterar</button>
                <button>Deletar</button>
            </div>
        </div>

    </div>
    </>
)

}
export default Mesa;