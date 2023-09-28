import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const MainContext = createContext({});

function avisoSucesso(mensagem){
    toast.success(mensagem,{
        theme: "light",
        position: toast.POSITION.BOTTOM_CENTER
    })
}
function MainProvider({ children }) {
    const navigate = useNavigate();

    const [valido, setValido] = useState(false);

    //Login para o cliente
    async function autenticacaoAtendente(e, nome, senha) {
        e.preventDefault();
        nome = nome.trim();
        senha = senha.trim();

        try {
            const { data } = await api.post("/login", { nome, senha });
            localStorage.setItem("chave",data.token);
            localStorage.setItem("usuario", nome);
            api.defaults.headers.Authorization = `Bearer ${data.token}`;
            setValido(true);
            // Redireciona explicitamente para a página do sistema após o login
            navigate("/sistema", { replace: true }); // Use 'replace: true' para substituir a entrada do histórico
            // Agora, atualize a página atual no localStorage
            localStorage.setItem("currentPage", "/sistema");
        } catch (e) {
            console.log("Erro na autenticação" + e);
        }
    }

    async function cadastrarMesa(e, idMesa) {
        e.preventDefault();
        // Verifica se numeroMesa é uma string e pode ser convertida em um número
        if (typeof idMesa === "string") {
            idMesa = parseInt(idMesa, 10);
    
            // Verifica se a conversão foi bem-sucedida
            if (isNaN(idMesa)) {
                console.error("Número inválido");
                toast.error("Número inválido");
                return; // Retorna para evitar a chamada da API com um número inválido
            }
        } else {
            console.error("Número inválido");
            toast.error("Número inválido");
            return; // Retorna para evitar a chamada da API com um número inválido
        }
    
        try {
            const { data } = await api.post("/mesa", { idMesa });
            // Realiza o redirecionamento após o sucesso da chamada da API
            console.log("Mesa criada com sucesso id da mesa:"+ idMesa)
            avisoSucesso("Mesa cadastrada com sucesso!");
            navigate("/sistema");
        } catch (e) {
            console.error("Erro ao cadastrar mesa:", e);
            toast.error("Erro ao cadastrar mesa");
        }
    }

    async function deletarMesa(e, idMesa) {
        e.preventDefault();
        
        // Verifica se numeroMesa é uma string e pode ser convertida em um número
        if (typeof idMesa === "string") {
            idMesa = parseInt(idMesa, 10);
    
            // Verifica se a conversão foi bem-sucedida
            if (isNaN(idMesa)) {
                console.error("Número inválido");
                toast.error("Erro ao desativar a mesa");
                return; // Retorna para evitar a chamada da API com um número inválido
            }
        } else {
            console.error("Número inválido");
            toast.error("Erro ao desativar a mesa");
            return; // Retorna para evitar a chamada da API com um número inválido
        }
    
        try {
            const { data } = await api.delete(`/mesa/${idMesa}`);
            console.log("Mesa deletada: " + idMesa);
            avisoSucesso("Mesa desativada com sucesso!");
            navigate("/sistema");
        } catch (e) {
            console.error("Erro ao deletar mesa:", e);
            toast.error("Erro ao desativar a mesa");
        }
    }

    async function ativarMesa(e, idMesa) {
        e.preventDefault();
        
        // Verifica se numeroMesa é uma string e pode ser convertida em um número
        if (typeof idMesa === "string") {
            idMesa = parseInt(idMesa, 10);
    
            // Verifica se a conversão foi bem-sucedida
            if (isNaN(idMesa)) {
                toast.error("Erro ao ativar a mesa");
                return; // Retorna para evitar a chamada da API com um número inválido
            }
        } else {
            toast.error("Erro ao ativar a mesa");
            return; // Retorna para evitar a chamada da API com um número inválido
        }
    
        try {
            const { data } = await api.put(`/mesa/${idMesa}`);
            console.log("Mesa ativada: " + idMesa);
            avisoSucesso("Mesa ativada com sucesso!");
            navigate("/sistema");
        } catch (e) {
            console.error("Erro ao ativar mesa:", e);
            toast.error("Erro ao ativar a mesa");
        }
    }

    //Login para as mesas
    async function autenticacaoMesa(e, idMesa) {
        e.preventDefault();
        idMesa = idMesa.trim();

        try {
            const { data } = await api.post("/mesa/check", { idMesa });
            navigate("/sistema");
        } catch (e) {
            console.log("Erro na autenticação" + e);
        }
    }

    //Validação do token
    function validaToken() {
        const token = (localStorage.getItem("chave"));
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            api
                .post("/verifica-token")// {headers: {"Authorization": `Bearer ${token}`, "Accept": "application/json", "Content-Type": "application/json" }})
                .then((response) => {
                    setValido(true);
                    navigate("/sistema");
                })
                .catch((error) => {
                    api.defaults.headers.Authorization = undefined;
                    localStorage.removeItem("chave");
                    setValido(false);
                });
        }
    }

    //Função para sair do sistema
    function logout() {
        setValido(false);
        localStorage.removeItem("chave");
        // Remove o estado de autenticação
        localStorage.removeItem("autenticado"); 
        api.defaults.headers.Authorization = undefined;
        navigate("/");
    }

    useEffect(() => {
        validaToken();
    }, []);

    return (
        <MainContext.Provider
            value={{
                autenticacaoAtendente,
                autenticacaoMesa,
                validaToken,
                logout,
                valido,
                cadastrarMesa,
                deletarMesa,
                ativarMesa,
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;
