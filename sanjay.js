// let arr = [0,0,0,0,0]

// let a = arr.map(function(value){
//     return 12;
// })

// //Blank arr ke liye 



// let arrr = [1,2,3,4,5]

// let b = arrr.forEach(function(value){
//     console.log(value*2);
// })


// let arr = [1,2,3,4]

// let a= arr.filter(function(value){
//     return value==='4';
// })

// console.log(a);


// var arr = [1,2,3,4,5,1,2,1,2,3,1,2,5,3,6,5,4]
// var ans = [...new Set(arr)];

// console.log(ans);


// var arr = [1,2,3,4,5,1,2,1,2,3,1,2,5,3,6,5,4]
// var ans = [...new Set(arr)];  
// ans.pop()
// // console.log(ans);
// console.log(arr)


// let arr = [1,7,8,6,7,6,7,32,7,2,32,87,87,684,5,654,8,4,665,654,68465,98,986];

// let arr1 = [...new Set(arr)];

// let arr2 = arr1.sort(function(a,b){
//     return b-a;
// })


// console.log(arr2[1]);

//------------------------------------------------------------------

//second method using fat function
// let arr = [1,7,8,6,7,6,7,32,7,2,32,87,87,684,5,654,8,4,665,654,68465,98,986];

// let arr1 = [...new Set(arr)];

// console.log(arr1.sort((a,b) => b-a)[1]);

//

// let arr = ["ram","shyam","vivek","sanjay","shivam"];

// let obj = [];

// for(let i= arr.length-1; i>=0; i--){
//     newarr.push(arr[i]);
// }

// console.log(obj);

//-------------------------------------------
// Find Duplicate value

// Let arr = [1,2,3,1,3,3,5,1,8,5,4,9,5,3,4,7,8,9,5,8,4,8];

// Let obj={};

// arr.forEach(function(value){
//     obj[value] === undefined ? obj[value]=1:obj[value]++;
// });

// console.log(obj);


// let arr = ["ram","shyam","vivek","sanjay","shivam"];

// let obj = [];

// for(let i= arr.length-1; i>=0; i--){
//     obj.push(arr[i]);
// }

// console.log(obj);




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

// callback fuction 
// function abc (fn){
//     setTimeout(fn , 5000);
// }

// abc(function(){
//     console.log("Hello World");
    
// })




//----------------------------------------------------------

// function abc(fn, limit){
//     let count = 0;

//     return function(){
        // if(count < limit){
        //     count++;
        //     fn();
        // }
        // else{
        //     // alert("You reach maximum limit");
        //     // confirm("You reach maximum limit");
        //    prompt("You reach maximum limit");
        // }
//        count<limit ? (count++ , fn()) : prompt("You reach maximum limit");
//        // Ternary Operator ka use
//     }
// }

// abc(()=>console.log("Welcome Back Mr. Arshil"),3)();

// abc(function(){
//     console.log("Welcome Back Mr. Arshil");
    
// },3);

//==========================================================================


// function abc(fn){
//     let check = false;
//     return function(){
//         if(!check){
//             check = true;
//             fn();
//         }
//     }
// }

// let a = abc(function(){
//     console.log("Hello")
// });

// a();

//==========================================================================
// Run a function after 2 sec and stop

// function abc(fn, delay){

//     return function(){
//         setTimeout(fn, delay);
//     }
// }

// let a = abc(function(){
//     console.log("Welcome Back Mr.Arshi")
// },2000);

// a();

//============================================================
// time condition - Once the code run it will run again after 2 sec 
// function abc( fn , delay){
//         let lasttime = 0;
//     return function(){
//         let current = Date.now();
//         if(current-lasttime >= delay){
//             lasttime = current;
//             fn();
//         }
//         else{console.log("Abhi time " + `${delay/1000 - lasttime}` + " Second se kam hai" );}
//     }
// }

// let a = abc(function(){
//     console.log("sanjay");
// },5000);

// a();

//============================================================
// OTP Generate

// var genotp = Math.floor(Math.random()*9000+1000);

// console.log(genotp);

// var otp =Number(prompt("please enter otp"));

// function abc(gotp){
   
//     return function(){
//         if(otp===gotp){
//             console.log("Matched");  
//         }
//         else{
//             console.log("Not Matched");
//         }
//     }
// }

// abc(genotp)();

//======================================

// let a = 10

// let b = ++a;

// // let b = ++a;

// console.log(a);
// console.log(b);

//======================================

// let year = Number(prompt("Enter Year"));


// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0)console.log("Leap Year");
//         else console.log("Not leap Year");
//     }
//     else{
//     console.log("leap Year1");
//     }
// }
// else{
//     console.log("Not leap Year");
    
// }
// //======================================

// Discount according to price

// let amt = Number(prompt("Enter Amount"));

// if(amt >0 && amt<=5000){
//     console.log("No discount");
// }
// else if(amt >=5001 && amt<=7000){
//     console.log((amt*5)/100);
// }
// else if(amt >=7001 && amt<=9000){
//         console.log((amt*10)/100);
// }
// else if(amt >9000){
//         console.log((amt*20)/100);
// }
// else {
//     console.log("Bhadve sale");
// }

// ==============================================

// let a = 10;
// let b = 20;

// if (a>b){
//     console.log("A is Greater Then B");
// }
// else{
//     console.log("B is Greater Then A");
// }

// ==================================================

// let a = Number(prompt("How many time Print I Love You"));

// for(let i = 1; i<=a; i++){
//     console.log("ILU "+i);
// }
// ==================================================

// let a = Number(prompt("Enter Number"));
// for(let i = 1 ; i<=10; i++){
//    let table =  a*i;
//     console.log(a + " * "+i+" = "+table);
// }
//==================================================

// let a = Number(prompt("Enter Number"));
// let  sum = 0;

// for(let i = 1 ; i<=a; i++){
//     sum = sum + i;
// } 

//   console.log(sum);

//==================================================

// let a = Number(prompt("Enter Number"))

// if(a%2==0){
//   console.log(a + " Even");
// }
// else{
//   console.log(a + " Odd");
// }

//==================================================
//Find the fector of any natural number

// let a = Number(prompt("Enter Number"))

// for(let i=1;i<=a;i++){
//   if(a%i==0) console.log(i);
// }



//==================================================
//Find the Primenumber

// let a = Number(prompt("Enter Number"))
// let isprime = true;

// for(let i=2;i<a;i++){
//   if(a%i==0){
//     isprime = false
//     break;
//   }

// }

// if(isprime)console.log("Prime Number");
//   else console.log("Not a prime number");

//-------------------------------------------------

let n  = 10;

for (let i= 1; i<=i; i++){
  console.log(n);
  
}
     