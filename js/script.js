// || SELECTORS
const randomNumbersSectionEl = document.querySelector('#random-numbers');
const timerEl = document.querySelector('#random-numbers > p');
const timerSpanEl = document.querySelector('span#timer');
const userNumbersSectionEl = document.querySelector('#user-numbers');
const resultEl = document.querySelector('p#result');


// || VARIABLES
const randomNumbersArray = [];
let timerTime = 30;
const userNumbersArray = [];
const correctUserNumbers = [];
const wrongUserNumbers = [];


getRandomIntNumbersGenerator(5, 0, 100, randomNumbersArray);
/*
setTimeout(function(){
    console.log(randomNumbersArray.join(' - '));
    timerFunction(timerTime);
}, 4000);

setTimeout(function(){
    getUserNumbers(5, userNumbersArray);
    console.log(userNumbersArray);
    compareArrays(userNumbersArray, randomNumbersArray, correctUserNumbers, wrongUserNumbers);

}, (timerTime * 1000 + 7000))
*/


// || FUNCTIONS

// --> function to generate an array of unique random int numbers
/**
 * Function to generate an array of random integer numbers
 * @param {*} numbersToGenerate How many numbers the array must contain
 * @param {*} min Math.random interval min value, included
 * @param {*} max Math.random interval max value, included
 * @param {*} randomIntNumbersArray Container array
 */
function getRandomIntNumbersGenerator(numbersToGenerate, min, max, randomIntNumbersArray){
    let index = 1;
    while (randomIntNumbersArray.length < numbersToGenerate){
        const uniqueRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (!randomIntNumbersArray.includes(uniqueRandomNumber)){
            randomIntNumbersArray.push(uniqueRandomNumber);
        }
        index++;
    }
}

// --> timer function
function timerFunction(seconds){
    const timer = setInterval(function(){
        seconds--;
        console.log(seconds);
        if(seconds <= 0){
            clearInterval(timer);
        }
    }, 1000)
}

// --> function to ask the user for numbers
/**
 * Function to ask the user for numbers via prompt
 * @param {*} numbersToAsk How many numbers the user must type
 * @param {*} numbersArray Container array
 */
function getUserNumbers(numbersToAsk, numbersArray){
    let index = 0;
    while (index < numbersToAsk){
        let userNumber = Number.parseInt(prompt('Type a number') ,10);
        while (userNumber < 0 || userNumber > 100 || Number.isNaN(userNumber)){
            userNumber = Number.parseInt(prompt('Type a number') ,10);
        }
        numbersArray.push(userNumber);
        index++;
    }
}

// --> function to compare arrays
function compareArrays(arrayA, arrayB, correctNumbersArray, wrongNumbersArray){
    for(let index = 0; index < arrayA.length; index++){
        if(arrayB.includes(arrayA[index])){
            correctNumbersArray.push(arrayA[index]);
        } else {
            wrongNumbersArray.push(arrayA[index]);
        }
    }

    console.log(correctNumbersArray.join(' - '), 'Correct numbers: ' + correctNumbersArray.length);

    console.log(wrongNumbersArray.join(' - '), 'Wrong numbers: ' + wrongNumbersArray.length);
}


// || MEMO
// <article><span class="hidden"></span></article>
// <article><span></span></article>

// <article class="wrong"><span></span></article>
// <article class="correct"><span></span></article>

// La prossima volta andrà meglio!