import React from "react";
import { ItemList } from "./components/Carrito/ItemList";


import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Registro from "./components/Registro/Index";
import Tabla from "./components/Admin/Tabla";
import Pago from "./components/Carrito/Pago"
import { Navbar } from "./components/Carrito/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/Carrito/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";


export const App = () => {
  /*---Definimos las rutas que queremos que se muestren en nuestra pagina---*/
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Registro" element={<Registro/>}/>
          <Route path="/Tabla" element={<Tabla/>}/>
          <Route path="/Pago" element={<Pago/>}/>
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
