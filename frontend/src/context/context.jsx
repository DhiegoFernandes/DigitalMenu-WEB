import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

//Criado o contexto
export const MainContext = createContext({});

//Provedor principal do contexto
function MainProvider({ children }){

    const navigate = useNavigate();
    
    
    return(
        <MainContext.Provider
            values={{

            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;

