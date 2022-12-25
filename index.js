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
const takingBtn = document.querySelector('.checkBtn');
const message = document.querySelector('.message');
const restart = document.querySelector('.restartBtnBox .restart');

// Restarting Functionality
restart.addEventListener('click',()=>{
    window.location.reload();
})
// utility functions
function numberRange(levelRange){
    document.querySelector('.levelInfo span').textContent = levelRange;
}
// for getting attempt basis on levels
function getAttempt(attempts){
    document.querySelector('.totalAttempt span').textContent = attempts;
}


// switching the levels
const switchingLevel = () => {
    switch(selectedLevel){

    case 'Easy':
    // in easy level guess is between 0 to 20
    const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
    numberRange(easyLevel);
    getAttempt(easyAttempt);
    takingBtn.addEventListener('click', () => {
        const takingGuess = Number(document.querySelector('.takingGuess').value);

        if(secretEasyNumber === takingGuess){
        if(easyAttempt > 1){
        message.textContent = '🎉 You Won the Game !';
        document.querySelector('.randomnumber').textContent = secretEasyNumber ;
        winningCelebration();
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    else{
        message.textContent = '😢 You failed !'
        easyAttempt = 0;
        getAttempt(easyAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }
       else if(secretEasyNumber > takingGuess){
        if(easyAttempt > 1){
        message.textContent = '📈 Guess a Larger Number !';
        easyAttempt = easyAttempt - 1;
        getAttempt(easyAttempt)
    }
    else{
        message.textContent = "😢 You failed!";
        easyAttempt = 0;
        getAttempt(easyAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }   
    else if(secretEasyNumber < takingGuess){
        if(easyAttempt > 1){
        message.textContent = '📉 Guess a Lower Number !';
        easyAttempt = easyAttempt - 1;
        getAttempt(easyAttempt) 
    }
    else{
        message.textContent = "😢 You failed!";
        easyAttempt = 0;  
        getAttempt(easyAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }
    }
    );
    break;

    case 'Medium':
    //in medium the guess is between 0 to 60 
    const secretMediumNumber = Math.floor(Math.random()*60) + 1  
    numberRange(midLevel);
    getAttempt(midAttempt);
    takingBtn.addEventListener('click', () => {
        const takingGuess = Number(document.querySelector('.takingGuess').value);

        if(secretMediumNumber === takingGuess){
        if(midAttempt > 1){
        message.textContent = '🎉 You Won the Game !';
        document.querySelector('.randomnumber').textContent = secretMediumNumber ;
        winningCelebration();
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    else{
        message.textContent = '😢 You failed !'
        midAttempt = 0;
        getAttempt(midAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }
       else if(secretMediumNumber > takingGuess){
        if(midAttempt > 1){
        message.textContent = '📈 Guess a Larger Number !';
        midAttempt = midAttempt - 1;
        getAttempt(midAttempt)
    }
    else{
        message.textContent = "😢 You failed!";
        midAttempt = 0;
        getAttempt(midAttempt)
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }   
    else if(secretMediumNumber < takingGuess){
        if(midAttempt > 1){
        message.textContent = '📉 Guess a Lower Number !';
        midAttempt = midAttempt - 1;
        getAttempt(midAttempt) 
    }
    else{
        message.textContent = "😢 You failed!";
        midAttempt = 0; 
        getAttempt(midAttempt) 
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }
    }
    );
    break;

    case 'Hard':
    // in hard the guess is between 0 to 100
    const secretHardNumber = Math.floor(Math.random()*100) + 1    
    numberRange(hardLevel);
    getAttempt(hardAttempt);
    takingBtn.addEventListener('click', () => {
        const takingGuess = Number(document.querySelector('.takingGuess').value);

        if(secretHardNumber === takingGuess){
        if(hardAttempt > 1){
        message.textContent = '🎉 You Won the Game !';
        document.querySelector('.randomnumber').textContent = secretHardNumber ;
        winningCelebration();
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    else{
        message.textContent = '😢 You failed !'
        hardAttempt = 0;
        getAttempt(hardAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }
       else if(secretHardNumber > takingGuess){
        if(hardAttempt > 1){
        message.textContent = '📈 Guess a larger Number !';
        hardAttempt = hardAttempt - 1;
        getAttempt(hardAttempt)
    }
    else{
        message.textContent = "😢 You failed!";
        hardAttempt = 0;
        getAttempt(hardAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }   
    else if(secretHardNumber < takingGuess){
        if(hardAttempt > 1){
        message.textContent = '📉 Guess a Lower Number !';
        hardAttempt = hardAttempt - 1;
        getAttempt(hardAttempt) 
    }
    else{
        message.textContent = "😢 You failed!";
        hardAttempt = 0;  
        getAttempt(hardAttempt);
        setTimeout(() => { 
            window.location.reload();
        //const secretEasyNumber = Math.floor(Math.random()*20) + 1 ;
        //message.textContent = 'Guess The Number';
        //takingGuess.value = ''
        },3000);
    }
    }
    }
    );
    break;
    }
}

// confetti of start
const winningCelebration =() => {
    var defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['star'],
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ['star']
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ['circle']
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}



