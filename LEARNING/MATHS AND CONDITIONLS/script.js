// Maths and condition statements

// console.log(Math.ceil(10.1)); // set to the upper range 10.1 to 11
// console.log(Math.floor(10.4)); // set to the lower range even if 10.9 to 10
// console.log(Math.round(10.7)); // set to the acrount the point number
// console.log(Math.abs(-8)); // convert into negative number to positive numbe
// console.log(Math.trunc(100.55665655544545)); // remove all float numbers after a difgit
// console.log(Math.pow(5, 2)); // make a power to a number 
// console.log(Math.sqrt(125)); // make a sque root of a number 
// console.log(Math.cbrt(125)); // make a cube root of a number 
// console.log(Math.max(10, 20, 30, 50, 80, 505)); // find the max number 
// console.log(Math.min(10, 20, 35, 58, 69, 25)); // find the min number 
// let a = 10.5656565;
// console.log(a.toFixed(2));  // fixed a point number 


// Questions 

/*
A = P * (1 + r/100)^t
CP = A - p

*/


// let p = Number(prompt("Enter Principle")); 
// let r = Number(prompt("Enter a rate"));
// let t = Number(prompt("Enter a time"));

// console.log(p*Math.pow(1 + r/100 , t) - p );



// console.log(Math.floor(Math.random()*8000 + 1000)); 



// Area of traingle of heros formula 

// let a = Number(prompt("Enter a frist number"));
// let b = Number(prompt("Enter a second number"));
// let c = Number(prompt("Enter a third number"));

// if(a+b<=c || a+c<=b || b+c<=a){
//     console.log("not possible");
// }else{
//     let s = (a+b+c)/2;
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }


// cicumfrance of circle

// let r = Number(prompt("Enter a number"))

// console.log(2*Math.PI*r);

// if else statements

// if(10>9 && 9>10){
//     console.log("hello world");
// }else if(10>100){
// console.log(10>100);
// }
// else{
//     console.log(10>2);
// }


let a = Number(prompt("Enter a frist number number"));
let b =  Number(prompt("Enter a second  number"));
let c =  Number(prompt("Enter a third number"));

if(a>b) console.log(a +" is the greatest nuber");
else console.log(b +" is the gretest number");


if(a>b && a>c){
    console.log(a);
}else if(b>a && b>c){
    console.log(b);
}else{
    console.log(c);
}