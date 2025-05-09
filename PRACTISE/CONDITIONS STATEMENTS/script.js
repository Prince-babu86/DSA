// conditions statments javascript dsa

// practise questions if else statements

// Q.Accept two numbers and print the greatest between them

let a = 12;
let b = 200;

// a>b  ? console.log(a) : console.log(b); // ans

// Q.Accept an integer and check whether it is an even number or odd.

// a%2 === 0 ? console.log(`${a} is a even number`) : console.log(`${a} is a odd number`) ?

let name = "prince babu";
let age = 19;

if (age > 18) {
//   console.log(`${name} you are a valid voter ?`);
} else {
  console.log(`${name} you are not a valid voter`);
}

// Q.Accept three numbers and print the greatest among them
let c = 25;

if (a > b && a > c) console.log(a);
// else if (b > a && b > c) console.log(b);
// else console.log(c);

let max = a > b && a > c ? a : b > c ? b : c;


// Q.Accept a year and check if it a leap year or not (google to find out what's a leap year)


// method 1 

let year = 2000

// method 1
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("leap year");
        }else{
            console.log("not a leap year");
        }
    }else{
        console.log("leap year");
    }
}else{
    console.log("not a leap year");
}

// method 2

if(year%4 ==0 && year%100 !=0){
    console.log("leap year");
}else if(year%400==0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}



// Q.Shop discount - Description on Graphic

let amount = 0

// method 1

// if(amount>0 && amount<=5000){
//     console.log (amount);
// }else if(amount>5000 && amount<=7000){
//     console.log (amount - (amount*5)/100);
// }else if(amount>7000 && amount<=9000){
//     console.log (amount - (amount*10)/100);
// }else{
//     console.log (amount - (amount*20)/100);
// }


// method 2


let discount = 0
// if(amount>0 && amount<=500) discount = 0
// else if(amount>5000 && amount<=7000) discount = 5
// else if(amount>7000 && amount<=9000) discount = 10
// else discount = 20 

// amount -= (amount*discount)/100

// console.log(amount);


// Q.Bijli Bill - Description on Graphic


let units = 700   // 700

// method 1
if(units>0 && units<=100){
   amount = (units*4.2)
}else if(units>100 && units<=200){
    amount = (100*4.2) + (units-100)*6
}else if(units>200 && units<=400){
    amount = (100*4.2) + (100*6) + (units - 200)*8
}else if(units>400){
    amount = (100*4.2) + (100*6) + (200*8) + (units-400)*13
}
console.log(amount);

// method 2

let bill = 0 
if(units>400){
    bill = (units - 400)*13  // 300 units 
    units = 400
}

if(units>200 && units<=400){
    bill = bill + (units - 200)*8   // 200 units 
    units = 200
}

if(units>100 && units<=200){
    bill = bill + (units - 100)*6  // 100 units
    units = 100
}

if(units>0 && units<=100){
    bill = bill + (units - 0)*4.2  // last 100 units    `
}
 

console.log(bill);