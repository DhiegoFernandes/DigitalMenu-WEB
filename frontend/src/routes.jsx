import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LoginAtendente from './pages/LoginAtendente'
import LoginMesa from './pages/LoginMesa'
import Sistema from './pages/Sistema'

function Rotas() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/loginatendente' element={<LoginAtendente />}/>
          <Route path='/loginmesa' element={<LoginMesa />}/>
          <Route path='/sitema' element={<Sistema />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas;