const randomNumbersArray = [];
let timerTime = 30;
const showNumbers = randomNumbersArray.join(' - ');
randomIntNumbersGenerator(5, 0, 100, randomNumbersArray);

setTimeout(showNumbers, 5000);
setTimeout(timerFunction, 6000, timerTime);



// --> function to generate an array of unique random int numbers
/**
 * Function to generate an array of random integer numbers
 * @param {*} numbersToGenerate How many numbers the array must contain
 * @param {*} min Math.random interval min value, included
 * @param {*} max Math.random interval max value, included
 * @param {*} randomIntNumbersArray Container array
 */
function randomIntNumbersGenerator(numbersToGenerate, min, max, randomIntNumbersArray){
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

