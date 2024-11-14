// // This is a single line comment (jdbafkjbf)
// /* This
//        is 
//          a 
//            multi-line
//                comment */

// console.log("Arithmetic operators!");
// let a = 8;
// let b = 3;
// console.log("a = ",a ,"b =", b);
// console.log("a + b =", a+b );   
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b);


// // blank strings
// console.log(" ");
// console.log(" ");

// a = a + 1; //  (you can also use  --> | a++; |  ) 
// console.log(a);
// b--; // (you can also use --> | b = b-1; | )
// console.log(b);

// // blank strings
// console.log(" ");
// console.log(" ");

// a+=2; b-=5;
// console.log(a,b);

// a*=2; b*=5;
// console.log(a,b);

// // Voting !
// let age = 12;
// if(age >= 18){
//     console.log("you can vote!");
// }
// else{
//     console.log("you cannot vote!");
// }

// // odd or even
// let num = 15;
// if(num % 2 === 0){
//     console.log("EVEN!");
// }
// else{
//     console.log("ODD!");
// }

// //Ternary operator!

// let Age = 17;
// let result = Age >= 18 ? "adult" : "not adult";
// console.log(result);


// // Grading!

// let score = 99;
// if(score >= 80){
//     console.log("Your grade is A");
// }
// else if(score <= 79 && score >= 70){
//     console.log("Your grade is B");
// }
// else if(score <= 69 && score >= 60){
//     console.log("Your grade is C");
// }
// else if(score <= 59 && score >= 50){
//     console.log("Your grade is D");
// }
// else{console.log("Your Grade is f");
// }

// //loops


// for(let i=1; i<=5; i++){
//     console.log(i)
// }


// //Arrays
// console.log("Arrays");

// console.log("Loop using For loop");
// let arr = [1,2,3,4,5,6,7];
// for (let i=0; i<arr.length ; i++ ){
//     console.log(arr[i]);
// }
// console.log(arr);


// console.log("Loop using For of loop");
// let ar1 = ["hello","yo","hell","king","blue","white","black"];
// for(let i of ar1){
//     console.log(i)
// }


// console.log("Find The average marks of students");
// let marks = [88,44,56,67,35,77,87,99,23];
// let sum = 0
// let avg = 0
// for (let i of marks){
//     sum += i;
    
// }
// console.log(marks.length);
//     avg = sum / marks.length;

// console.log(`Average marks of the students is = ${avg}`);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// console.log("Discount Program!")
// let price = [200,250,900,450,540,340,450];
// let i = 0;
// for (let val of price){
//     console.log(`value at index ${i}=${val}`)
//     let offer = val/10;
//     price[i] -= offer;
//     console.log(`price after offer = ${price[i]}`);
//     i++;
// }

// price.push(1000,3000,650,750);
// console.log(price);

// ////////////////////////////////////////

// console.log("Functions");

// function plus(a,b){
//     c = a + b;
//     return c;
// }
// let val = plus(2,4);
// console.log(val);

// function countvowel(str){
//     let vow = 0;
//     for(const cha of str){
//     if(cha === "a"||cha === "e"||cha === "i"||cha === "o"||cha === "u"){
//         vow++
//     }
// }
// console.log(vow);
// }

// const countV = (str) => {
//     let vow = 0;
//     for(const cha of str){
//     if(cha === "a"||cha === "e"||cha === "i"||cha === "o"||cha === "u"){
//         vow++
//     }
// }
// console.log(vow);
// }


let arr2 = [5,3,6,8];

// arr2.forEach((sqr)=>{
//     console.log(sqr * sqr);
// });

let evenArr = arr2.filter((even) => {
    return even % 2 === 0;
});
console.log(evenArr)

let large = arr2.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});
console.log(large)

let n = prompt ("Enter a Number ");
let arr = [];
for ( i=1; i<=n ; i++){
    arr [i-1] = i 
};
console.log(arr)

let sum = arr.reduce((p,c) =>{
    return p + c;
});
console.log(sum)

let prod = arr.reduce((p,c) =>{
    return p * c;
});
console.log(prod)
