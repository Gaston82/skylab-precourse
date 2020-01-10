var program = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé"
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
  }
  /*{
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano"
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria"
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo"
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia"
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático"
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
  }*/
];
/*
function player(){
  var name = prompt('ENTER YOUR NAME PLEASE');
  if((name==='')||(name === null)){
    alert('YOU HAVE TO ENTER YOUR NAME');
    player(program);
  }else{
    alert('WELCOME TO PASAPALABRA GAME ' + name);
    alert('THE GAME START NOW');
    showQuestions(program,name);

  }

}*/

var pos = 0;
var reglamento = document.getElementsByClassName("rules");
var respuestas = document.getElementsByClassName("cont-questions");
var nameInput = document.getElementsByTagName("input")[0];
var input = document.getElementsByTagName("input")[1];
var inputValue;
var contResp = document.getElementsByClassName("answer");
var letras = document.getElementsByClassName("contenedor");
var letters = document.getElementsByClassName("letra");
var respondidas = 0;
var aciertos = 0;
var mistakes = 0;
var ranksection = document.getElementById('ranking');
var buttonPlayer = document.getElementById('submitUser');
buttonPlayer.addEventListener('click',welcome);
var player = {
  name:'',
  points:0
}
function welcome(){
  var inputName = nameInput.value;
  player.name = inputName;
  letras[0].style.display = "flex";
  respuestas[0].style.display="block";
  nameInput.style.display = "none";
  buttonPlayer.style.display = "none";
  reglamento[0].style.display = "none";
  contResp[0].style.display = "block";
  

}

showQuestion();
function nextQuestion() {
  inputValue = input.value;
  checkAnswerd();

  if (pos < program.length) {
    pos++;
  }
  if(pos===program.length){
  checkRespondidas();
  }
  input.value = "";

  showQuestion();
}

function showQuestion() {
  for(var x=pos;x<program.length;x++){
    if(program[x].status===0){
  respuestas[0].innerHTML = program[x].question;
  break;
    }
  }

}

function checkAnswerd() {
  if (program[pos].answer === inputValue) {
    program[pos].status = 1;
    respondidas++;
    aciertos++;
    letters[pos].style.backgroundColor="green";
    
  } else if (inputValue === "pasapalabra") {
    program[pos].status = 0;
  } else {
    program[pos].status = 3;
    respondidas++;
    mistakes++;
    letters[pos].style.backgroundColor="red";
  }
  //checkRespondidas();
}
function checkRespondidas() {
  if (respondidas === program.length) {
     ranking();
  }else{
     // nextRound();
     pos=0;
  }
}

function endGame(){
  var totalPoints = addPoints(mistakes,aciertos);
  ranksection.innerHTML = totalPoints;
}

function addPoints(mistakes,aciertos){
var points = aciertos - mistakes;
return points;
}
/*
function ranking(){
  player.points = addPoints(mistakes,aciertos);
  var row = document.getElementsByTagName('tr')[1];
  //console.log(row);
  //row.innerHTML = player.name;
  //row[1].innerHTML = player.points;
  row.children[0].innerHTML = player.name;
}
*/

//var comenzar = document.getElementById('jugar');
//comenzar.addEventListener('click',play);
/*
function play(){
    for(var x =0;x<program.length;x++){
        respuestas[x].innerHtml = program[x].question;
        }
}
*/
/*
var letters = document.getElementsByClassName("letra");

for (var x = 0; x < letters.length; x++) {
 console.log(letters[x])
 letters[x].style.backgroundColor = "red";
}
*/

//document.getElementsByClassName('a')[0]

//letters[1].innerHTML = 'RR'
//console.log(letters[1]);
//console.log(letters[1].innerHTML);
//var letraA = document.getElementsByClassName('letra')[1];
//console.log(letraA);
/*
for(var x = letters; x < letters.length; x++){
    
    console.log('hola'+letters[x].innerHtml);
}
*/
