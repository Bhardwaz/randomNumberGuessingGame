// Knowing Level that user selected
let selectedLevel = 'Easy';
const dropdownLevels = document.querySelector('#chooseLevel');
dropdownLevels.addEventListener('change', getLevel)
function getLevel(){
selectedLevel = dropdownLevels.value;
switchingLevel();
}

// some constant for levels
const easyLevel = '0 to 20';
const midLevel = '0 to 60';
const hardLevel = '0 to 100';
// Attempts basis on level 
let easyAttempt = 10;
let midAttempt = 15;
let hardAttempt = 25;
// Getting mandatory elements
const takingGuess = Number(document.querySelector('.takingGuess').textContent);
const takingBtn = document.querySelector('.checkBtn');
const message = document.querySelector('.message');

// utility functions
function numberRange(levelRange){
    document.querySelector('.levelInfo span').textContent = levelRange;
}
// for getting attempt basis on levels
function getAttempt(attempts){
    document.querySelector('.totalAttempt span').textContent = attempts;
}
// displaying the message


// checking the Number 
function validatingSecretNumber(secretEasyNumber){
if (secretEasyNumber !== takingGuess) {
    if(easyAttempt > 1){
     message.textContent = takingGuess > secretEasyNumber ? 'Number is too High !' : ' Number is too low!';
     console.log(easyAttempt);
    }

} else {
    
}
}

// switching the levels
const switchingLevel = () => {
    switch(selectedLevel){

    case 'Easy':
    // in easy level guess is between 0 to 20
    const secretEasyNumber = Math.floor(Math.random()*20) + 1  
    numberRange(easyLevel);
    getAttempt(easyAttempt);
    takingBtn.addEventListener('click', validatingSecretNumber(secretEasyNumber));
    

    break;

    case 'Medium':
    //in medium the guess is between 0 to 60 
    const secretMediumNumber = Math.floor(Math.random()*60) + 1  
    numberRange(midLevel);
    getAttempt(midAttempt);
    break;

    case 'Hard':
    // in hard the guess is between 0 to 100
    const secretHardNumber = Math.floor(Math.random()*100) + 1    
    numberRange(hardLevel);
    getAttempt(hardAttempt);
    break;
    }
}




