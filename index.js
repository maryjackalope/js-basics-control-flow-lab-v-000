// Write your code in this file!
// if < 400, free "This one is on me!"
// if >2000, $30
// else >2500, not allowable


function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
    if (someValue < 400) {
    return "This one is on me!";
    }
 
   else if (someValue > 2000 && someValue <2500){
     return "I will gladly take your thirty bucks."
   }
   
   else if (someValue > 2500){
     return "No can do."
   }
}

// ternary = condition ? expression1 : expression2;


function ternaryCheckCity(city) {
  // city = 'NYC' ? return "Ok, sounds good." : return "No go.";
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  switch(tip){
    case 'generous':
        return "Thank you so much."
        break;
    case 'not as generous':
        return "Thank you."
        break;
    default:
        return "Bye."
        break;
  }
}






