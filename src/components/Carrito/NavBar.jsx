import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/ShoppingCartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Navbar";
import Hoja from "../Imagen/leaf-plant-ecology-hand-draw-style-icon-free-vector.jpg"

/*---Debemos exportar nuestra Nav---*/
export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
  

/*---Declaramos la const que usaremos para que haga la operacion de suma o resta de los productos---*/
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
    }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    /*---Hacemos todo el HTML que usaremos---*/
    <Nav bg="light" expand="lg">
      <div className="navbarnav justify-content-center">
      <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
      <img src={Hoja} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      VITAVERDE
    </a>
  </div>
</nav>
      </div>


      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Inicio">Inicio</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Productos</a></li>
      </ul>
      
      <ul className="nav-list  ">
        <Link to={"/cart"} style={navStyles}>
          <li className="nav-item badge bg-primary text-wrap width: 6rem;">
            <strong>Carrito:</strong> <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>

      <div class="btn-group">
        <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         Perfil
        </button>
        <ul className="dropdown-menu flex-column">
          <li><a class="dropdown-item" href="/Login">Login</a></li>
          <li><a class="dropdown-item" href="/Registro">Registro</a></li>
        </ul>
      </div>
    </Nav>
  );
};
