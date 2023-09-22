import { useState } from 'react';
import { createPortal } from "react-dom";

import { Modal } from '../modelPopUp/modal';
import './relatorio.css';

function Relatorio() {
    /* Abre o popup */
    const [modalOpen, setModalOpen] = useState(false);
    /* Recebe mensagem do model*/
    const [message, setMessage] = useState("");
    /* Fecha o popup caso qualquer botão for clicado e seta mensagem*/
    const handleButtonClick = (value) => {
        setModalOpen(false)
        setMessage(value)
    };

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
                    <div>
                        <button className='btnPopUp-Pesquisa'>Produtos mais faturado</button>
                        <button className='btnPopUp-Pesquisa'>Produtos mais vendidos</button>
                        <button className='btnPopUp-Pesquisa'>Total pedidos</button>
                        <button className='btnPopUp-Pesquisa' onClick={() => setModalOpen(true)}>Total Pedidos Mês
                        </button>
                        <button className='btnPopUp-Pesquisa'>Gorjetas</button>
                        {modalOpen && (
                            createPortal(<Modal
                                onSubmit={handleButtonClick}
                                onCancel={handleButtonClick}
                                onClose={handleButtonClick}
                            >
                                {/*   essa área pode ser alterada */}
                                <h2 className='tituloPopUp'>Esse é o titulo</h2>
                                <p>Essa área pode ser alterada</p>
                                <h2>(colocar combo box dos meses aqui)</h2>

                            </Modal>, document.body)
                        )}
                    </div>
                    <div className='relatorio-tabelaInf'>
                        {/* {data} */}
                        {message}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Relatorio;