import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import LoginAtendente from './pages/LoginAtendente/LoginAtendente'
import LoginMesa from './pages/LoginMesa/LoginMesa'
import Sistema from './pages/Sistema/Sistema'
import Menu from './pages/Menu/Menu'
import MainProvider, { MainContext } from './context/context'
import { useContext } from 'react'


function Privadas({ Item }){
  const { valido } = useContext(MainContext);

  return valido ? <Item /> : <Navigate to='/' />;
}

function Rotas() {
  
  return (
    <>
      <BrowserRouter>
        <MainProvider>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/loginatendente' element={<LoginAtendente />}/>
              <Route path='/loginmesa' element={<LoginMesa/>}/>
              <Route path='/sistema' element={<Privadas Item={Sistema}/>}/>
              <Route path='/menu' element={<Menu />}/>
            </Routes>
          </MainProvider>
      </BrowserRouter>
    </>
  )
}

export default Rotas;