

 //Variable global donde se irán guardando los distintos numeros con los que vayamos operando
  var myArray=[];
 //Funcion que permite entrar valores numericos
 function enterNumber(myArray) {
    var number = parseInt(prompt('ENTER A NUMBER'));
    //control de inputs, en caso de no ser validos volvemos al inicio
    if(isNaN(number)||number===''){
        alert('YOU HAVE TO ENTER ONLY NUMBERS, TRY AGAIN');
        enterNumber(myArray);
    }else{
       
        myArray.push(number);
        var anotherNumber=prompt('DO YOU WANT TO ENTER ANOTHER NUMBER?\n YES\n NOT');

        switch(anotherNumber.toUpperCase()){
            case 'YES':
                enterNumber(myArray);
                break;
                case 'NOT':
                    if(myArray.length===1){
                      console.log('El resultado de la raiz cuadrada de : ' + myArray + ' es ' + raizCuadrada(myArray));
                      anotherOperation(myArray);
                    }else{
                        console.log(' El resultado de la suma de ' + '['+myArray+']' + 'es : '+ sum(myArray)+'\n El resultado de la resta de ' + '['+ myArray +']' + ' es : ' + subs(myArray) +'\n El resultado de la multiplicacion de ' + '['+ myArray +']' + ' es : ' + mult(myArray) + '\n El resultado de la division de ' +'['+ myArray +']' + 'es : ' + div(myArray));
                        anotherOperation(myArray);
                    }
                    
                    break;
                    default:
                        alert('YOU HAVE TO SELECT AN OPTIONS')
                        enterNumber(myArray);
        }
    }

}

function sum(arr){
    var resultSum=0;
    for(var x=0;x<arr.length;x++){
        resultSum+=arr[x];
    }
    return checkIntegers(resultSum);
}



function subs(arr){
    var resultSubs=arr[0];
    for(var x=1;x<arr.length;x++){
        resultSubs-=arr[x];
    }
    return checkIntegers(resultSubs);
}


function mult(arr){
    var resultMult=1;
    for(var x=0;x<arr.length;x++){
        resultMult*=arr[x];
    }
    return checkIntegers(resultMult);
}

function div(arr){
    var resultDiv=arr[0];
    for(var x=1;x<arr.length;x++){
        resultDiv/=arr[x];
    }
    return checkIntegers(resultDiv);
}

function raizCuadrada(argument){
var resultRaiz=Math.sqrt(argument);
return checkIntegers(resultRaiz);
}
//A traves de esta funcion podemos volver a operar o salir de la calculadora
function anotherOperation(myArray){
    var nextOperation = prompt('DO YOU WANT TO DO ANOTHER OPERATION?');
    switch(nextOperation.toUpperCase()){
        case 'YES':
            resetOperation(myArray);
            break;
            case 'NOT':
            alert('THANKS AND GOODBYE')
            break;
                default:
                    alert('YOU HAVE TO SELECT AN OPTIONS')
                    enterNumber(myArray);
    }
}
// Esta funcion se utiliza en caso de querer realizar un segundo conjunto de operaciones, reseteando el array que contiene los valores a calcular
function resetOperation(myArray){
myArray=[];
return enterNumber(myArray);
}

// Funcion que controla si trabajamos con decimales o no y en caso de serlo, retorna el resultado con un maximo de tres decimales.
function checkIntegers(argument){
    if(argument - Math.floor(argument) === 0) {
        argument=argument;
    } else {
       argument=argument.toFixed(3) ;
    }
    
    return argument;
    
  }

//Funcion principal que contiene el resto de funciones
function calculator(myArray){
    enterNumber(myArray);

    
}




calculator(myArray);
// Pendiente agregar una funcion para resetear los valor y asi poder generar nuevos calculos