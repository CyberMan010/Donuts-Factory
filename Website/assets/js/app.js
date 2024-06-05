// let name = prompt("enter your name")
// let userGender;

// while (userGender !== "male" && userGender !== "female") {
//   userGender = prompt("Enter your gender:").toLowerCase();
        
// }
// if(userGender == 'male')
//     alert("Welcome Mr " + name);
// else
//  alert("Welcome Ms " + name)

// Q7

// for (let i = 0; i <= 5; i++) {
//     alert(i);
//   }

// Q8

// let message = " ";
// for (let i = 0; i <= 5; i++) {
//   message += i ; 
// }

// alert(message);

// Q9

// let message = " ";
// for (let i = 0; i <= 5; i++) {
//   message += i ; 
// }

// alert(message);

// Q9

// let message = " ";

// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) {
    
//     message += i + " ";
//   }
// }
// alert(message)

// Q10

// let number;

// do {
//   number = parseInt(prompt("Enter a number between 0 and 100 (inclusive):"));

//   if (isNaN(number) || number < 0 || number > 100) {
//     alert("Invalid number. Please enter a number between 0 and 100.");
//   }
// } while (isNaN(number) || number < 0 || number > 100);

// alert("You entered: " + number);

// Q11


    let sum = 0;
  
    // Iterate from 0 to the entered number (inclusive) and add each number to the sum
    for (let i = 0; i <= number; i++) {
      sum += i;
    }
  
    return sum;
  
  
  const userNumber = parseInt(prompt("Enter an integer: "));
  
  // Check if the input is a valid number (not NaN)
  if (!isNaN(userNumber)) {
    const sum = calculateSum(userNumber);
    alert("The sum of integers from 0 to " + userNumber + " is: " + sum);
  } else {
    alert("Invalid input. Please enter a valid integer.");
  }


// let name = prompt("enter your name")
// let userGender;

// while (userGender !== "male" && userGender !== "female") {
//   userGender = prompt("Enter your gender:").toLowerCase();
        
// }
// if(userGender == 'male')
//     alert("Welcome Mr " + name);
// else
//  alert("Welcome Ms " + name)
// console.log(userGender + name)

// let userInfo = [];

// function askQuestion(question) {
//   const answer = prompt(question);
//   return answer;
// }

// const userName = askQuestion("Enter your username: ");
// const gender = userGender;
// const orderType = askQuestion("What type of order do you want (e.g., pickup, delivery): ").toLowerCase();
// const orderName = askQuestion("Enter the name of your order: ");

// userInfo.push(userName, gender, orderType, orderName);

// console.log("order details:");

// for (let i = 0; i < userInfo.length; i++) {
//   console.log(`${i + 1}. ${userInfo[i]}`);
// }

// let order = prompt("do you want to order Donut , Coffee , Icecream or Bakery?");
         
        
//          if (order == 'Coffee', 'Donut', 'Icecream', 'Bakery')
//             {
                
//                 alert("your " + order + " is getting prepared");
//             }
            
//          else {
//                 alert("Thank you for visiting our factory");
//             }
// let details = [name, userGender, order, "Bakery"]

// console.log(details);

// Q1

// console.log(-5*3);
// console.log( "JavaScript" + 50);
// console.log( 17 % 5 );
// console.log( 5 % 17);
// console.log( 5/10);
// console.log( (4 === '4'));
// console.log( (4 != 5) );
// console.log( (7 <= 8));
// console.log( "Hello" + 5);
// let x = 3
// console.log(  Math.ceil(x) - Math.floor(x) );
// console.log(Math.pow(x,2));
// var y = prompt("enter number");
// alert(y);

// Q2

// let y = prompt("enter the first number")
// let x = prompt("enter the second number")
//     if(x >= y){
//         console.log(x)
    
//     }
//     else{
//             console.log(y)
//     }    

// Q3

// let max  = Math.max(8, 5);
// console.log("the largest number is ", max);

// let y = prompt("enter the evalu")
// let x = prompt("enter the second evalu")

// let sum = (parseInt(x,10) + parseInt(y,10))
// console.log(sum)

// Q6

// let number = prompt("enter number to see ")
// switch(number){
//     case 1:
//         console.log("1")
//     case 2:
//         console.log("2")
//     case 3:
//         console.log("3")
//     case 4:
//         console.log("4")
//     case 5:
//         console.log("5")
//     case 6:
//         console.log("6")
//     case 7:
//         console.log("7")
//     case 8:
//         console.log("8")
//     case 9:
//         console.log("9")
//     default:
//         console.log("PLEASE TRY AGAIN")
// }

