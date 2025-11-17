//his is javaScript Practice File...


//Use of "Map" 
// let arr = [1,2,3,4];

// let arr1 = arr.map(function(value){
//     return 1;
// })

// console.log(arr1);

//out put is => [1, 1, 1, 1]
//-------------------------------------------

// use of "ForEach" with function
// let arr = [1,2,3,4];1

// arr.forEach(function(value){
//     console.log("hey")

// })

//output is => (4) hey


// ----------------------------------------------

//use of "Filter" 

// let arr = [1,2,3,4];

// let arr1 = arr.filter(function(value){
//     return value>1;
// })

// console.log(arr1);

//output is  => (3) [2, 3, 4]

// -------------------------------------------------

//use of reduce if i want to add all arr value

// let arr = [1,2,3,4];

// let arr1 = arr.reduce(function(acc, val){
//     return acc + val;
// }, 0)

// console.log(arr1);

//output is => 10

// ---------------------------------------------------

//use of reduce if i want to multiply all arr value

// let arr = [1,2,3,4];

// let arr1 = arr.reduce(function(acc, val){
//     return acc * val;
// }, 1)

// console.log(arr1);

//output is => 24

// -------------------------------------------------------

// use of "While Loop" for descending order
// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }
 //output is => 10, 9, 8, 7, 6, 5, 4, 3, 2, 1



// ---------------------------------------------------------

// make a table of 3
// let i = 3;
// while(i<(3*10+1)){
//     console.log(i);
//     i+=3;
// }
//output is => 3, 6, 9, 12 ......... 27, 30

// -----------------------------------------------------------

// 1 to 100 value of sum
// let sum = 0;

// for(i=1;i<101;i++){
//     sum = sum + i;
// }

// console.log(sum);

//output is  => 5050

// ------------------------------------------------------------

//make string in column
// let str = "JavaScript";

// for (let i of str){
//     console.log(i);
// }

//output is => J, a, v, a, S, c, i, p, t

// ---------------------------------------------------------------


//Remove Duplicate value in Array
//  let arr = [1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4];
//  let arr1 = [...new Set(arr)];

//  console.log(arr1);

 //output is => [1, 2, 3, 4]

// ---------------------------------------------------------------

//find the second largest number in Array
// let arr = [5,2,4,1,3];

// let arr1 = [...new Set(arr)];

// arr1.sort(function(a, b){
//     return b-a;       //Note a-b ka matlab hai ki ascending Order or b-a ka matlab descending order
// });
// console.log("This is Array = > "+arr1)

// console.log("Second Largest Number is => "+arr1[1])

//output is => 4

// second method for this question
// let arr = [5,2,4,2,1];


// console.log([...new Set(arr)].sort(function(a,b){
//     return b-a;
// })[1])

//output is => 4

// or sort karna ho to Fat Arrow function ka use kar sakte hain

// let arr = [5,2,4,1,3];
// let arr1 = arr.sort((a,b) => b-a)[1];

// console.log(arr1);

//output is => 4
// ---------------------------------------------------------------

//reverse Array Value Without Using .reverse 
// let arr = [1,2,3,4,5];

// let arr1 = [];

// for (let i = arr.length-1; i>=0; i--){
//     arr1.push(arr[i]);
// }

// console.log(arr1);

//output is => [5,4,3,2,1]

// let arr = ["Arshil", "Arkan", "Arshi", "Qaynat", "Muskan", "Muski", "Arshi", "Arshil", "Arshil", "Qaynat", "Qaynat" ,'Qaynat', "Qaynat" ];

// let arr1 = [...new Set(arr)];

// console.log("This is Normal Array => ", arr1);

// let arr2 = [];

// for(let i = arr1.length-1;i>=0;i--){
//     arr2.push(arr[i]);
// }

// console.log("This is Reverse Array => ", arr2);
// ---------------------------------------------------------------

//Line 173 to 202 is practice code
//use of Push/Pop/splice
//Push => Agar hame koi value ko Array me add karna ho to Push ka use karte hain.
//Pop => Agar hame Kisi value ko Array se Remove karna ho to Pop Ka use karte hain. isse Array ke last ki value remove ho jati hai.
//Splice => Agar hame koi apne hisab kisi bhi jagah ki value ko delete karna ho to Splice ka use karte hain.
//Syntax of Splice => .Splice(Index, Element);


// let arr = [];

// arr.push(4);
// arr.push(5);
// arr.push("Arkan")
// arr.push("Qaynat");

// arr.push(6);

// console.log(arr);

// arr.pop();

// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.splice(0, 1);

// console.log(arr);

// ---------------------------------------------------------------

//how many time value repeat in Array
// let arr = [1 ,1 ,2 ,2 ,3, 5 ,4 ,5, 8 ,6 ,7 ,8 ];
// let obj = {};

// arr.forEach(function(val){
//     if(obj[val] === undefined){

//         obj[val] = 1;
//     }
//     else{
//         obj[val]++;
//     }
// })

// console.log(obj);

//output is => { '1': 2, '2': 2, '3': 1, '4': 1, '5': 2, '6': 1, '7': 1, '8': 2 }

//----------------------------------------------------------------
//second Practice Question
// let arr = ["Arshil", "Arkan", "Arshi", "Qaynat", "Muskan", "Muski", "Arshi", "Arshil", "Arshil", "Qaynat", "Qaynat" ,'Qaynat', "Qaynat" ];
// let obj = {};


// arr.forEach(function(val){
//     if( obj[val] === undefined){
//         obj[val] = 1;
//     }
//     else{
//         obj[val]++;
//     }
// })

// arr.forEach(function(value){
//     obj[value] === undefined ? obj[value]=1:obj[value]++;
// });

// console.log(obj);

// console.log(obj.Arshil);

//output => { Arshil: 3, Arkan: 1, Arshi: 2, Qaynat: 5, Muskan: 1, Muski: 1 }
// First Value Is Key and Second Value Is Value.....

// ---------------------------------------------------------------

//Higher Order Function HOFs
// function abc(){
//     return function(){
//         console.log("Welcome Back Mr. Arshil");
//     }
// }

// ---------------------------------------------------------------



//Create a function that takes another function as an argument and calls it after 3 second (HOF + Callback).
// function abc(fn){
//     setTimeout(fn, 3000);      //SetTimeout ka matlab hai ki aap kitne der baad iss line ko chalana chahte hai,
// }

// abc(function(){
//     console.log("Welcome Back Mr.Arshil");
// })

// ---------------------------------------------------------------

// function abc(fn, limit){
//     let check = 0;
//     return function(){
//         check < limit ? (check++, fn()) : console.log( "You have reach your maximum given limit");
//     }
// }

// let a = abc(() => console.log("Welcome Back Mr.Arshil Siddiqui"), 3);

// a();
// a();
// a();
// a();

//output is => 
// Welcome Back Mr.Arshil Siddiqui
// Welcome Back Mr.Arshil Siddiqui        
// Welcome Back Mr.Arshil Siddiqui        
// You have reach your maximum given limit

//----------------------------------------------------------------------------

//make a Function for Greet Any person
// function greeting(fn){   ///

//     return function(val){


//         console.log(`${fn}`, `${val}`); //dynamic method for aage ke liye
//         console.log(fn, val);           // Traditional Method Jo ham abhi use karte hain.
        
//         if

//     }
// }

// let English = greeting("Hello");
// English("Arshil");

// let Hindi = greeting("Namastey");
// Hindi("Mr.Arshil");

//output => 
// Hello Arshil
// Hello Arshil
// Namastey Mr.Arshil
// Namastey Mr.Arshil

//--------------------------------------------------------------------------------

//Make a function And Print Any text for ones... i send multiple request for run multiple time but it's work only ones...

// function abc(fn){

//     let check = false;

//     return function(){
//         (!check) ? (check = true, fn):false;
//     }
// }

// let a = abc(console.log("This code is running only ones"))

// a();
// a();
// a();
// a();
// a();

//output is => This code is running only ones

// --------------------------------------------------------------


//Write a function for delay two second....
// function pagal(fn, delay){

//     return function(){
//         setTimeout(fn, delay);
//     }
// }

// let a = pagal(function(){
//     console.log("Welcome Back Miss. Ayza Siddiqui");
// }, 2000);

// a();

//output is after two second console will run....
//Welcome back Miss. Ayza Siddiqui.
//----------------------------------------------------

//Write a function which check 2 second if two second is complete and run function.

// function pagal(fn, delay){
//     let check = 0;
//     return function(){
//         let current = Date.now();
//         if (current - check >= delay){
//             check = current;
//             fn()
//         }
//         else{console.log("Ek baar Bhi nhi chala")}
//     }
// }

// let a = pagal(function(){console.log("Pahli baar Chala")}, 5000);

// a();


// //------------------------------------------------------

// OTP Generate Function (Arshil Style)
// let genOTP = Math.floor(Math.random()*9000+1000);
// console.log(genOTP);

// let UserInput = Number(prompt("Your Generated OTP is : "+genOTP+" Enter Same"));

// function CheckOTP(){
    
//     return function(){
//         if (genOTP === UserInput) alert("Your OTP Was Successfull Authenticate")
//         else{
//             alert("You have enter Wrong OTP");
//             let check = confirm("Re-Enter OTP, Then Click 'Okay'");
//             if(check){
//             UserInput = Number(prompt("Your Generated OTP is : "+genOTP+" Enter Same"));
//             CheckOTP()();
//             }
//         }
//     }
// }

// CheckOTP()();

//if user give right opt then output is : Your OTP Was Successfull Authenticate

// ------------------------------------------------------------------------------------------

//Find Leap Year

// let year = Number(prompt("Enter Any 4 Digit Number")); //if use enter : 2024

// if(year%4 === 0){
//     if(year%100 === 0){
//         if(year%400 ===0){
//             alert("Leap Year");
//         }
//         else alert("No Leap Year");
//     }
//     else alert("Leap Year");
// }
// else alert("No Leap Year");

//output is : Leap year

//----------------------------------------------------------

//Give Discount for user (0-5000 : 0%, 5001-7000 : 5%, 7001-9000 : 10%, More then 9000 : 20%)

// let Amt = Number(prompt("Enter Purchase Amount"));

// if (Amt >= 0 && Amt <=5000){
//     alert("No Discount");
// }

// else if(Amt >= 5001 && Amt <=7000){
//     alert("5% Discount for "+ Amt +" is " + (Amt*5)/100);
// }
// else if(Amt >= 7001 && Amt <=9000){
//     alert("10% Discount for "+ Amt +" is " + (Amt*10)/100);
// }
// else if(Amt > 9000){
//     alert("20% Discount for "+ Amt +" is " + (Amt*20)/100);
// }

//--------------------------------------------------------------

//n number times print I Love You! Jaan.
// let a = Number(prompt("How many time Print I Love You! jaan."));  //if input is 5

// for(let i = 1; i<=a; i++){
//     console.log("ILU "+i);
// }

//output is =>
    // ILU 1
    // ILU 2
    // ILU 3
    // ILU 4
    // ILU 5

//-------------------------------------------------------------------

// print Any Number Of Table
// let a = Number(prompt("Enter Number"));
// for(let i = 1 ; i<=10; i++){
//    let table =  a*i;
//     console.log(a + " * "+i+" = "+table);
// }

//output is => 
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100

//-------------------------------------------------------------------

//sum of all number which is given by user

// let UserInput = Number(prompt("Enter Any Number"));
// let sum = 0;


// for(let i = 1; i<=UserInput; i++){
//     sum = sum+i;
// }

// console.log(sum);

//------------------------------------------------------

//find odd/even number

// let UserInput = Number(prompt("Enter Any Number"));

// if(UserInput%2 ==0) alert("Even Number")
// else alert("Odd Number");

//-----------------------------------------------------

//find the factor of any number....

// let UserInput = Number(prompt("Enter Any Number"));

// for (let i = 1; i<=UserInput; i++){
//     if(UserInput%i == 0) alert(i)
// }

//----------------------------------------------------

//use of break statement and Continue statement.....

//continue Statement
// let a = 10;

// for(let i = 1; i<=a; i++){
//     if(i == 6) continue;
//     console.log(i);    
// }
//output is => 1,2,3,4,5,7,8,9,10
// ------------------------------------------------------

//break Statement
// let a = 10;
// for(let i = 1; i<=a; i++){
//     if(i == 6) break;
//     console.log(i);    
// }
//output is => 1,2,3,4,5
// ------------------------------------------------------

//Syntax of while loop
//start
//While(condition){}
//increment

//---------------------------------------------

// //sum of given each digit 
// let n = Number(prompt("enter Any Number")); //123

// let sum = 0;

// while (n>0) {
//     let reminder = n%10;
//     sum = sum + reminder;
//     n = Math.floor(n/10);
// }

// console.log(sum);

//output is => 6

// --------------------------------------------------

// reverse of given Number
// let n = Number(prompt("enter Any Number")); //123
// let rev = 0;

// while (n>0) {
//     let reminder = n%10;
//     rev = (rev*10) + reminder;
//     n = Math.floor(n/10);
// }

// alert(rev);

//output is => 6
//--------------------------------------------
// const prompt = require('prompt-sync')();
// let a = Number(prompt("Enter Any Number : "));

// let check = a*a;

// Math.abs(check).toString().length;



//----------------------------------------------
// Use of prompt-sync 
// const prompt = require("prompt-sync")()
// let n = prompt("Enter a Number: ");

// for (let i = 1; i<=n; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

//---------------------------------------------------------------------------------
// Pettern programming using number like 1, 22, 333, 4444 ,55555

// const prompt = require("prompt-sync")()
// let n = prompt("Enter a number :")

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         let a = i
//         process.stdout.write(a.toString()) // we can not use a number value here
//     }
//     console.log();
//     }

//--------------------------------------------------------------------------------

// const prompt = require("prompt-sync")()

// let n = prompt("Enter any Number : ");

// process.stdout.write(n);
// process.stdout.write(n);
// process.stdout.write(n);
// process.stdout.write(n);
// process.stdout.write(n);
// process.stdout.write(n);

// console.log(n);
// console.log(n);
// console.log(n);
// console.log(n);
// console.log(n);
// console.log(n);

//--------------------------------------------------------------------------------

//make a reverse for pyramid

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = n; i>=1; i--){
    
//     for(let j = 1; j<=i; j++){
//         console.log(j);
//         process.stdout.write("* ");
//     }
//     console.log();
    
// }

//---------------------------------------------

//make a reverse for pyramid

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = n; i>=1; i--){
    
//     for(let j = i; j>=1; j--){
//         process.stdout.write("* ");
//     }
//     console.log();
    
// }

//---------------------------------------------------------------

//make pattern program using ASCII Value and print
// A
// BB
// CCC
// DDDD
// EEEEE

// const prompt = require("prompt-sync")(); //if given input is : 5

// let n = prompt("Enter 1 to 10 : ");

// let char = 65;
// for (let i = 1; i<=n; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(char)+" ");
//     }
//     char++;

//     console.log();   
// }

//output is => 
// A
// BB
// CCC
// DDDD
// EEEEE

//-------------------------------------------------



//Practice of Loop

// make pattern for like *, **, ***, ****

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = 1; i<=n; i++){

//     for (let j = 1; j<=i; j++){

//         process.stdout.write("* ");
//     }
//     console.log();
    
// }

//output is =>
// *
// **
// ***
// ****
// *****

// reverse pattern


// make pattern for like *****, **** ***, **, *

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = n; i>=1; i--){

//     for (let j = i; j>=1; j--){

//         process.stdout.write(" * ");
//     }
//     console.log();
    
// }
//output is =>
// * * * * * 
// * * * *
// * * *
// * *
// *
//---------------------------------------------------

//Practice of Loop

// make pattern for like 1, 22, 333, 4444

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = 1; i<=n; i++){

//     for (let j = 1; j<=i; j++){

//         process.stdout.write(i.toString());
//     }
//     console.log();
// }

// output is =>
// 1
// 22
// 333
// 4444
// 55555


//Practice of Loop

// make pattern for like 1, 22, 333, 4444

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = n; i>=1; i--){

//     for (let j = i; j>=1; j--){

//         process.stdout.write(i.toString());
//     }
//     console.log();
// }

// output is =>
/*  55555
    4444
    333
    22
    1    */

// --------------------------------------------------------------------

//Practice of Loop

// make pattern for like 1, 12, 123, 1234

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = 1; i<=n; i++){

//     for (let j = 1; j<=i; j++){

//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// output is =>
// 1
// 12
// 123
// 1234
// 12345

//Practice of Loop

// make pattern for like 1, 12, 123, 1234

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = n; i>=1; i--){

//     for (let j = 1; j<=i; j++){

//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// output is =>
/*
12345
1234
123
12
1
*/

//Practice of Loop

// make pattern for like 1, 12, 123, 1234

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = 1; i<=n; i++){

//     for (let j = i; j>=1; j--){

//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// output is =>
/*
1
21
321
4321
54321
*/

// const prompt = require("prompt-sync")()

// let n = prompt("Enter Number 1 to 10 : ");

// for (let i = n; i>=1; i--){

//     for (let j = i; j>=1; j--){

//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// output is =>
/*
54321
4321
321
21
1
*/

// const prompt = require("prompt-sync")();

// let n = prompt("Please Enter Number 1 to 10 : ");

// let char = 65;
// for (let i = 1; i<=n; i++){

//     for (let j = 1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(char));
//     }
//     char++;
//     console.log();
// }

/*
A
BB
CCC
DDDD
EEEEE
*/

// const prompt = require("prompt-sync")();

// let n = prompt("Please Enter Number 1 to 10 : ");


// for (let i = 1; i<=n; i++){

//     for (let j = 1; j<=n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j=1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

/*
        * 
      * *
    * * *
  * * * * 
* * * * *
*/

// const prompt = require("prompt-sync")();

// let n = prompt("Please Enter Number 1 to 10 : ");


// for (let i = n; i>=1; i--){

//     for (let j = n-i; j>=1; j--){
//         process.stdout.write("  ");
//     }
//     for(let j=1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

/*
* * * * * 
  * * * *
    * * *
      * *
        *
*/

// const prompt = require("prompt-sync")();

// let n = prompt("Please Enter Number 1 to 10 : ");


// for (let i = 1; i<=n; i++){

//     for (let j = 1; j<=n-i; j++){
//         process.stdout.write(" ");
//     }
//     for(let j=1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

/*
    * 
   * *
  * * *
 * * * *
* * * * *
*/

// const prompt = require("prompt-sync")();

// let n = prompt("Please Enter Number 1 to 10 : ");


// for (let i = n; i>=1; i--){

//     for (let j = n-i; j>=1; j--){
//         process.stdout.write(" ");
//     }
//     for(let j=1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

/*

* * * * *
 * * * *
  * * *
   * *
    *

*/

//------------------------------------------------

//find the Strong Number ................
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Please Enter Any Number : "));

// let c = n;

// let final = 0;
// while(n>0){
//   let last = n%10;

//   let fact = 1;
//   for(let i = 1; i <= last; i++){
//     fact = fact * i;
//   }
//   final = final + fact;
//   n = Math.floor(n/10);
// }

// if(c === final) console.log("This is strong Number");
// else console.log("No Strong Number");

//--------------------------------------------------------

//find the all Strong Numbers 
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Please Enter Any Number : "));  //if you enter 50000

// for(let a =1; a<=n; a++){
//   let copy = a;

//   let c = a;
//   let final = 0;
// while(c>0){
//   let last = c%10;

//   let fact = 1;
//   for(let i = 1; i <= last; i++){
//     fact = fact * i;
//   }
//   final = final + fact;
//   c = Math.floor(c/10);
// }
// if(copy === final) console.log(final);
// }

//output is => 
  /*

1
2
145
40585

*/
//-----------------------------------------------------------------

//practice one more time find all strong Numbers......
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter any Number : ")); // given value : 50000


// for (let i = 1; i<=n; i++){
//   let copyofn = i;
  
  
//   let copyofi = i;
//   let final = 0;
//   while(copyofi>0){
//     let digit = copyofi%10;
    
//     let factorial = 1;
//     for(let j = 1; j<=digit; j++){
//       factorial = factorial*j;
//     }
//     copyofi = Math.floor(copyofi/10);
//     final = final + factorial;
//   }
//   if(final === copyofn) console.log("Strong Number is : "+final);
// }

//output is => 
// Strong Number is : 1
// Strong Number is : 2
// Strong Number is : 145
// Strong Number is : 40585

//------------------------------------------------------------------

//use of Push, Pop, unshift, shift

// let arr = [10,20,30,40,50,60];

// arr.push(100); //Store Value in End
// arr.unshift(1); //Store Value in Start

// arr.pop(); //Remove Value in End
// arr.shift(); //Remove Value in Start

// console.log(arr);
//----------------------------------------------------------------

// let prompt = require("prompt-sync")();
// let n = Number(prompt("how many time : ")); //input : 4

// let arr = new Array(n);

// sum =0;
// for (let i=0; i<arr.length; i++){
//   arr[i]=Number(prompt("Enter Number : ")) //2, 3, 4, 5
//   sum = sum+arr[i];
// }

// console.log(arr);
// console.log("Sum of All Elements : "+sum);

//output is => 
  /*
  [ 2, 3, 4, 5 ]
  Sum of All Elements : 14
*/

//----------------------------------------------------------------

//find the max value in given Array......
// let arr = [
//   34, 87, 12, 56, 78, 90, 23, 45, 67, 89,
//   11, 22, 33, 44, 55, 66, 77, 88, 99, 10,
//   21, 32, 43, 54, 65, 76, 87, 98, 9, 19,
//   29, 39, 49, 59, 69, 79, 89, 99, 8, 18,
//   28, 38, 48, 58, 68, 78, 88, 98, 7, 17,
//   27, 37, 47, 57, 67, 77, 87, 97, 6, 16,
//   26, 36, 46, 56, 66, 76, 86, 96, 5, 15,
//   25, 35, 45, 55, 65, 75, 85, 95, 4, 14,
//   24, 34, 44, 54, 64, 74, 84, 94, 3, 13,
//   23, 33, 43, 53, 63, 73, 83, 93, 2, 12
// ];


// let max = 0;
// for(let i = 0; i<arr.length; i++){
//   if (max<arr[i]) {
//     max = arr[i];    
//   }
// }

// console.log("Maximum number is : "+max);

//output is =>
//Maximum number is : 99
//----------------------------------------------------------------

//find Second Max Value In Given Array
// let max = Math.max(arr[0], arr[1]);
// let min = Math.min(arr[0], arr[1]);

// for(let i = 2; i<=arr.length; i++){
//   if(arr[i]>max){
//     min = max;
//     max = arr[i];
//   }

//   else if(arr[i]>min && arr[i] != max ){
//     min = arr[i];
//   }
// }
// console.log("Max Number is : "+max);
// console.log("Second Max Number is : "+min);

//output => 
  /*
Second Max Number is : 79
*/

// let arr = [1, 2, 3, 4, 5, 6];

// let newarr =new Array();

// for (let i = arr.length-1; i >= 0; i--) {
//   newarr.push(arr[i]);
// }

// console.log("First Given Array : "+arr);
// console.log("Second Given Array : "+newarr);

/*
output is =>
  First Given Array : 1,2,3,4,5,6
  Second Given Array : 6,5,4,3,2,1
*/

//--------------------------------------------------------

//all Zeros in left side and one in right....
// let arr = [1,1,0,0,0,0,1,0,1,0];
// let i= 0, j= 0;

// while (i<arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//     i++;
// }

// console.log(arr);
/*
[ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
*/

//---------------------------------------------------------

//shift 1 to end position.....
// let arr = [1,2,3,4,5];

// let temp = arr[0];
// for(let i = 0; i<=arr.length-1; i++){
//   arr[i] = arr[i+1];
// }

// arr[arr.length-1] = temp;

// console.log(arr);
/*
[ 2, 3, 4, 5, 1 ]
*/

//-----------------------------------------------------------

//shift 5 to Start position.....
// let arr = [1,2,3,4,5];

// let temp = arr[arr.length-1];
// for(let i = arr.length-1; i>0; i--){
//   arr[i] = arr[i-1];
// }

// arr[0] = temp;

// console.log(arr);
/*
[ 5, 1, 2, 3, 4 ]
*/
//----------------------------------------------------------------------

// let arr = [1,2,3,4,5];

// let k = 4;
// for(let j = 1; j<=k;j++){
//   let temp = arr[0];
// for(let i = 0; i<=arr.length-1; i++){
//   arr[i] = arr[i+1];
// }

// arr[arr.length-1] = temp;
// }

// console.log(arr);

/*
[ 5, 1, 2, 3, 4 ]
*/

//---------------------------------------------------------------------

//find the number which is search by user

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter Any Number : "));  //given value is : 100

// let arr = [1,79,20,36,44,49,50,86,100];

// let index = -1
// for(let i = 0; i<=arr.length; i++){
//   if(arr[i] == n){
//     index = i;
//     break;
//   } 
// }

// if(index == -1) console.log("Your Given Value is out of Array.😒");
//  else console.log("Your Search In "+index+" Index"); 

/*
Enter Any Number : 100
*/

//---------------------------------------------------------------------

//practice Question
// const prompt = require("prompt-sync")();

// let arr = [10, 65, 15, 8, 3, 46, 93];

// let max = arr[0];

// for(let i = 1; i<=arr.length;i++){
//   if(arr[i]>max){
//     max = arr[i];
//   }
// }

// console.log(max);
//---------------------------------------------------------------------

//practice Question....
// let arr = [28, 6, 74, 48, 84, 79, 84];

// let max = Math.max(arr[0], arr[1]);
// let secondMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i<=arr.length; i++){
//   if(max<arr[i]){
//     secondMax = max;
//     max = arr[i];
//   }
// }

// console.log("Max Number is : "+max);
// console.log("Second Max Number is : "+secondMax);

//---------------------------------------------------------------------
  
//practice Question ......Reverse Pattern
// let arr = [1, 2, 3, 4];
// let arr1 = new Array(arr.length);

// let i=0;

// for(let j = arr.length-1; j>=0; j--){
//   arr1[i] = arr[j]
//   i++
// }

// console.log(arr1);

//----------------------------------------------------------------------

//optimize code for Reverse in Single Array
// let arr = [1,2,3,4,5,6];
// let i = 0, j = arr.length-1; temp = arr[0];
// while(i<j){
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);

//---------------------------------------------------------------------

//all zeros in left side and all one in right side
// let arr = [1,1,0,0,1,0,0,1];

// let i = 0, j=0;

// while(i<arr.length){
//   if(arr[i] == 0){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++
// }

// console.log(arr);
//--------------------------------------------------------------------
// let arr = [1,1,0,0,1,0,0,1];

// let i = 0, j=0;

// while(i<arr.length){
//   if(arr[i] == 1){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++
// }

// console.log(arr);
//---------------------------------------------------------------------

//shift Start value in end of the Array
// let arr = [1,2,3,4,5];


// let  temp = arr[0];
// for(let i=0; i<=arr.length-1; i++ ){
//   arr[i] = arr[i+1]
// }
// arr[arr.length-1]=temp;
// console.log(arr);
//---------------------------------------------------------------------

//Upar wale ka reverse
// let arr = [1,2,3,4,5];

// let temp = arr.length;


// for(let i = arr.length-1; i>=0;i--){
//   arr[i] = arr[i-1];

// }
// arr[0] = temp;

// console.log(arr);

//--------------------------------------------------------------------
//User ke hisab se shifting
// const prompt = require("prompt-sync")();

// let k = Number(prompt("Enter Any Number : "));
// let arr = [1,2,3,4,5];
// let copy = arr;
// console.log(copy);

// k =  k%arr.length;

// for(let j=1; j<=k;j++){

// let temp = arr[0];
// for(let i = 0; i<arr.length-1; i++){
//   arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp;
// }
// console.log(arr);

//---------------------------------------------------------------------

//Leaner Search Number which is given by user
// const prompt = require("prompt-sync")();
// let k = Number(prompt("Enter Number : "));

// let arr = [1,2,3,4,5];

// let index = false;
// for(let i = 0; i<arr.length; i++){
//   if(arr[i] === k){
//     console.log("Your : "+k+" is in Index Number : "+i);
//     index = true;
//     break;
//   }
// }
// if (index === false) {
//   console.log("Code nhi chala😒😒");
// }

/**
output is => 
  Enter Number : 5
  Your : 5 is in Index Number : 4
*/
//-------------------------------------------------------------------------------------
//Binery Search and this optimized Code For Searching For in Array
// const prompt = require("prompt-sync")();


// let arr = [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// let n = Number(prompt("Enter Any Number : "));

// if(binerysearch(arr, n) === false) console.log("Your Number is not found😒😒")
//   else console.log("your Number is found👌👌");
  

// function binerysearch(arr, target){

//       let start = 0, end = arr.length-1;
//     while(start<=end){
//       let middle = Math.floor((start+end)/2);

//       if(target === arr[middle]) return middle;
//       else if(target > [middle]) start = middle+1

//       else end = middle-1;
//   }
//       return false;
// }

//----------------------------------------------------------------------------------------
// Bubble Short for assending order (stable code)
// let arr = [9,8,5,2,3,4,1];

// let n = arr.length-1;

// for(let i=0; i<=n;i++){
//   for(let j=0; j<=n-i-1; j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//       }
//   }
// }
// console.log(arr);
//---------------------------------------------------
//bubble short optimized code (Unstable code)
// let arr = [9,8,5,2,3,4,1];

// for(let i=0; i<arr.length-1;i++){
  
//   let small = i;
//   for(let j=i+1; j<arr.length; j++){
//       if(arr[small]>arr[j]){
//         small = j;
//       }
//     }
//     if(i != small){
//       [arr[i], arr[small]] = [arr[small], arr[i]];
//     }
// }
// console.log(arr);
// //----------------------------------------------------
// let arr = [1,4,3,2,9,10];
// for (let i = 1; i<arr.length;i++){
  
//   let key = arr[i]; //4
//   let j;
//   for(j = i-1; j>=0 && arr[j]>key ; j--){
//     arr[j+1] = arr[j];
//   }
//   arr[j+1] = key;
// }

// console.log(arr);
//-------------------------------------------------------------------

/*
Time Complexity

Complexity Representation

#Big O => Uppar Bound (Worst Case) Example : Time Complexity : 10 min
#Thetha => Average Case
#Omega => Lower Bound (Best Case) Example : TIme Complexity : 5 Min


*/

//------------------------------------------------------------------------------------

//Today Topic Is Multi-Dimention

//make two-D Array
// let arr = [[1,2,3,5],[4,5,6,10],[7,8,9,9]];

// for (let i=0; i < arr.length; i++){
//   for(let j=0; j<arr[i].length; j++){
//     process.stdout.write(`${arr[i][j]} `)
//   }
//   console.log();
// }

//-----------------------------------------------------------------------------------
//2D Array
// let arr = [[1,2,3,4],[5,6,7,8],[9,8,7,6]];

// for(let i = 0; i<arr.length;i++){
//   for(let j = 0; j<arr[i].length;j++){
//     process.stdout.write(`${arr[i][j]} `)
//   }
//   console.log();
// }

//------------------------------------------------------------------------------
//2D Nested Array
// const prompt = require("prompt-sync")();

// let size = Number(prompt("Enter Size : "));

// let arr = new Array(size);

// for(let i=0; i<arr.length; i++){
//   arr[i] = new Array(size);
// }

// for(let i = 0; i<arr.length; i++){
//   for(let j=0; j<arr.length; j++){
//     arr[i][j] = Number(prompt("Enter Array Value : "));
//   }
// }
// console.log("👇👇👇👇👇👇👇👇 Complete Array in Below");

// console.log(arr);

// for(let i=0; i<arr.length; i++){
//   for(let j=0;j<arr[i].length;j++){
//     process.stdout.write(`${arr[i][j]} `);
//   }
//   console.log(); 
// }
//-------------------------------------------------------------------------------------

// cross sum in Array
// let arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// let leftsum = 0, rightsum = 0;

// for(let i=0; i<arr.length;i++){
//   for(let j=0; j<arr[i].length; j++){
//     if(i==j) leftsum = leftsum+arr[i][j];
//     if(i+j == arr.length-1) rightsum = rightsum+arr[i][j];
//   }
// }

// console.log(leftsum);
// console.log(rightsum);
//------------------------------------------------------------------------------------


//String Topic Start 08/10/2025

// let s = 'Arshil_Siddiqui'

// console.log(s);

// console.log(s.slice(-7,-2));
// console.log(s.slice(2,7));

// #length => String Ki Length janne ke liye
// #slice(start,end); Kuch par alag karne ke liye or ye left or right chal skta hai exmaple right ke liye Negative value like (-5,1)
// #substring(start,end); similier to Slice but not use negative Index
// #substr(start,length); Extracts part of string with length
// #toUpperCase(); Convert to String in UpperCase
// #toLowerCase();  Convert to String in LowerCase
// #concat(); kisi do string ko jodne ke liye
// #trim(); White space ko remove karna both side se
// #indexOf(substring); return first index of substring
// #lastIndexOf(substring); Return last string of substring
// #includes(Substring); Checks if substring exist
// #startsWith(substring); Check is string starts with substring
// #endsWith(substring); Check is string ends with substring
// #replace(old,new); Replaces first occurrence of substring
// #replaceAll(old,new); Replace All
// #split(Separator); Split String into an Array
// #charAt(Index); Returns character at Index
// #charCodeAt(Index); Return Unicode value of Character

//--------------------------------------------------------------------------------------

//Print String in Every New Line
// let str = 'Arshil_Siddiqui'

// for(let i=0; i<str.length; i++){
//   console.log(str[i]);  
// }

/*
output is =>
A
r
s
h
i
l
_
S
i
d
d
i
q
u
i
*/

//issi ka reverse 
// let str = 'Arshil_Siddiqui'

// for(let i = str.length-1; i>=0; i--){
//   console.log(str[i]);  
// }

/*
output is =>
i
u
q
i
d
d
i
S
_
l
i
h
s
r
A
*/
//---------------------------------------------------------

// let str = 'Arshil'

// let reverse = ''

// // for(let i=str.length-1; i>=0; i--){
// for(let i=0; i<str.length; i++){
//   reverse += str.charAt(i);
//   console.log(reverse); 
// }
//--------------------------------------------------------

// let str = 'AbcDd'
// let final = ''
// for(let i=0; i<str.length; i++){
//   let ACII = str.charCodeAt(i);
//   if(ACII>=65 && ACII<=90){
//    final += String.fromCharCode(ACII + 32)
//   }
//   else {
//     final += String.fromCharCode(ACII-32);
//   }
// }

// console.log(final);
//--------------------------------------------------------
// let word = ['attention', 'Arshil','atankwadi', 'attractive', 'Sanjay', 'Logistics', 'attention'];

// let count = 0;
// for(let i=0; i<word.length;i++){
//   if(word[i].startsWith('at')){
//     count++
//   }
// }

// console.log('At se start hone : '+count);
// console.log('Without At start : '+`${word.length-count}`);
//---------------------------------------------------------

//use of split
// let sentences = 'Mera Nam Mr. Arshil Siddiqui hai'

// console.log(sentences.split(' '));

/*note jab split ka use karte hain to usse milne wali hai store hoti hai ek Array mein
output is => 
  [ 'Mera', 'Nam', 'Mr.', 'Arshil', 'Siddiqui', 'hai' ]
*/
//----------------------------------------------------------------------------------

// let str = 'arshil'

// let Properstr = str.charAt(0).toLocaleUpperCase() + str.slice(1);

// console.log(Properstr);

/*slice ka use karke ham start ke letter ko remove kar skte hain jaisa ki upar dikhaya gya hai
rule 1 - positive value lene se left se string ko kam karte hain
rule 2 - Negative value lene se right se string ko add leke chalta hain
*/

// let str = 'mera nam arshil siddiqui hai'

// let arr = str.split(' ');

// let final = ''
// for(let i=0; i<arr.length;i++){
// let last = arr[i].length-1;

//   final += arr[i][0].toUpperCase() 
//         + arr[i].substring(1,arr[i].length-1) 
//         + arr[i][last].toUpperCase() + " "
// }

// console.log(final);

//--------------------------------------------------------------------------------------------------------

//old Method
// let arr = [1 ,1 ,2 ,2 ,3, 5 ,4 ,5, 8 ,6 ,7 ,8 ];
// let obj = {};

// arr.forEach(function(val){
//     if(obj[val] === undefined){

//         obj[val] = 1;
//     }
//     else{
//         obj[val]++;
//     }
// })

// console.log(obj);

//------------------------------------------------------------------------------------------------------

// const prompt = require('prompt-sync')();
// let str = prompt('Enter Long String : ');

// let arr = new Array(123).fill(0);

// for(let i=0 ; i<str.length; i++){
//   let ascii = str.charCodeAt(i); //ye ascii value nikar rha hai ascii number me hota hain
//   arr[ascii] = arr[ascii] + 1;  
// }
// // console.log(arr);

// for(let i=0; i<arr.length; i++){
//   if(arr[i] >0) console.log(String.fromCharCode(i)+" => "+ arr[i]);
// }


//------------------------------------------------------------------------------------------------------
// modern method for how many time repeat any leter or number
// const prompt = require('prompt-sync')();
// let str = prompt('Enter Long String : ');

// let freq = {};
// for (let char of str) {
//   freq[char] = (freq[char] || 0) + 1;
// }
// console.log(freq);

//------------------------------------------------------------------------------------------------------

//AnaGram Algoridium

// const prompt = require('prompt-sync')()
// let str1 = prompt('Enter First Anagram : ');
// let str2 = prompt('Enter Second Anagram : ');

// let arr = new Array(123).fill(0);
// let isAnagram = true;

// if(str1.length != str2.length){
//     console.log("Both Scring Are not An AnaGram");    
// }
// else {
//     for(let i=0; i<str1.length; i++){
//         let ascii = str1.charCodeAt(i);
//         arr[ascii] =arr[ascii] + 1;

//     }
//     for(let i=0; i<str2.length; i++){
//         ascii = str2.charCodeAt(i);
//         arr[ascii] =arr[ascii] - 1;
//     }
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] != 0){
//             isAnagram = false;
//             break
//         }
//     }
//         if(isAnagram) console.log("Yes");
//         else console.log('No');
// }

//-------------------------------------------------------------
//set feature
// set.add value ko add karne ke liye
// set.delete(20) value ko delete karne ke liye
// set.has(100) value array mein find karne ke liye
// set.size
// let arr = new Set();

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(5)
// set.add(6)
// console.log(set);


// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// set.add(50);
// console.log(set);
// console.log(set.has(40));   // .has check karta hai uss value ko fir reply mein true/false deta hai

// for(let pagal of set){
//   process.stdout.write(pagal*2+ " ")
// }
// set.delete(50)
// console.log(set);
// console.log(set.size);

// console.log(set)

//---------------------------------------------------------------

// let str = 'The quick brown fox jumps ver the lazy dog'
// let arr = str.split(' ');

// let obj = new Array(122).fill(0);
// let isPanGram = true;
// let value = 0;
// for(let i=0; i<arr.length; i++){
//   let word = arr[i].toLocaleLowerCase();

//   for(let j=0; j<word.length; j++){
//     let ascii = word.charCodeAt(j);
//     obj[ascii] = obj[ascii] + 1;
    
//   }
// }
// for(let i=0; i<obj.length; i++){
//   if(obj[i]> 0){
//     value = value + i;
//     break
//   }
// }


// for(let i=value; i<=(value+25); i++){
//   if(obj[i]==0){
//     isPanGram = false;
//     break
//   }
// }

// if(isPanGram != false) console.log('Yes, PanGram');
// else console.log('No, PanGram');
//----------------------------------------------------------
// leetcode question No. 771
// let jewels = 'aA';
// let stones = 'aAbbbb';
// let set = new Set();
// for(let i=0; i<jewels.length; i++){
//   set.add(jewels.charAt(i));
// }

// let count = 0;
// for(let i=0; i<stones.length; i++){
//   if(set.has(stones.charAt(i))) count++;
// }
// console.log(count);
// --------------------------------------------------------------
//Happy Number user given value of n

//if n = 32
// the 3^2 + 2^2 =13 issi tarh chalte jana hai 

// const prompt = require('prompt-sync')()
// let n = Number(prompt('Enter Any Number : '))//if value is : 19


// var isHappy = function(n) {
//     let set = new Set();

//     while (true) {
//         let sum = 0;
//         while (n > 0) {
//             let rem = n % 10;
//             sum += rem * rem;
//             n = Math.floor(n / 10);
//         }
//         if (sum === 1) return true;
//         if (set.has(sum)) return false;
//         else set.add(sum);
//         n = sum; //
//     }
// };

// console.log(isHappy(n));
//-------------------------------------------------------------------
//Use of MAP.

// let map = new Map();

// map.set("Name", "Arshil"); // value is => Key & 2nd is Value
// map.set("Age", 26);
// console.log(map);

// map.set("Age", 25)
// console.log(map);

// map.delete("Age")
// console.log(map);

// console.log(map.has("Name")); //kisi value ko find karne ke liye

// console.log(map.get("Name"));

// for(let a of map.keys()){ //keys print karane ke liye
//   console.log(a);
// }

// for(let a of map.values()){ //Values print karane ke liye
//   console.log(a);
// }

// for(let a of map.entries()){
//   console.log(a);
// }

// for(let [a,b] of map){
//   console.log(a);
//   console.log(b);
  
// }

//-------------------------------------------------
//find how many number is repeat
// let arr = [1, 10, 2, 4, 2, 2, 6, 1, 1, 10];

// let map = new Map();

// for(let i=0; i<arr.length;i++){
//   if(map.has(arr[i])){
//     map.set(arr[i], map.get(arr[i])+1);
//   }
//   else map.set(arr[i], 1);
// }

// console.log(map);
//-----------------------------------------------
//how many time reapet each Word
// let str = "malayalam"

// let map = new Map();

// for(let i=0; i<str.length;i++){
//   if(map.has(str[i])){
//     map.set(str[i], map.get(str[i])+1);
//   }
//   else map.set(str[i], 1);
// }

// console.log(map);

//---------------------------------------------------

// sum of two variable (Two Sum)

// let arr = [7, 2, 5, 9, 1];
// target = 9;
// let num1, num2 = 0;
// for(let i=0; i<arr.length;i++){

//   for(let j=i+1; j<arr.length; j++){
//     if(arr[i]+ arr[j] == target)
//       [num1, num2] = [arr[i], arr[j]];
//     break
//   }
// }

// console.log(num1, num2);

//second Method of For sum two variable two sum
// let arr = [10,2,15, 7, 6];
// let target = 9;

// let Final = [-1,-1];

// let map = new Map();

// for(let i=0; i<arr.length; i++){
//   if(map.has(target - arr[i])){                       // 9 - 2 = 7
//     Final[0] = i;
//     Final[1] = map.get(target-arr[i]) 
//   }
//   else map.set(arr[i], i)  // 2 , 0
// }


// console.log(Final);

//-----------------------------------------------------------------------------------------
//what letter is first twice

// let str = "zabckshjdkfsjfhksfkjshlsdjkhfhjsdhfsdjfslkdjbfsjdofhkbsdjlkbfslkdjkbfskldjhbfslkdkhfbsodupfhbsoupdhksodhfhsjhfsjhkfjlskhfkljshflkjskhflkjsdhzaa"
// let map = new Map();

// for(let i=0; i<str.length; i++){
//   if(map.has(str[i])){
//     map.set(str[i], map.get(str[i])+1);
//     if(map.get(str[i]) == 2){
//       console.log(str[i]);
//     }
//     break;
//   }
//   else{
//     map.set(str[i], 1);
//   }
// }

// console.log(map);
//---------------------------------------------

//LeetCode Question No.2418 Sort The People

// let arr = ['Mr.','Arshil', 'Siddiqui'];
// let Uchayi = [180, 165, 170];


// let map = new Map();
// for(let i=0; i<arr.length; i++){
//   map.set(Uchayi[i], arr[i])
// }

// Uchayi.sort((a,b)=> b-a)

// let Answer = new Array(arr.length)
// for(let i=0; i<arr.length; i++){
//   Answer[i] = map.get(Uchayi[i]);
// }
// console.log(Answer);
//----------------------------------------------------------------
//use of & (and) Operator, Every 0,1 is called Bits
//Q.1 -       5&8

// & condition is => agar kisi ke sath Zero aya to Zero ho jayega
//   0  0   =  0
//   0  1   =  0
//   1  0   =  0
//   1  1   =  1


// let a = 5;          // binary number is 0101
// let b = 8;          // binary number is 1000
// let c = a&b;        //                 ------
// console.log(c);     // Answer is        0000 is binery is for 0

//output is => 0
//----------------------------------------------------------------
//use of & (or) Operator, Every 0,1 is called Bits
//Q.2 -       5&8

// | (Or) condition is => agar kisi ke sath one aaya to 1 ho jayega
//   0  0   =  0
//   0  1   =  1
//   1  0   =  1
//   1  1   =  1

// let a = 5;          // binary number is 0101
// let b = 8;          // binary number is 1000
// let c = a|b;        //                 ------
// console.log(c);     // Answer is        1101 is binery is for 13

//output is => 13
//-------------------------------------------------------------------
//use of ^ (Jaur) Operator, Every 0,1 is called Bits
//Q.3 -       5&8

// ^ (Jour) condition is => Same bits cancel ho jayegi
//   0  0   =  0
//   0  1   =  1
//   1  0   =  1
//   1  1   =  0

// let a = 5;          // binary number is 0101
// let b = 8;          // binary number is 1000
// let c = a^b;        //                 ------
// console.log(c);     // Answer is        1101 is binery is for 13

//output is => 13
//----------------------------------------------------------------------
//What will be the value of s, if n=127?

// let n = 127;
// let i=s=0;

// while(n>0){
//   let reminder = n%10;
//   let p = 8^i;
  
//   s = s+p*reminder;
//   n = Math.floor(n/10);

//   i++;
// }
// console.log(s);

//output is => 84


//------------------------------------------------------------------------
//use of >> (Right Shift) Operator, Every 0,1 is called Bits
//Q.4 -       5>>8

// >> (right Shift) condition is => if given 2 value ;ole 25>>2 then first value ka binary and shift karo 2 position right se uske baad jo bache uska binary nikalo

// let a = 25;          // binary number is 11001
// let b = 2;           // binary number is 0010
// let c = a>>b;        //                 ------
// console.log(c);     // Answer after shift 110 is binery is for 6

//output is => 6
//-----------------------------------------------------------------------
//use of << (left Shift) Operator, Every 0,1 is called Bits
//Q.5 -       25<<2

// << (left Shift) condition is => if given 2 value 25<<2 isme kya hai ki start se 2 blank position create ho jati or 25 ki jo binary hai wo start se apni position le leti hai jisse last mein 2 blank space reh jate hai to usme 0 0 fill karna hota hai.

// let a = 25;          // binary number is 11001
// let b = 2;           // binary number is 0010
// let c = a<<b;        //                 ------
// console.log(c);     // Answer after shift 1100100 is binery is for 100

//output is => 100
//-----------------------------------------------------------------------
//find odd or even number
// const prompt =require("prompt-sync")()

// let n = Number(prompt("Enter Any Number : "));

// if(n&1 == 1) console.log('Your Number Is Odd : '+n);

// else console.log('Your Number Is Even : '+n);

//---------------------------------------------------------
//power of Two
// const prompt = require('prompt-sync')()

// let n = Number(prompt('Enter Any Number : '))

// console.log((n&(n-1)) == 0? 'Power of 2' : 'No');

//----------------------------------------------------------

//Stack => Premitives => Number, String, Boolen, Null, Undefined, BigInt.

// ==> Function Call

// Stack Memory : LIFO Model (Last In First out)
// Push or Pop are Operation and Pick is the Position

// Calls Stack

// function greet(){
//   console.log('Good Morning! Arshil');
//   fun();
// }

// function fun(){
//   console.log('This is Fun location');
//   pagal();
// }

// function pagal(){
//   console.log('Jab Sari Duniya So jati hai After Party Ho jati hai'); 
// }

// greet();

//--------------------------------------------------------------------------
//make own loop this is called recursion (This is own reverse recursion Loop) 10 to 1

// const prompt = require('prompt-sync')();
// let n = Number(prompt("Please Enter Number : "));

// function abc(n){
//   if(n == 0) return
//   console.log(n + ' Hello, World');
//   abc(n - 1);
// }
// abc(n);
//-------------------------------------------------------------------------------------
//make own loop this is called recursion (This is own forword recursion Loop) 1 to 10

// const prompt = require('prompt-sync')();
// let n = Number(prompt("Please Enter Number : "));

// function abc(i, n){
//   if(i > n) return
//   console.log(i + ' Hello, World');
//   abc(i+1, n);
// }
// abc(1, n);

//-------------------------------------------------------------

//Fabonnaci Series
// const prompt = require('prompt-sync')()
// let n = Number(prompt('Enter Any Number : '))

// let first = 0;
// let second = 1;

// process.stdout.write(first + " "+ second + " ")

// for(let i=1; i<=(n-2); i++){
//     third = first + second;
//     process.stdout.write(third + " ");
//     [first, second] = [second, third]    
// }
//----------------------------------------------------
//factorial of N Numbers using recurstion
// const prompt = require('prompt-sync')();
// let n = Number(prompt('Enter Any Number : '));  //5
// let sum = 0;
// function abc(i,n){
//   if(i>n) return console.log(sum);
//   sum = sum + i;
//   abc(i+1,n);
// }
// abc(1,n);

//---------------------------------------------------------

// const prompt = require('prompt-sync')()
// let n = Number(prompt('Enter Any Number : '))

// let first = 0;
// let second = 1;
// let sum = first+second;
// process.stdout.write(first + " "+ second + " ")

// for(let i=1; i<=(n-2); i++){
//     third = first + second;    
//     sum += third ;
//     process.stdout.write(third + " ");
//     [first, second] = [second, third];
// }

// console.log(sum);

//-----------------------------------------------------const prompt = require('prompt-sync')()
// const prompt = require('prompt-sync')();
// let n = Number(prompt('Enter Any Number : '))

// let first = 0;
// let second = 1;
// let sum = first+second;
// process.stdout.write(first + " "+ second + " ")

// function abc(i, n){
//     if(i>n) return
// third = first + second;    
//     sum += third ;
//     process.stdout.write(third + " ");
//     [first, second] = [second, third];
//     abc(i+1, n)
//   }
//   abc(1, n)
//   console.log(sum);
  //------------------------------------------------------
// 0 1 1 2 3 Find number of n place in Fibonnaci series
// const prompt = require('prompt-sync')();
// let n = Number(prompt('Enter Any Value : '));
// console.log(abc(n));

// function abc(n){
//   if(n==0) return 0;
//   if(n==1) return 1;
//   return abc(n-1) + abc(n-2);
// }

//----------------------------------------------------------
//sum of each digit
// const prompt = require('prompt-sync')()
// let n = Number(prompt('Enter Any Number : '));  //648
// let sum = 0;
// function digit(n){
//   if(n == 0) return
//   reminder = n%10;
//   sum += reminder;  
//   digit(n = Math.floor(n/10));
// }
// digit(n);
//-----------------------------------------------------------
//reverse of digit using recursion
// const prompt = require('prompt-sync')()
// let n = Number(prompt('Enter Any Number : '));  //648
// let temp = 0;

// function digit(n){
//   if(n == 0) return console.log(temp);
  
//   let reminder = n%10;
//   temp = (temp*10) + reminder;
//   n = Math.floor(n/10);
//   digit(n);
// }
// digit(n);
//------------------------------------------------------------
// GCD using For Loop Method
//First Method
// let a = 20;
// let b = 32;

// for(let i=Math.min(a,b);i>=1; i--){
//   if( a%i == 0 && b%i == 0) return console.log(i)
// }

//Second Method using While Loop
// let a = 10, b = 100;

// while(a != b){
//   if(a>b) a = a-b;
//   else b = b-a;
// }
// console.log(a);

//Third Method using Recursion
// let a = 18;
// let b = 28;
// GCD(a,b)

// function GCD(a,b){
//   if(a == b) return console.log(a);
//   ;
//   if(a>b) return GCD(a-b, b)
//     return GCD(a, b-a)
// }

//Fourth Method using Recursion Ecludian Method

// function GCD(a,b){
//   if(b == 0) return console.log(a);
//   return GCD (b, a%b);
// }

// GCD(16,24);
//-------------------------------------------------------------------

// const prompt = require('prompt-sync')();
// let n = Number(prompt('Enter Any Number : '));
// checkprime(n);

// function checkprime(n){
//     let isPrime = new Array(n+1).fill(true);
  
//   for(let i=2; i*i<=n;i++){   //Math.floor(Math.sqrt(n)) iski jagah i*i=<n bhi rakh skte hain.
//     if(isPrime[i] == true){
//       for(let j =i*i; j<=n; j +=i){
//         isPrime[j] = false;
        
//       }
//       console.log(i);
//       }
//     }

//     for(let i=2; i<=isPrime.length; i++){
//       if(isPrime[i]) process.stdout.write(i+" ");      
//     }
// }

//-------------------------------------------------------------------------------
//short and merge Array
// let arr1 = [2,4,5];
// let arr2 = [1,4,7];
// let ans = new Array(arr1.length+arr2.length);

// let i=0, j=0, k=0;

// while(i<arr1.length && j<arr2.length){
//   if(arr1[i] < arr2[j]){
//     ans[k++] = arr1[i++]
//   }
//   else{
//     ans[k++] = arr2[j++]
//   }
// }

// while(i<arr1.length){
//   ans[k++] = arr1[i++]
// }

// while(j<arr2.length){
//   ans[k++] = arr2[j++]
// }
// console.log(ans);
//output is => [ 1, 2, 4, 4, 5, 7 ]
//---------------------------------
//Advance Short Array
// let arr = [1,0,1,2,0,2,1,1,2,0,2,1,0,2,1,0,2,2,0,1,0];

// let swap = function (arr, a, b){
//     [arr[a], arr[b]] = [arr[b], arr[a]]
// }
// let i=0, j=0, k=arr.length-1;
// while(i<=k){
//   if(arr[i] == 0){ swap ( arr, i++, j++);
//     // [arr[i], arr[j]] = [arr[j], arr[i]] // if im using Swap function this code make Dry
//     // i++;
//     // j++
//   }
//   else if(arr[i] == 2){ swap ( arr, i, k--);
//     // [arr[i], arr[k]] = [arr[k], arr[i]]  // if im using Swap function this code make Dry
//     // k--;
//   }
//   else i++
// }

// console.log(arr);

//output is => [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2]
//----------------------------------------------------------------------------------------------
//find Water Trapped Casecade

// let height = [4,2,0,1,5]
// let len = height.length-1;

// let left = new Array(len);
// let right = new Array(len);

// let maxleft = height[0]
// let maxright = height[len]

// for(let i=0; i<=len; i++){
//   left[i] = maxleft = Math.max(maxleft, height[i])
// }

// for(let i=len; i>=0; i--){
//   right[i] = maxright = Math.max(maxright, height[i])
// }

// let ans= 0;

// for(let i=0; i<=len; i++){
//  ans += Math.min(left[i], right[i]) - height[i];
// }
// console.log(ans);

//------------------------------------------------------------

let arr1 = [2,4,5]
let arr2 = [1,4,7]
let first =arr1.length;
let second =arr2.length;


let ans = new Array(first + second);

let i=0, j=0, k=0;

while(i<first && j<second){
  if(arr1[i] < arr2[j]){
    ans[k++] = arr1[i++]
  }
  else {
    ans[k++] = arr2[j++]
  }
}

while(i<first){
  ans[k++] =arr1[i++]
}

while(j<second){
  ans[k++] = arr2[j++]
}

console.log(ans);
