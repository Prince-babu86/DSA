// loops part 1 dsa in javascript

// let n = Number(prompt("Enter a nu"))

let n = 3;

for (let i = 1; i <= n; i++) {
  // console.log("hellow world");
}

for (let i = 1; i <= 10; i++) {
  // console.log(`${n} * ${i} = ${n*i} `);
}

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

// console.log(sum);

let facto = 1;

for (let i = 1; i <= n; i++) {
  facto *= i;
}

// console.log(facto);


let evenSum = 0 ;
let oddSum = 0 ;

for(let i = 1 ; i<=n ; i++){
    if(i%2==0){
        evenSum += i
    }else{
        oddSum += i
    }
}



// console.log(`The Even sum is = ${evenSum}`);  
// console.log(`The Odd sum is = ${oddSum}`);  



for(let i = 0 ; i<=n/2; i++){
    if(n%i ==0){
        // console.log(`factors of ${i} = ${i}`);
    }
}

// check is prime or note 



let isPrime = true

// for(let i = 2; i<=n/2 ; i++){
//     if(n%i == 0){
//         isPrime = false;
//         break ;
//     }
// }

// if(isPrime){
//     console.log("Prime number");
// }else {
//     console.log("Not Prime");
// }


// method 2

isPrime = isPrimeFun(n)
if(isPrime) console.log("Prime number");
else console.log("Not prime number");

function isPrimeFun(n){
    if(n<=1) return false
    if(n==2) return true
    if(n%2 == 0) return false
    for(let i = 3 ; i<=Math.floor(Math.sqrt(n)); i+= 2){
        if(n%i==0) return false
    }
    return true
}
// 



