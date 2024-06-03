let name = prompt("Please enter your Name");
        var gender = prompt("Please enter your gender");

        if (gender == 'male')
        {
            alert("Welcome, MR " + name);

        }
        else if (gender == 'female')
        {
            alert("Welcome, MS " + name);

        } else {
            alert("Welcome, " + name);
        }

let order = prompt("do you want to order Donut , Coffee , Icecream or Bakery?");
         
        
         if (order == 'Coffee', 'Donut', 'Icecream', 'Bakery')
            {
                
                alert("your " + order + " is getting prepared");
            }
            
         else {
                alert("Thank you for visiting our factory");
            }
console.log(name,order);