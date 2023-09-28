import './Usuarios.css';

function Usuarios() {
    // const { logout } = useContext(MainContext);

    return (
        <>

            <main className='usuario-completo'>
                <div>
                    <h1 className='pag-titulo-sistema fade2'>Usuários</h1>
                    <h2 className='txt-pesquisar-sistema '>Pesquisar</h2>
                </div>
                <div>
                    <button className='btn-sistema laranja'>ID</button>
                    <button className='btn-sistema laranja'>Nome</button>
                    <button className='btn-sistema laranja'>Status</button>
                    <button className='btn-sistema laranja'>Todos</button>
                </div>
                <div className='usuarios-tabela'>
                    TABELA AQUI

                </div>
                <div className='usuarios-opcoes'>
                    <div className='usuarios-opcoes-esquerda'>
                        <h2>Controle de usuários</h2>
                        <span>Usuário:<input type="text" /></span>
                        <span className='usuario-span-margem'>Senha:<input type="text" /></span>
                        <button className='btn-sistema laranja btn-cadastrar-usuario'>Cadastrar</button>
                    </div>
                    <div className='usuario-tipoacessoLado'>
                        <div className='lado-user'>
                            <span className='usuario-span-negrito'>Tipo acesso: </span>
                            <div className='tipo-acesso-radio'>
                                <input type="radio" id="usuario" name='op' value="Administrador" />
                                <label htmlFor="Administrador">Administrador</label><br />
                                <input type="radio" id="atendente" name='op' value="atendente" />
                                <label htmlFor="atendente">Atendente</label><br />
                            </div>
                        </div>


                    </div>



                    <div className='usuarios-opcoes-direita'>
                        <h2>Opções</h2>
                        <button className='btn-sistema laranja'>Atualizar</button>
                        <button className='btn-sistema laranja'>Desativar</button>

                    </div>
                </div>
            </main>

        </>
    )
}

export default Usuarios;