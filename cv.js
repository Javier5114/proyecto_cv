
/**Efecto del contendor principal */

document.getElementById("Contenedor1").addEventListener("mouseover", function(){
    document.getElementById("Contenedor1").style.background = "rgba(0,0,0,0.2)";
})

document.getElementById("Contenedor1").addEventListener("mouseout", function(){
    document.getElementById("Contenedor1").style.background = "none";
})

document.getElementById("Contenedor2").addEventListener("mouseover", function(){
    document.getElementById("Contenedor2").style.background = "rgba(0,0,0,0.2)";
})

document.getElementById("Contenedor2").addEventListener("mouseout", function(){
    document.getElementById("Contenedor2").style.background = "none";
})

document.getElementById("Contenedor3").addEventListener("mouseover", function(){
    document.getElementById("Contenedor3").style.background = "rgba(0,0,0,0.2)";
})

document.getElementById("Contenedor3").addEventListener("mouseout", function(){
    document.getElementById("Contenedor3").style.background = "none";
})

/**Validación del formulario */

const Nombre = document.getElementById("Nombre");
const Apellido = document.getElementById("Apellido");
const Email = document.getElementById("Email");
const Mensaje = document.getElementById("Mensaje");
const Parrafo = document.getElementById("Alertas");
const Form = document.getElementById("Formulario");

Form.addEventListener("submit", e=>{
    e.preventDefault();
    let Alertas = ""
    let Aceptado = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /**Expresión regular para validación de email */
    Parrafo.innerHTML = ""


    if(Nombre.value === ""){
        Alertas += "Debe ingresar su nombre <br>";
        Aceptado = true;
    }
    
    if(Apellido.value === ""){
        Alertas += "Debe ingresar su apellido <br>";
        Aceptado = true;
    }

    if(!regexEmail.test(Email.value)){
        Alertas += "La dirección ingresada no es válida <br>";
        Aceptado = true;
    }

    if(Mensaje.value.length <10){
        Alertas += "El mensaje es muy corto <br>";
        Aceptado = true;
    }

    if(Aceptado){
        Parrafo.innerHTML = Alertas
    }

    else{
        Parrafo.innerHTML = "Su mensaje ha sido enviado"
    }

})


