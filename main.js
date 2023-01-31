const userName = 'River'; // Change this variable to reflect any name you want
console.log(`Hello, ${userName}!`); //Ive used string interpolation here to log anyname that is inputed into the const userName variable
const userQuestion = 'Does this 8 ball really work?' //Add your question for the ball here! What does fate have in store for you?
console.log(`${userName} has asked the magic 8 ball the following question! ${userQuestion}!`); //Again ive used string interpolation to take the inputed data into userName and userQuestion show up here
//These are the introductory statements above. Below is going to be the code that will actually make the 8 ball work

let randomNumber = Math.floor(Math.random() * 8); // Here is where we will get our random number, math.random will pick it and the * 8 will only allow numbers going from 0-8, math.floor just rounds it down to whole numbers for us
let eightBall = randomNumber //We have assigned the 8 ball to random number here

if (eightBall === 0) {
    console.log('It is certain');
} else if (eightBall === 1) {
    console.log('It is decidedly so');
} else if (eightBall === 2) {
    console.log('Reply hazy try again');
} else if (eightBall === 3) {
    console.log('Cannot predict now');
} else if (eightBall === 4) {
    console.log('Do not count on it');
} else if (eightBall === 5) {
    console.log('My sources say no');
} else if (eightBall === 6) {
    console.log('Outlook not so good');
} else {
    (eightBall === 7)
    console.log('Signs point to yes');
}

console.log(eightBall);
//The if else statement takes the random inputs and logs a response based on the 0-7 numbers. The console.log of the eightBall variable will display the results of the randomnumber and phrase together
