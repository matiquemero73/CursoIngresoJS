/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var num1, num2;
    num1=document.getElementById("Ingrese Sueldo");
    num2=document.getElementById("Resultado");
    num1=parseInt(num1);
    num2=parseInt(num2);
    resultado=num1%num2
    alert("el resultado es " + resultado);


	
}
