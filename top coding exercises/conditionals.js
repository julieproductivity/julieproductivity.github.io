//conditional 1

let season = 'winter'; //change bet. 'winter' and 'summer'
let response;

if (season == 'summer') {
response="So cool it's winter!"}
else if (season=='winter') {
response="It's winter!"
}

// Don't edit the code below here!

section.innerHTML = ' ';œ
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    
//----end conditionals 1


//conditionals 2
let response;
let score = 150 ;
let machineActive = true;

if (machineActive==true) {
   
    if (score<0||score>100) {
response="This is not possible, an error has occurred."
}

    else if (score>=0 &&score<=19) {
response="That was a terrible score - total fail!"
} 
    else if (score>=20 &&score<=39){
response="You know some things, but it\'s a pretty bad score. Needs improvement."
}
    else if (score>=40&&score<=69) {
response="You did a passable job, not bad!"
}
    else if (score>=70&&score<=89) {
response="That\'s a great score, you really know your stuff."
}
else if (score>=90&&score<=100) {
response="What an amazing score! Did you cheat? Are you for real?"
}
};

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    
// --- end conditionals 2

//conditionals 3
let response;
let score = 75;
let machineActive = true;

if(machineActive) {
	switch (true) {
    
        case (score<0||score>100):
response="This is not possible, an error has occurred."
break;

        case (score>=0 &&score<=19):
response="That was a terrible score - total fail!"
break;
   
        case (score>=20 &&score<=39):
response="You know some things, but it\'s a pretty bad score. Needs improvement."
break;
    
        case (score>=40&&score<=69):
response="You did a passable job, not bad!"
break;
   
        case (score>=70&&score<=89):
response="That\'s a great score, you really know your stuff."
break;

        case (score>=90&&score<=100):
response="What an amazing score! Did you cheat? Are you for real?"
break;

        default:
response="This is not possible, an error occurred.";
} 

}

else {
  response = 'The machine is turned off. Turn it on to process your score.';
};

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    
//--- end conditionals 3

// conditionals 4

let machineActive = true;
let pwd = 'cheese';
let machineResult;
let pwdResult;

if (machineActive) {

    switch (true) {

    case (pwd==='cheese'):
pwdResult='Successfully logged in'
break;

    default:
pwdResult='login attempt not successful';
}
}
else {
machineResult='Machine turned off.' };

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);
    
//---end conditionals 4



//conditionals

number = Number(prompt("enter a number"));

function numberChecker() {
	if(number>=10) {
		return true;
	} else if (number < 10) {
		return false;
	}
}


//-- direction math

const birthYear = 1948;
const currentYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const fullName=firstName+lastName;
const age=currentYear-birthYear;

const greeting='Hello! My name is ' + fullName + 'and I am ' + age + 'years old.';

console.log(greeting);