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