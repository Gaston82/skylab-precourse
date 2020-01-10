/*Programa una interfaz de usuario para una aerolínea (por terminal...). Esta aerolínea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:
Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuántos vuelos efectúan escalas.
Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

*/

var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

//Se preguntará por el nombre de usuario y dará la bienvenida.

function bienvenida(){
  var welcome=prompt('Ingrese su nombre de usuario por favor')
  if((welcome==='')||(welcome===null)){
  alert('Los datos introducidos son incorrectos');
    bienvenida();
  }else{
  console.log('Bienvenido/a a skylab airlines ' + welcome)
  console.log('  Los vuelos disponibles durante el día de hoy son los siguientes :  ');
  vuelos(flights); 
  console.log('El coste promedio de los vuelos es ' + average(flights));
  console.log('Hoy realizaremos ' + scaleNumbers(flights) + ' vuelos con escala')
  scaleDestination(flights);
  lastFlights(flights);
  }

 }

//El usuario visualizará todos los vuelos disponibles de una forma amigable

function vuelos(flights){
  for(var x=0;x<flights.length;x++){
    if(flights[x].scale===true){
      console.log('El vuelo con origen: ' + flights[x].from + ', y destino:  '+ flights[x].to + ' tiene un coste de: '+ flights[x].cost + '€ y tiene escalas')
    }else{     
   console.log('El vuelo con origen: ' + flights[x].from + ', y destino:  '+ flights[x].to + ' tiene un coste de: '+ flights[x].cost + '€ y no tiene escalas')
  
    }
    }
   
  }
  
//A continuación, el usuario verá el coste medio de los vuelos.

function average(flights){
  var totalCost = 0;
  for(var x=0;x<flights.length;x++){
    totalCost += flights[x].cost; 
  }
  averageCost = totalCost/flights.length;
  return averageCost.toFixed(2)+'€';
  
}


//Cantidad de vuelos con escala 

function scaleNumbers(flights){
  var countScale = 0 ;
  for(var x=0;x<flights.length;x++){
   if(flights[x].scale===true){
     countScale += flights[x].scale
   }
    
    }
  return countScale;
 }
 
//Destino de los vuelos con escala

function scaleDestination(flights){
  for(var x=0;x<flights.length;x++){
   if(flights[x].scale===true){
   console.log('Los destinos de los vuelos con escala son : Vuelo número ' + flights[x].id + '-----> ' + flights[x].to);
   }
    }
 
 }



//Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, 
//muestra al usuario sus destinos.

function lastFlights(flights){
  
  for(var x=flights.length-5;x<flights.length;x++){
    console.log('Los destinos de los últimos 5 vuelos son: vuelo número ' + flights[x].id + ':' + flights[x].to);
  }
  
  
}


function skylabAirlines(flights){
  bienvenida();
}

skylabAirlines(flights);
