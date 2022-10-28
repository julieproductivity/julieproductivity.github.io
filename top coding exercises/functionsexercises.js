function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  //rewrite with ?
  function checkAge(age) {
    return (age>18) ? true : confirm('Did parent allow you?');
  }

  //rewrite with ||
  function checkAge(age) {
    return (age>18) || confirm ('Did your parent allow you?')
  }

  // Write a function min(a,b) which returns the least of two numbers a and b.
    // min(2, 5) == 2
   //  min(3, -1) == -1
  //  min(1, 1) == 1

  function showMin(a,b) {
    if (a>b) {
        return b;
    }
    return a;
  }
  
  // OR

  function showMin(a,b) {
    return (a>b) ? b : a;
  }

  //Write a function pow(x,n) that returns x in power n. pow(3, 2) = 3 * 3 = 9
  /// Or, in other words, multiplies x by itself n times pow(3, 3) = 3 * 3 * 3 = 27
 // and returns the result. pow(1, 100) = 1 * 1 * ...* 1 = 1
 function pow(x,n) {
    let x=prompt("x",1);
    let n=prompt("n",1);

    for(let )
}


// assignment
//Write a function called add7 that takes one number and returns that number + 7.
function add7 (a) {
  return a+7;
}

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply (a,b) {
  return a*b;
}

//Write a function called capitalize that takes a string and returns that string with only 
//the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
let getString=prompt("Enter a string:","").toLowerCase;
/**has to get the 0 item of the string and 0 letter of the string.0 and return the whole
 * into a string with the first letter capitalized**/
function capitalize (""){


  //pseudocode: need to find the first letter of the string, then transform this first letter to UPPERCASE
  //then return the entire string 
}

//Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"

let getString = prompt("Enter a word:","").toLowerCase();

function lastLetter ("") {
//pesudocode: we need to find te last letter of the last word of the string and return it 
}



// Build your own functions

displayMessage()



