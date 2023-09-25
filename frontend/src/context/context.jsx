import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export const MainContext = createContext({});

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

    //Login para as mesas
    async function autenticacaoMesa(e, idMesa) {
        e.preventDefault();
        idMesa = idMesa.trim();

        try {
            const { data } = await api.post("/mesa/check", { idMesa });
            navigate("/sistema");
            console.log(data);
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
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;
