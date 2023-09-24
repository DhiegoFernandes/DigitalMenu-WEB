import "./modal.css";

export const Modal = ({ onSubmit, onCancel, onClose, children }) => {
    return (
        <div className="modal-container"
            /*  verifica se o elemento clicado é o container externo (parte escura)  */
            onClick={(e) => {
                if (e.target.className === "modal-container") {

                    onClose("O pop foi fechado")
                }
            }}
        >
            <div className="modal">
                <div className="modal-header">
                    <p className="close" onClick={() => onClose("O pop up foi fechado")}>&times;</p>
                </div>
                <div className="modal-content">{children}</div>
                <div className="modal-footer">
                    <button className="btn btn-submit" onClick={() =>
                        onSubmit("O botão pesquisar foi clicado")}>Confirmar</button>
                    <button className="btn btn-cancel" onClick={() =>
                        onCancel("O botão cancelar foi clicado")}>Cancelar</button>

                </div>
            </div>
        </div>
    );
};