//defino la función operacion() en la cual se producirán todas las operaciones
function operacion(){
    //declaro las variables y las defino con los datos declarados en el HTML
let num1 = Number(document.getElementById("dato").value);
let num2 = Number(document.getElementById("dato2").value);
let dato = document.getElementById("lang").value;

//limito división por cero
 if((num2==0)&&(dato=="division")){
    alert("La operación no es válida");
    return;
}
//limito numeros vacíos y carácteres no utiles
else if((num1 == " ")||(num2== " "||num1 == "-"||num2=="-")){ 
    alert("Error: Ingrese un numero valido");
    return;
}

//realizo las operaciones
else{
if(dato == "suma"){
    return(num1+num2)
 }
else if(dato == "resta"){
return(num1-num2)
 }

else if(dato == "multiplicacion"){
    return(num1*num2)
 }

else{
    return(num1/num2)
 }
}
}
//creo la función limpiar, en la cual indico a la computadora que devuelva un string vacío como resultado
// cuando el usuario presione el botón
function limpiar(){
    document.getElementById("resultado").innerHTML = "";
}


//devuelvo el resultado y verifico que no sea demasiado grande
function calcularNum(){
    let resultado = operacion();
    //convertí el resultado a string y controlé que no sea de mas de 21 caracteres
    //de forma en la que no se consigan resultados con e elevada a algun numero
    let largo = resultado.toString();
    if(largo.length >= 21){
        alert("El resultado es demasiado grande.")
    }
    else{
    document.getElementById("resultado").textContent = resultado;
    }
}
