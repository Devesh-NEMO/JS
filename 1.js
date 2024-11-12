// This is a single line comment (jdbafkjbf)
/* This
       is 
         a 
           multi-line
               comment */

console.log("Arithmetic operators!");
let a = 8;
let b = 3;
console.log("a = ",a ,"b =", b);
console.log("a + b =", a+b );   
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);


// blank strings
console.log(" ");
console.log(" ");

a = a + 1; //  (you can also use  --> | a++; |  ) 
console.log(a);
b--; // (you can also use --> | b = b-1; | )
console.log(b);

// blank strings
console.log(" ");
console.log(" ");

a+=2; b-=5;
console.log(a,b);

a*=2; b*=5;
console.log(a,b);

// Voting !
let age = 12;
if(age >= 18){
    console.log("you can vote!");
}
else{
    console.log("you cannot vote!");
}

// odd or even
let num = 15;
if(num % 2 === 0){
    console.log("EVEN!");
}
else{
    console.log("ODD!");
}

//Ternary operator!

let Age = 17;
let result = Age >= 18 ? "adult" : "not adult";
console.log(result);


// Grading!

let score = 99;
if(score >= 80){
    console.log("Your grade is A");
}
else if(score <= 79 && score >= 70){
    console.log("Your grade is B");
}
else if(score <= 69 && score >= 60){
    console.log("Your grade is C");
}
else if(score <= 59 && score >= 50){
    console.log("Your grade is D");
}
else{console.log("Your Grade is f");
}