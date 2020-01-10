PRO:
/*Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, 
el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:
Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, 
si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:
Buscar por precio (más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, 
indicando el ID, el programa responderá: "Gracias por su compra, vuelva pronto."

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




                         /*VERSION SKYLAB PRO*/ 

//FUNCION QUE DIVIDE EL PROGRAMA ENTRE USUARIO O ADMIN

function whoAreYou(flights){
  var question = prompt('Eres usuario o administrador?')
  question=question.toUpperCase();
  if((question==='')||(question===null)){
    alert('Debes ingresar una de las dos opciones')
    whoAreYou(flights);
  }
  else if(question==='USUARIO'){
    user(flights);
  }else if(question==='ADMINISTRADOR'){
    admin(flights);
  }else{
    alert('OPCIÓN NO VALIDA !!!')
    whoAreYou(flights);
  }
  } 

  //ESTA FUNCION PERMITE DECIDIR QUE OPERACION REALIZAR COMO USUARIO

  function user(flights){
    opUser=prompt('Elige una opción:\n 1_BUSCAR PRECIOS\n 2_BUSCAR ID')
    switch(opUser){
      case '1':
        flightsByPrice(flights);
        break;
      case '2':
        flightsByNum(flights);
        break;
       default:
       alert('OPCIÓN NO VÁLIDA!!!');
       user(flights);
        
    }
  }

  // ESTA FUNCION DERIVA AL USUARIO A LAS DIFERENTES OPCIONES PARA BUSCAR VUELOS POR PRECIOS
  //UTILIZO UN SWITCH PARA REPRESENTAR LAS 4 POSIBLES OPCIONES

  function flightsByPrice(flights){
    var optionPrice = prompt('1 PRECIOS MAS ALTOS \n 2 PRECIOS MAS BAJOS\n 3 PRECIO EXACTO')
    switch(optionPrice){
      case '1':
        higherPrice(flights);
        break;
      case '2':
        lowerPrice(flights);
        break;
      case '3':
        equalPrice(flights);
        break;
      default:
       alert('OPCION NO VALIDA!!!')
       flightsByPrice(flights);
    }
  }

   // PERMITE AL USUARIO BUSCAR VUELOS POR ENCIMA DEL PRECIO INGRESADO 

  function higherPrice(flights){
    var acum=0;
    var priceHight = prompt('Enter price please') ;
     if(isNaN(priceHight)||(priceHight=='')){
       alert('Debes ingresar numeros!!!')
       higherPrice(flights);
     }
    for(var x=0;x<flights.length;x++){
      if(flights[x].cost > priceHight){
        console.log(' El vuelo con origen: ' + flights[x].from + ', y destino:  '+ flights[x].to + ' tiene un coste de: '+ flights[x].cost +'€')
        acum=acum+1; 
      }
     }
     if(acum===0){
       console.log('Lo sentimos , no hemos encontrado vuelos con esos precios')
       }
       }

  // PERMITE AL USUARIO BUSCAR VUELOS POR DEBAJO DEL PRECIO INGRESADO 

       function lowerPrice(flights){

        var priceLow = prompt('Enter price please') ;
         
         if(isNaN(priceLow)||(priceLow==='')){
           alert('DEBES INGRESAR UN IMPORTE!!!')
           lowerPrice(flights);
         }
        var acum=0;
        for(var x=0;x<flights.length;x++){
          if(flights[x].cost < priceLow){
             console.log(' El vuelo con origen: ' + flights[x].from + ', y destino:  '+ flights[x].to + ' tiene un coste de: '+ flights[x].cost +'€')
             acum=acum+1;
          }
        }
         if(acum===0){
           console.log('NO HEMOS ENCONTRADO VUELOS CON ESE IMPORTE')
         }
       }

       //FUNCION QUE PERMITE AL USUARIO BUSCAR VUELOS QUE COINCIDAN CON UN DETERMINADO VALOR

       function equalPrice(flights){
  
        var samePrice = prompt('Enter price please');
        if((samePrice==='')||(isNaN(samePrice))){
          alert('OPCION NO VALIDA!!!')
          equalPrice(flights);
        }
        var acum=0;
        for(var x =0;x<flights.length;x++){
          if(flights[x].cost==samePrice){
            console.log(' VUELO ENCONTRADO!!!\n El vuelo con origen: ' + flights[x].from + ', y destino:  '+ flights[x].to + ' tiene un coste de: '+ flights[x].cost+'€' )
            acum=acum+1
            
          }
        }
        if(acum===0){
          console.log('Lo sentimos, no hemos encontrado vuelos con ese precio')
        }
      }

    //FUNCION QUE PERMITE AL USUARIO BUSCAR VUELOS MEDIANTE SI ID

  function flightsByNum(flights){
    var acum=0;
    var flightNumber=prompt('Indique numero de vuelo que desea buscar')
   
    for(var x=0;x<flights.length;x++){
      if(flights[x].id==flightNumber){
        console.log('GRACIAS POR SU COMPRA,VUELVA PRONTO')
        acum=acum+1;
      }
    }
    if(acum===0){
      console.log('VUELO NO ENCONTRADO!!!')
    }
  }
      //FUNCION QUE PRESENTA LAS OPERACIONES DISPONIBLES PARA EL ADMINISTRADOR

      function admin(flights){
        var optionAdm = prompt('OPERACIONES DISPOBLES : \n 1 CREAR VUELOS\n 2 ELIMINAR VUELOS')
        switch(optionAdm){
          case '1':
            createFlight(flights);
            break;
          case '2':
            remFlight(flights);
            break;
          default:
            alert('OPCIÓN NO VALIDA!!!')
            admin();
        }
       }

       // FUNCION QUE PERMITE ELIMINAR VUELOS MEDIANTE ID

       function remFlight(flights){
        var acum=0;
        var cleanFlight = prompt('INDIQUE EL VUELO QUE DESEA ELIMINAR')
        if((isNaN(cleanFlight))||(cleanFlight==='')){
          alert('DEBES INGRESAR UN ID VALIDO')
          remFlight(flights)}
         for(var x=0;x<flights.length;x++){
          if(cleanFlight==flights[x].id){
            flights.splice(cleanFlight,1);
            console.log('VUELO ELIMINADO CON EXITO!!!')
            acum=acum+1;
            vuelos(flights);
          }
         }
        if(acum===0){
          alert('NO HEMOS ENCONTRADO NINGUN VUELO CON ESE ID...')
        }
       } 

       //FUNCIÓN QUE PERMITE CREAR HASTA QUE HAYA UN TOTAL DE 15 VUELOS

       function createFlight(flights){
         if(flights.length===15){
           alert('YOU HAVE 15 FLIGHTS CREATED, IF YOU WANT TO CREATE ANOTHER ONE, YOU HAVE TO DELETE AN EXISTING FLIGHT')

         }else{
          var anotherFlight=new Object();
          
          anotherFlight.to=prompt('Enter the flight destination')
          //checkInput(anotherFlight.to);
          
          var fligthDestination = checkInput('Enter the flight destinatio', 'string')

          if(typeof(anotherFlight.to)=='number'){
            alert('ENTER INCORRECT, TRY AGAIN')
            createFlight(flights);
          }
          anotherFlight.from=prompt('Enter the flight origin')
          checkInput(anotherFlight.from);
          anotherFlight.cost=prompt('Enter the flight cost')
          anotherFlight.scale=prompt('Is there a stopover?\n YES OR NOT')
          anotherFlight.scale=anotherFlight.scale.toUpperCase();
          if(anotherFlight.scale==='YES'){
            anotherFlight.scale='true';
          }else{
            anotherFlight.scale='false';
          }
          flights.push(anotherFlight);
          alert('FLIGHT CREATED CORRECTLY')
          alert('THIS IS THE LIST WITH ALL OUR FLIGHTS')
          vuelos(flights);
          var repeatOperation=prompt('DO YOU WANT TO CREATE ANOTHER FLIGHT?\n YES\n NOT\n');
          repeatOperation=repeatOperation.toUpperCase();
          if(repeatOperation==='YES'){
            createFlight(flights);
          }else{
            alert('THANK YOU FOR VISIT')
          }
          

         }
         
       }

       function checkInput(param){
         if((param===null)||(param==='')||(param===undefined)){
           alert('INPUT INCORRECT,TRY AGAIN')
           createFlight(flights);
         }

       }

function skylabAirlinesPro(flights){
  
  whoAreYou(flights);
}

skylabAirlinesPro(flights);
