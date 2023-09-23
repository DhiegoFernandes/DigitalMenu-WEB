import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api";

export const MainContext = createContext({});

function MainProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [valido, setValido] = useState(false);

    async function autenticacaoAtendente(e, nome, senha) {
        e.preventDefault();
        nome = nome.trim();
        senha = senha.trim();

        try {
            const { data } = await api.post("/login", { nome, senha });
            localStorage.setItem("chave", JSON.stringify(data.token));

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

    function validaToken() {
        const token = localStorage.getItem("chave");
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            api
                .post("/verifica-token")
                .then((response) => {
                    setValido(true);
                })
                .catch((error) => {
                    api.defaults.headers.Authorization = undefined;
                    localStorage.removeItem("chave");
                    setValido(false);
                    console.log(error);
                });
        }
    }

    function logout() {
        setValido(false);
        localStorage.removeItem("chave");
        localStorage.removeItem("autenticado"); // Remove o estado de autenticação
        api.defaults.headers.Authorization = undefined;
        navigate("/");
    }

    useEffect(() => {
        validaToken();

        // Verifica se o usuário está autenticado no localStorage
        const autenticado = localStorage.getItem("autenticado");
        if (autenticado === "true") {
            // Redireciona para a página armazenada no localStorage após o login
            const currentPage = localStorage.getItem("currentPage");
            console.log(currentPage);
            if (currentPage) {
                navigate(currentPage);
            } else {
                navigate("/sistema");
            }
        }
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
