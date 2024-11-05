import './App.css'
import { BrowserRouter, Routes,Route, HashRouter } from "react-router-dom";
import React from "react";

import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login'
function App() {

  return (
   <HashRouter>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>

    
   </Routes>
   
   </HashRouter> 
  )
}

export default App
