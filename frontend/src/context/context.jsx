import {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

//Criado o contexto
export const MainContext = createContext({});

//Provedor principal do contexto
function MainProvider({ children }){

    const navigate = useNavigate();

    const [valido, setValido] = useState(false)
    
    async function autenticacaoAtendente(e, nome, senha){
        e.preventDefault();
        nome = nome.trim();
        senha = senha.trim();

        try{
            const { data } = await api.post("/login", {nome, senha});
            localStorage.setItem("chave", JSON.stringify(data.token));
            api.defaults.headers.Authorization = `Bearer ${data.token}`;
            setValido(true);
            navigate("/sistema");
            console.log(data)
        }catch (e) {
            console.log("Erro na autenticação" + e);
        }
    }
    
    async function autenticacaoMesa(e, idMesa){
        e.preventDefault();
        idMesa = idMesa.trim();

        try{
            const { data } = await api.post("/mesa/check", {idMesa});
            navigate("/sistema");
            console.log(data)
        }catch (e) {
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
              console.log(response)
            })
            .catch((error) => {
              api.defaults.headers.Authorization = undefined;
              localStorage.removeItem("chave");
              setValido(false);
              console.log(error)
            });
        }}

    // function logout(){
    //     setValido(false);
    //     localStorage.removeItem('chave')
    //     api.defaults.headers.Authorization = undefined;
    //     navigate("/")
    // }

    // useEffect(() => {
    //     validaToken();
    //   }, []);

    return(
        <MainContext.Provider
            value={{
                autenticacaoAtendente,
                autenticacaoMesa,
                validaToken,
                // logout,
                valido
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;

