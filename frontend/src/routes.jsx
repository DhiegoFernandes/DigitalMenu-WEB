import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LoginAtendente from './pages/LoginAtendente'
import LoginMesa from './pages/LoginMesa'
import Sistema from './pages/Sistema'
import MainProvider from './context/context'


function Rotas() {
  
  return (
    <>
      <BrowserRouter>
        <MainProvider>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/loginatendente' element={<LoginAtendente />}/>
              <Route path='/loginmesa' element={<LoginMesa />}/>
              <Route path='/sistema' element={<Sistema />}/>
            </Routes>
          </MainProvider>
      </BrowserRouter>
    </>
  )
}

export default Rotas;