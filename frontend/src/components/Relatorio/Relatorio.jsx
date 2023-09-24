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
                <div className='relatorio-topo'>
                    <div className='text-relatorio'>
                        <h1>Relatório</h1>
                        <h2 className='text-topRelatorio'>Top produtos mais vendidos</h2>
                    </div>
                    <div className="relatorio-tabelaSup">
                        {/* {data} */}
                        DADOS
                    </div>
                </div>
                <div className='relatorio-below'>
                    <h2 className='txt-pesquisar'>Pesquisar</h2>
                    <div>
                        <button className='btn-sistema laranja'>Produtos mais faturado</button>
                        <button className='btn-sistema laranja'>Produtos mais vendidos</button>
                        <button className='btn-sistema laranja'>Total pedidos</button>
                        <button className='btn-sistema laranja'>Gorjetas</button>
                        <button className='btn-sistema laranja' onClick={() => setModalOpen(true)}>Total Pedidos Mês
                        </button>
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