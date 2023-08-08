function operacion(){
let num1 = Number(document.getElementById("dato").value);
let num2 = Number(document.getElementById("dato2").value);
let dato = document.getElementById("lang").value;

if(dato = "suma"){
    return(num1+num2)
 }

else if(dato = "resta"){
return(num1-num2)
 }

else if(dato = "multiplicacion"){
    return(num1*num2)
 }

else{
    return(num1/num2)
 }

}
function calcularNum(){
    let resultado = operacion()
    
    document.getElementById("resultado").textContent = resultado;
}