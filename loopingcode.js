// draw 100 random circles
const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
})

function random(number) { //returns a whole number bet. 0 and x-1
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  /// -- code that draw a 100 circles
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

btn.addEventListener('click',draw);

// for...of loop
onst cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {// 1. given the array [cats], get the first item in the collection
  console.log(cat);      // 2. assign it to the variable (cat) and then run the code between the {}
                         // 3. get the next item, repeat 2. until you've reach the end of [cats]
}

// --- map() and filter() ---

//-- map(): to do something to each item in a collection and create a new collction containing the changed items
function toUpper(string) {
    return string.toUpperCase(); // put every items into uppercase
  }
  
  const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
  const upperCats = cats.map(toUpper);//cats.map()=function; map() calls the function once for each item
                                    // of [cats]. Put return values into new array [upperCats]; and return
                                    // the new array [upperCats] which with function toUpper = convert item to uppercase
  
  console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

  //--filter(): to test each item on a collection, and create a new collection containing only items that match:
  function lCat(cat) {
    return cat.startsWith('L'); // match every items which start with letter "L"
  }
  
  const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
  const filtered = cats.filter(lCat); //return a boolean: if true; item is included in the new array [filtered]

  console.log(filtered);
  // [ "Leopard", "Lion" ]


  // --- for loop syntax ---
  for (initializer; condition; final-expression) {
    // code to run
  }

  // -- initializer: a variable set to a number, which is increment to count the number of times the
  //                    loop has run = counter variable
  //-- condition: defines when the loop should stop; generally an expression featuring a comparison operator,
  //                a test to see if the exit condition has been met
  //-- final-expression: alwats run each time the loop has gone through a full iteration. It usually serves 
  //                    to increment/decrement the counter variable, to bring it closer to the point
  //                       where the condition is no longer true.


// -- calculating squares
const results = document.querySelector('#results');

function calculate() {
  for (let i = 1; i < 10; i++) {
        // let i=1: the counter variable i starts at 1, let coz reassigning it each time we iterate
        // i<10, keep run as long as i is smaller than 10
        // i++: add +1 to i at each iteration

    const newResult = `${i} x ${i} = ${i * i}`;//calculate the square of the current i
    results.textContent += `${newResult}\n`; // \n: the next string starts on a new line
  }
  results.textContent += '\nFinished!'; // when i = 10: loop stops and move to the next bit of code below 
  //                                        and print Finished!
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');

//-- looping through arrays
//written in for..of loop:
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);
  }

  //written in for loop:
  const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
            //   i=0        i=1         i=2      i=3       i=4      i=cats.length
for (let i = 0; i < cats.length; i++) {// i=0(counting array always from 0): stops when i = cats.length
  console.log(cats[i]);         // i is used to access each item of the array
            //      usually best to use for...of loops
}

// 
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  para.textContent = 'Output: ';
  const num = input.value;
  input.value = '';
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});

// launch a countdown for loop

let output = document.querySelector('.output');
output.innerHTML = '';

for (let i=10; i >= 0; i-- ) {
    const para = document.createElement('p');//create a new paragraph
    output.appendChild(para); // appends the paragraph to the output <div>
    if (i===10) {
        console.log(para.textContent ="Countdown 10"); // text inside the p=whaterer you put 
                                                //      on the right-hand side 
    }
    else if (i===0) {
        console.log(para.textContent ="Blast off!");
    }
    else {
        console.log(para.textContent =`${i}`);
    }
}

//--- while loop:
const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}

// filling in a guest list:

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here for..of loop 
for (const name of people) {
    if (name==='Phil'||name==='Lola') {
        refused.textContent += `${namei} , `;
    }
    else {
        admitted.textContent += `${name} ,`;
    }
}
// refused.textContent += ;
// admitted.textContent += ;

//

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here for loop 
==
// refused.textContent += ;
// admitted.textContent += ;



// loops 1


