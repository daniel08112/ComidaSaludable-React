function Validation(values){
    let error = {}
    const name_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-ZA-z]{20,}$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const direccion_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = "Ingrese un nombre"
    }
    else {
        error.name =""
    }

    if(values.email === ""){
        error.email = "Ingrese un correo"
    }
    else if (!email_pattern.test (values.email)){
        error.email = "Email incorrecto"
    }else {
        error.email =""
    }

    if (values.password === ""){
        error.password = "Ingrese una contraseña"
    }
     else {
        error.password = ""
    }
    return error;

    if (values.direccion === ""){
        error.direccion = "Ingrese una direccion"
    }
     else {
        error.direccion = ""
    }
    return error;
}

export default Validation;