import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Validation from './RegistroValidation'; 
import axios from 'axios';
import Usuario from "../Imagen/usuario.png";
import Correo from "../Imagen/CORREO.png";
import key from "../Imagen/password.png";
import Direccion from "../Imagen/direccion.png";

function Register(){
    //*Se definen las variables que usaremos para el input de HTML*/
    const [name,setName] = useState("");
    const[password, setPassword]=useState("");
    const[email, setEmail]=useState("");
    const[direccion, setDireccion]=useState("");
    
    //*Definimos la ruta de a base de datos que usaremos y las const para registrar a un usuario*/
    const add =()=>{
        axios.post("http://localhost:3001/create", {
            name: name,
            email: email,
            password: password,
            direccion: direccion
        }).then(()=>{
          alert("Registrado");
     
    
        });
      }
    return(
         //* HTML del Registro*//
         <div className="d-flex justify-content-center align-items-center vh-100">
         <div className="bg-white p-3 rounded w-40">
             <h2>Registro</h2>
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
        <img src={Usuario} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            <label><strong>Nombre</strong><input
             onChange={(event)=>{
             setName(event.target.value);
                    }}       
            type="text" className='form-control rounded-0' placeholder='Ingrese su Nombre' id="name" name="name" /></label>
        </div>

        <div className="mb-3">
        <img src={key} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            <label><strong>Password</strong><input 
            onChange={(event)=>{
             setPassword(event.target.value);
                    }}   
            type="text" className='form-control rounded-0' placeholder='Ingrese su Password' id="password" name="password" /></label>
        </div>

        <div className="mb-3">
        <img src={Direccion} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            <label><strong>Direccion</strong><input
            onChange={(event)=>{
            setDireccion(event.target.value);
                }}       
            type="text" className='form-control rounded-0 ' placeholder='Ingrese su Direccion' id="direccion" name="direccion"  /></label>
        </div>
            <Link to="/Login" className='btn btn-success' onClick={add}>Guardar datos</Link>
        </form>
        </div>
    </div>
    )
}


export default Register