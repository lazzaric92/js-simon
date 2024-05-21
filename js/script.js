// || SELECTORS
const sectionEl = document.querySelector('main > section');
const sectionTitleEl = document.querySelector('main > section > h2');
const randomNumbersDivEl = document.querySelector('div#random-numbers');
const timerEl = document.querySelector('p#timer');
const timerSpanEl = document.querySelector('span#timer-span');
const userNumbersDivEl = document.querySelector('div#user-numbers');
const resultEl = document.querySelector('p#result');


// || VARIABLES
const randomNumbersArray = [];
let numbers = 5;
let timerTime = 30;
const userNumbersArray = [];
const correctUserNumbers = [];


// || INIT
getRandomIntNumbersGenerator(numbers, 0, 100, randomNumbersArray);
sectionEl.classList.remove('hidden');

setTimeout(function(){
    createArticles(randomNumbersArray, randomNumbersDivEl);
    timerEl.classList.remove('hidden');
    timerFunction(timerTime, timerSpanEl);
}, 1000);

setTimeout(function(){
    randomNumbersDivEl.classList.add('hidden');
    timerEl.classList.add('hidden');
}, (timerTime * 1000 + 1500))

setTimeout(function(){
    sectionTitleEl.innerHTML = 'Now type the numbers'
}, (timerTime * 1000 + 2000))


setTimeout(function(){
    userNumbersDivEl.classList.remove('hidden');
    getUserNumbers(numbers, userNumbersArray);
    compareArrays(userNumbersArray, randomNumbersArray, correctUserNumbers);
    sectionTitleEl.innerHTML = 'Let\'s see \.\.\.'
    randomNumbersDivEl.classList.remove('hidden');

    for (let i = 0; i < userNumbersArray.length; i++){
        const articleEl = document.createElement('article');
        const articleSpanEl = document.createElement('span');
        articleSpanEl.append(userNumbersArray[i]);
        articleEl.appendChild(articleSpanEl);
        
        if (correctUserNumbers.includes(userNumbersArray[i])){
            articleEl.classList.add('correct');
        } else {
            articleEl.classList.add('wrong');
        }

        userNumbersDivEl.appendChild(articleEl);
    }

    let correctNumbers = correctUserNumbers.length;
    let result;

    switch (correctNumbers){
        case 0:
            result = 'You trolling? Try again mate'
            break;
        case 3:
            result = 'Come on! Try again'
            break;
        case 4:
            result = 'You can do it!'
            break;
        case 5:
            result = 'YAY!!'
            break;
        default:
            result = 'Try again!'
    }

    resultEl.innerHTML = result;

}, (timerTime * 1000 + 3000))



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
function timerFunction(seconds, container){
    const timer = setInterval(function(){
        seconds--;
        container.innerHTML = seconds + ' s';
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
function compareArrays(arrayA, arrayB, correctNumbersArray){
    for(let index = 0; index < arrayA.length; index++){
        if(arrayB.includes(arrayA[index])){
            correctNumbersArray.push(arrayA[index]);
        }
    }
}

// --> function to create articles
function createArticles(numberArray, container){
    for (let i = 0; i < numberArray.length; i++){
        const articleEl = document.createElement('article');
        const articleSpanEl = document.createElement('span');
        articleSpanEl.append(numberArray[i]);
        articleEl.appendChild(articleSpanEl);
        container.appendChild(articleEl);
    }
}


// || MEMO
// <article><span class="hidden"></span></article>
// <article><span></span></article>

// <article class="wrong"><span></span></article>
// <article class="correct"><span></span></article>
