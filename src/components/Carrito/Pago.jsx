import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import Imagen from "../Imagen/image.webp";


function Pago(){
/*---Const que nos serviran en html del contenedor formulario---*/
    const [tarjeta, setTarjeta] = useState(false);
    const [fecha, setFecha] = useState(false);
    const [ccv, setCcv] = useState(false)
/*---Funciones de RadioButton---*/
    const handleRadioChange = (event) => {
    const radioValue = event.target.value;
        if (radioValue === 'disableAll') {
        setTarjeta(true);
        setFecha(true);
        setCcv(true);
    } else if (radioValue === 'enableAll') {
        setTarjeta(false);
        setFecha(false);
        setCcv(false);
    }
 };

    const [showImage, setShowImage] = useState(false);
   
    const handleButtonClick = () => {
      setShowImage(!showImage);
    };
    
    const add =()=>{
        axios.post("http://localhost:3001/create", {
        }).then(()=>{
          alert("Pagado Exitosamente");
        });
      }
    return(
         //*HTML del Metodo de Pago*//
         <div className="d-flex justify-content-center align-items-center vh-100">
         <div className="bg-white p-3 rounded w-40">
             <h2>Pago</h2>
             <form action="">

        <div className="mb-3">
            <label><strong>Num Tarjeta</strong><input
                 onChange={(event)=>{
                    setTarjeta(event.target.value);
                     }}       
             type="text" className='form-control rounded-0' disabled={tarjeta}  placeholder='XXXX XXXX XXXX XXXX' id="tarjeta" name="tarjeta" required /></label>
        </div>
        <div className="mb-3">
            <label><strong>Fecha</strong><input
             onChange={(event)=>{
             setFecha(event.target.value);
                    }}       
            type="text" className='form-control rounded-0' disabled={fecha} placeholder='Fecha de vencimiento' id="fecha" name="fecha" required/></label>
        </div>

        <div className="mb-3">
            <label><strong>CCV</strong><input 
            onChange={(event)=>{
             setCcv(event.target.value);
                    }}   
            type="text" className='form-control rounded-0' disabled={ccv} placeholder='CCV' id="ccv" name="ccv" required/></label>
        </div>
            <Link to="/Inicio" className='btn btn-success' onClick={add}>Guardar datos</Link><br></br>
            <h2>Metodo de Pago</h2>
            <label>
            <input type="radio"  name="radioGroup" value="disableAll"  onChange={handleRadioChange}/>
            OXXO
            </label>
            <label>
            <input type="radio"  name="radioGroup" value="enableAll"  onChange={handleRadioChange}   />
            CREDITO
            </label>
            <div>
           
            {!showImage && <img src={Imagen} alt="Imagen" />}
            </div>
        </form>
        </div>
    </div>
    )
}


export default Pago