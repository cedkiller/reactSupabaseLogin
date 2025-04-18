import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/User' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
