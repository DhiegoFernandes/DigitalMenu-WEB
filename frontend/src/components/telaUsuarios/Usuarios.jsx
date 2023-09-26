import './Usuarios.css';

function Usuarios() {
    // const { logout } = useContext(MainContext);

    return (
        <>

            <main className='usuario-completo'>
                <div className='titulo'>
                    <h1>Usuários</h1>
                    <span>Pesquisar</span>
                </div>
                <div className='pesquisar-botoes'>
                    <button>ID</button>
                    <button>Nome</button>
                    <button>Status</button>
                    <button>Todos</button>
                </div>
                <div className='usuarios-tabela'>
                    TABELA AQUI
                    
                </div>
                <div className='usuarios-opcoes'>
                    <div className='usuarios-opcoes-esquerda'>
                        <h3>Controle de usuários</h3>
                        <span>Usuário:<input type="text" /></span>
                        <span className='usuario-span-margem'>Senha:<input type="text" /></span>
                        <span className='usuario-span-negrito'>Tipo acesso: </span>
                        <div className='tipo-acesso-radio'>
                            <input type="radio" id="usuario" name='op' value="Administrador" />
                            <label htmlFor="Administrador">Administrador</label><br />
                            <input type="radio" id="atendente" name='op' value="atendente" />
                            <label htmlFor="atendente">Atendente</label><br />
                        </div>
                        <button>Cadastrar</button>
                    </div>
                    <div className='usuarios-opcoes-direita'>
                        <h3>Opções</h3>
                        <button>Atualizar</button>
                        <button>Desativar</button>

                    </div>
                </div>
            </main>

        </>
    )
}

export default Usuarios;