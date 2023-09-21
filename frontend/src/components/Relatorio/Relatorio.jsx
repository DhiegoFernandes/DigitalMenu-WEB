import './relatorio.css';

function Relatorio() {
    return (
        <>
            <div className='relatorio-main'>
                <div>
                    <h1>Relatório</h1>
                    <h2 className='text-topRelatorio'>Top produtos mais vendidos</h2>
                    <div className="relatorio-tabelaSup">
                        {/* {data} */}
                        DADOS
                    </div>
                </div>
                <div className='relatorio-below'>
                    <h2>Pesquisar</h2>
                    <div className='relatorios-botoes-pesquisa'>
                        <button>Produtos mais faturado</button>
                        <button>Produtos mais vendidos</button>
                        <button>Total pedidos</button>
                        <button>Total pedidos mês</button>
                        <button>Gorjetas</button>
                    </div>
                    <div className='relatorio-tabelaInf'>
                        {/* {data} */}
                        DADOS
                    </div>
                </div>
            </div>

        </>
    )
}
export default Relatorio;