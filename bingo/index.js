/*

BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse.
Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno 
el usuario deberá confirmar mediante confirm() visualizandose otro número, si coincide con alguno de los existentes 
en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados,
indicando al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno 
si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.
Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución
 seguirá, el juego solo acabará cuando todos los números estén a "X".
Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón.
 Por último, deberá preguntar si desea volver a jugar.
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir,
 que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido
  podremos empezar a extenderlo tanto como queramos.
Si funciona con 5 números deberá funcionar con 15, no? 😁

Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando
 recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no 
 haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos.
Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado
Separarlo todo en funciones, englobado en una función global llamada bingo(), tal que:
function()=> Generar Numero Random Bombo
function()=> Nuevo turno (Match carton[i] === randomNum)
function() => Preguntar Nuevo Turno
*/


//Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse.
// Función que pide el nombre al usuario y lo guarda

  function player(){
    var myCard=[9,11,7,8,4]
    var yourName = prompt('Bienvenido/a a Bingo Game\n Ingrese su nombre por favor')
    console.log('ESTE ES TU CARTON ' + yourName )
    console.log(myCard)
  }
 // player();

//Funcion para generar un numero random
//Numeros del 1 al 10function sumDigits(number) {
}


function randomNumbers(){
  var numbers=Math.floor(Math.random()*10+1)
  return numbers
}
//console.log(randomNumbers())

//Funcion que busca coicidencia entre el num random y algun número delcarton

function findTheNumber(myCard,numbers){
  for(var x=0;x<myCard.length;x++){
    if(numbers===myCard[x]){
      myCard[x]='X'
    }
  }return myCard[x]
  
}

// Funcion para generar el bombo
//Los numeros generados van desde el 1 al 99
function bombo(){
  var allNumbers=Math.floor(Math.random()*99+1)
  return allNumbers;
}

//console.log(bombo());

function itsMyCard(){
  var myCard=[];
 // while(myCard.length==15){
  var myNumbers=Math.floor(Math.random()*10+1)
  
  myCard.push(myNumbers)
 //}
return myCard
  
}

//console.log(itsMyCard());
function myCardOk(){
var myCard=[2,12,15,8,7]
var contador=0

while (contador < myCard.length){
  var randomNum=Math.floor(Math.random()*15+1)
  console.log("Soy random " +randomNum)
  var trobat=myCard.includes(randomNum);
  if(trobat){
      myCard.splice(trobat,1)
      contador++
    }
    console.log('['+myCard+']')
  }
   // myCardOk(); 

}

//console.log("BINGOOOO!!!!");

//myCardOk();

/*INICIO DE BINGO*/

var myCard=[2,12,15,8,7]
var contador=0

while (contador < myCard.length){
  var randomNum=Math.floor(Math.random()*15+1)
  console.log("Soy random " +randomNum)

  for(var x=0;x<myCard.length;x++){

    if(randomNum===myCard[x]){
      myCard[x]='X'
      contador++
    }
  }
      console.log('['+myCard+']')

}

console.log("BINGOOOO!!!!");