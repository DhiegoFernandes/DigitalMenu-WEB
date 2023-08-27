import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Sistema from './pages/Sistema'

function Rotas() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/sitema' element={<Sistema />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas;