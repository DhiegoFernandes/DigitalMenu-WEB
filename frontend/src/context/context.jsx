import {createContext} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

//Criado o contexto
export const MainContext = createContext({});

//Provedor principal do contexto
function MainProvider({ children }){

    const navigate = useNavigate();
    
    async function autenticacaoAtendente(e, nome, senha){
        e.preventDefault();
        nome = nome.trim();
        senha = senha.trim();

        try{
            const { data } = await api.post("/login", {nome, senha});
            navigate("/sistema");
            console.log(data)
        }catch (e) {
            console.log("Erro na autenticação" + e);
        }
    }
    
    // async function autenticacaoMesa(e, numero){
    //     e.preventDefault();
    //     numero = numero.trim();

    //     try{
    //         const { data } = await api.post("/login", {numero});
    //         navigate("/sistema");
    //         console.log(data)
    //     }catch (e) {
    //         console.log("Erro na autenticação" + e);
    //     }
    // }
    
    return(
        <MainContext.Provider
            value={{
                autenticacaoAtendente,
                // autenticacaoMesa
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;

