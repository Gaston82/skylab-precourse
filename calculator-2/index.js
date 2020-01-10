//var calculator=document.getElementsByClassName('calculator');
//console.log(calculator);
// Numbers declaration
const numOne = document.getElementsByClassName('btn')[0];
numOne.addEventListener('click',()=>{
    console.log('number one');
});
var numTwo = document.getElementsByClassName('btn')[1];
var numThree = document.getElementsByClassName('btn')[2];
var numFour = document.getElementsByClassName('btn')[3];
var numFive = document.getElementsByClassName('btn')[4];

/*var numOne = document.getElementsByClassName('btn');
var numOne = document.getElementsByClassName('btn');
var numOne = document.getElementsByClassName('btn');
var numOne = document.getElementsByClassName('btn');
var numOne = document.getElementsByClassName('btn');;
*/


function primer(){
    console.log('you clicked one');
}

/*
const placeholder = document.body.getElementsByClassName('message')[0]
const result = document.getElementsByClassName('result')[0];

const zeroBtn = document.getElementsByClassName('btn')[0]

zeroBtn.addEventListener('click', () => {
  console.log('click on zero');
})

const oneBtn = document.getElementsByClassName('btn')[1]

oneBtn.addEventListener('click', () => {
  console.log('click on one');
})

function add() {
  const fistNum = parseInt(zeroBtn.innerHTML);
  const secondNum = parseInt(oneBtn.innerHTML);

  const sum = fistNum + secondNum;
  result.innerHTML = sum;
}


const addBtn = document.getElementById('sum');
addBtn.addEventListener('click', add);
*/