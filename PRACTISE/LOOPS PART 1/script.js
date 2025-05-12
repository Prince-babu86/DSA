// dsa loops part 1 practise

let n = Number(prompt("Enter a number here"));

//  Reverse for loop. Print n to 1.

for (let i = n; i > 0; i--) {
  // console.log(i);
}

// Take a number as input and print its table

for (let i = 1; i <= 10; i++) {
  // console.log(`${n} * ${i} = ${i*n}`);
}

/// . Sum up to n terms.
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

// console.log(sum);

// Factorial of a number
let facto = 1;
for (let i = 1; i <= n; i++) {
  facto *= i;
}

// console.log(facto);

// Print the sum of all even & odd numbers in a range seperately.
let EvenSum = 0;
let OddSum = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    EvenSum += i;
  } else {
    OddSum += i;
  }
}

// console.log(`${EvenSum} this is a Even sum.`);
// console.log(`${OddSum} this is a Odd sum.`);

//Print all the factors of a number.

// method 1
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    // console.log(`Factors of ${i}`);
  }
}

// method 2

for (let i = 2; i <= n / 2; i++) {
  if (n % i == 0) {
    // console.log(`Factors of ${i} , ${n} , 1`);
  }
}

// Check if the number is Prime or not.

let isPrime = true;

// for(let i = 2 ; i<=n/2 ; i++){
//     if(n%i==0){
//       isPrime = false
//       break
//     }

// }

function isPrimeFun() {
  if (n == 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }

  return true;
}

isPrime = isPrimeFun();
if (isPrime) console.log("Prime number");
else console.log("Not prime number");
