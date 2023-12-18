import React from "react"
import Portada from "../Imagen/iStock-1017706758-mod.jpg"
import Imagen1 from "../Imagen/frutas.avif"
import Imagen2 from "../Imagen/imagen2.jpg"
import Imagen3 from "../Imagen/img3.webp"
import {Link} from "react-router-dom";


export const Inicio = () => {
  //*HTML de toda la Landing Page*//
    return (
        <div className="inicio" >
      
      <section class= "border border-top-0" >
        <center>
            <p class="display-1 text-dark lead"><strong>DISFRUTA DE LOS MEJORES ALIMENTOS!</strong></p>
            <p class=" border border-top-0 lead text-dark imagenes"><strong>Disfruta de nuestro catálogo de frutas, verduras, cereales, legumbres, lácteos, huevos, carnes, pescados y más, todos procedentes de agricultura y ganadería sostenible y respetuosa con el medio ambiente. Además, te ofrecemos un servicio de entrega rápida y segura, para que recibas tu pedido en tu domicilio con todas las garantías. No lo dudes más y prueba nuestros alimentos orgánicos y saludables, ¡te sorprenderán!</strong>
        </p><br></br>
        <img src={Imagen1} alt=""/>
        </center>
      </section>

      <center>
            <p class="display-1 text-dark lead"><strong>Una comida saludable es una vida mejor!</strong></p>
            <p class=" border border-top-0 lead text-dark imagenes"><strong> Nutrientes esenciales: Una dieta equilibrada proporciona los nutrientes esenciales, como vitaminas, minerales, proteínas, grasas saludables y carbohidratos, que son fundamentales para el funcionamiento óptimo del cuerpo.</strong>
        </p><br></br>
        <p class=" border border-top-0 lead text-dark imagenes"><strong>Mantenimiento del peso: Comer alimentos saludables contribuye a mantener un peso adecuado. Una dieta rica en frutas, verduras, granos enteros y proteínas magras puede ayudar a controlar el peso y prevenir problemas relacionados con la obesidad.</strong>
        </p><br></br>
        <p class=" border border-top-0 lead text-dark imagenes"><strong>Energía y rendimiento: La ingesta adecuada de nutrientes proporciona la energía necesaria para las actividades diarias y mejora el rendimiento físico y mental.</strong>
        </p><br></br>
        <img src={Imagen1} alt=""/>
        
        </center>
        
        <center>
            <p class="display-1 text-dark lead"><strong>SOLO EN TI QUEDA EL CAMBIO!</strong></p><br></br>
        </center>

    <footer >
    <div className="container my-5 bg-light">  
      <footer className="text-center text-dark" >
        <div className="container">
          <section className="mt-5"> 
            <div className="row me-auto mb-2 mb-lg-0">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="https://www.facebook.com" className="text-Dark">Contactanos</a>
                </h6>
                <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="https://www.facebook.com" className="text-dark">facebook</a>
                </h6>
                <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="https://www.google.com" className="text-dark">Correo</a>
                </h6>
                <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-dark">github</a>
                </h6>
              </div>
              </div>
              </div>
              </div>
              </div>
              </section>
          <hr class="my-5" />
       </div>
      </footer>
      </div>
      </footer>
      </div>
    )
}
export default Inicio