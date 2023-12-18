import React, {useState} from 'react'
import {Link} from "react-router-dom"; 
import axios from 'axios';
import key from "../Imagen/password.png";
import Correo from "../Imagen/CORREO.png";




function Login(){
     //*Se definen las variables que usaremos para el input de HTML*/
    const[password, setPassword]=useState("");
    const[email, setEmail]=useState("");
    
     //*Definimos las constantes que usaremos en la seccion de Login para poder acceder*/
    
    const add =()=>{
        axios.post("http://localhost:3001/login", {
           
            email: email,
            password: password,
            
        }).then(()=>{
          alert("Inicio exitoso");
     
    
        });
      }
    return(
         //*HTML del Login*//
         <div className="d-flex justify-content-center align-items-center vh-100">
         <div className="bg-white p-3 rounded w-40">
             <h2>Inicio de Sesion</h2>
             <form action="">

        <div className="mb-3">
        <img src={Correo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            <label><strong>Email</strong><input
                 onChange={(event)=>{
                    setEmail(event.target.value);
                     }}       
             type="text" className='form-control rounded-0' placeholder='Ingrese su Email' id="email" name="email"  /></label>
        </div>

        <div className="mb-3">
        <img src={key} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            <label><strong>Password</strong><input 
            onChange={(event)=>{
             setPassword(event.target.value);
                    }}   
            type="text" className='form-control rounded-0' placeholder='Ingrese su Password' id="password" name="password" /></label>
        </div>
            <Link to="/Productos" className='btn btn-success' onClick={add}>Ingresar</Link><br></br>
            <i class="bi bi-archive-fill"></i>
            <Link to="/Registro" className='btn btn-auto' >Registrate</Link>
        </form>
        </div>
    </div>
    )
}


export default Login