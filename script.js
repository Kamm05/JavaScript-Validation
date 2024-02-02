/* 
TRIM 
CHARAT 
SLICE 
ForEACH


let myName ="          KAM     ";
console.log(myName.trim());

let fruit = "Apple";
console.log(fruit.charAt(2));

console.log(fruit.slice(1));



let sum1 = 0
const number=[1,2,3,4,5]
number.forEach(sum)
console.log(sum1)
function sum(n){
    return sum1+= n;
}

 */

// const { log } = require("console");





const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


//error message function
function errorMsg(input,msg){
    const form_control =input.parentElement;
   // console.log(form_control);
   form_control.className ="form-control error";
   const small =form_control.querySelector("small");
  // console.log(small);
  small.innerText = msg;
}

// success function
function successMsg(input){
    const form_control =input.parentElement;
    form_control.className ="form-control success";
}


 // email function
 function emailCheck(input){
   const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if(re.test(input.value.trim())){
    successMsg(input);
  }
    else{
        errorMsg(input, "Email is not valid");
    }
  }

 
// function to validate all fields
function validateAll(inputArr){
    inputArr.forEach(function (input) {
      //  console.log(input);

      // error message for all input fields

      if(input.value.trim()==""){
        errorMsg(input,`${ upperCaseLetter(input)} is Required` )
      } else{
       successMsg(input);
      }
    });
}

function upperCaseLetter(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check length

function checkLength(input,min,max){
    if(input.value.length<min){
        errorMsg(input,`${upperCaseLetter(input)} must be atleat ${min} characters`);
    } else if(input.value.length>max){
        errorMsg(input,`${upperCaseLetter(input)} must be atleat ${max} characters`);
    } else{successMsg(input);
    }
}

// PAssword Match

function checkPassword(password1,password2){
    if(password1.value !== password2.value){
        errorMsg(password2,"Passwords do not Match");
    }
}
// event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

// function to validate all fields
validateAll([username, email, password, cpassword]);
checkLength(username,4,20);
checkLength(password,4,20);
    emailCheck(email);
    checkPassword(password,cpassword);
});
