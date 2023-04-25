var vari1 = 1;
one();
two();
console.log(vari1);
function one(){
    var a = 10;
    console.log(a);
}

function two(){
    var b = 20;
    console.log(b);
}
// question no: 2
var a = 10;
var b = 20;
function addNumber(){
    var sum = a + b;
    console.log(sum)

}
var sum = addNumber()
// question no:3
let num1 = 5;
let num2 = 10
function multiNumber(){
    let sum = num1 + num2;
   
        console.log(sum)

    }
    sum = multiNumber()

//question no: 4

function threeNumber(){
    if(true){
        
        let a = 12;
        console.log(a)
    }
    if(true){
        const b = 14;
        console.log(b)
    }
    if(true){
        var c = 15;
        console.log(c) 
    }
}
threeNumber()
 

//question no: 5
console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
  var bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
  console.log(bestFood);