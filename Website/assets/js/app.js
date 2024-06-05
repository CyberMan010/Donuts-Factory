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
  
    for (let i = 0; i <= number; i++) {
      sum += i;
    }
  
    return sum;
  
  
  const userNumber = parseInt(prompt("Enter an integer: "));
  
  
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


