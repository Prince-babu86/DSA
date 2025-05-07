// Conditionals Loops in DSA In javascript ? 




// find the greatest number in 3

// let a = Number(prompt("Enter frist number"))
// let b = Number(prompt("Enter second number"))
// let c = Number(prompt("Enter a third number "))

// if(a>b && a>c){
//     console.log(a);
// }else if(b>c && b>a){
//     console.log(b);
// }else{
//     console.log(c);
// }


// chech the is leap year

// let year = Number(prompt("Enter a year here!"));
let isLeap = false

// frist method 
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             isLeap = true
//         }else{
//             isLeap = false
//         }
//     }else{
//         isLeap = true
//     }
// }else{
//     isLeap = false
// }

// console.log(isLeap ? "is a leap year" : "not a leap year");


// second method 
// if(year%4==0 && year%100 !=0){
//     isLeap = true
// }else if(year%400 ==0){
//     isLeap = true
// }else{
//     isLeap = false
// }


// console.log(isLeap ? `this ${year} year is a leap year` : `this ${year} year is a not a leap year`);


// graphic problem 

// let amount = Number(prompt("Enter a number"));
let discount = 0

// method 1
// if(amount>=0 && amount<=5000){
//     console.log(amount);
// }else if(amount>5000 && amount<=7000){
//     console.log(amount - (amount*5)/100) ;
// }else if(amount>7000 && amount<=9000){
//     console.log(amount - (amount*10)/100) ;
// }else if(amount>9000){
//     console.log(amount - (amount*20)/100) ;
// }else{
//     console.log("invalid input");
// }

// method 2

// if(amount>=0 && amount<=5000) discount = 0
// else if(amount>5000 && amount<=7000) discount = 5
// else if(amount>7000 && amount<=9000) discount = 10
// else if(amount>9000) discount = 20
// else console.log("invalid number");

// console.log(amount - (discount*amount)/100);


// electricty bill payment 

let units = Number(prompt("Enter a number"))
let bill = 0 

// method 
// if(units > 0 && units <=100){
//     bill = units * 4.2 
// }else if(units > 100 && units <=200){
//     bill = (100 * 4.2) + (units - 100)*6
// }else if(units > 200 && units<=400){
//     bill = (100 * 4.2) + (100*6) + (units - 200)*8
// }else if(units > 400){
//     bill = (100 * 4.2) + (100*6) + (200*8) + (units - 400)*13
// }

// console.log(bill);

// method2  // 700

if(units > 400){
    bill = (units - 400) * 13
    units = 400
}

if(units > 200 && units <=400){
    bill = bill + (units - 200)*8
    units = 200
}

if(units > 100 && units <=200){
    bill = bill  + (units - 100)*6
    units = 100
}

bill = bill + (units*4.2)
console.log(bill);



// Loops of javascript in dsa