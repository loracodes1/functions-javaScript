// A FUNCTION--a section pof reusable code
//--Declare code once, use it whenever you want
//Call the function to execute the code

function happyBirthday(userName , age){
    console.log('Happy Birthday to you!');
    console.log('Happy Birthday to you!');
    console.log(`Happy Birthday dear ${userName}!`);
    console.log(`Your age is ${age} years old!`);
}
happyBirthday()//to execute the code within the function, we have to call the function by its name
happyBirthday() //execute it the second time and as many times as you want
happyBirthday("Loracodes", 37) 
happyBirthday("Spongebob",20)
//the order in which you write the parameter matters happyBirthday(userName,age) isnt the same as happyBirthday(age,userName)


//ADDITION FUNCTION
function add(x,y){
    let result=x+y
    return result;
}
let answer =add(2, 3)
console.log(answer)

function multiply(x,y){
    return x*y;
}
console.log(multiply(2,3))

function subtraction(x,y){
    return y-x;
}
console.log(subtraction(2,3))

function isEven(number){
    if (number %2 ===0){
        return true;
    }
    else{
        return false;
    }

}
console.log(isEven(10)) //true
console.log(isEven(11)) //false

//TERNARY OPERATOR
function isEvenNumber(num){
    return num %2 ===0 ? true: false
}
console.log(isEvenNumber(21)) //will return false


//checking the validity of an email
function isEmailValid(email){
    if (email.includes('@')){
        return true
    }
    else {
        return false
    }
}
console.log(isEmailValid('bahatiflo@gmail.com'))
console.log(isEmailValid('bahatiflogmail.com'))


//TYPES OF FUNCTIONS
//1.NAMED FUNCTION WITH MULTIPLE PARAMETERS
function sum(a,b){
    return a+b
}

//2.
