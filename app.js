const game = () => {
    let pScore = 0;
    let cScore =0;

    //Start the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            
        })
    }
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //Computer Options

        const computerOptions = ['stone', 'paper', 'scissors'];
        
       

        options.forEach(element => {
            element.addEventListener('click', function(){
            


            //Computer Choice
            const computerNumber = Math.floor(Math.random()*3);
            const computerOption = computerOptions[computerNumber];
            //Here is where we call compare hands

            compareHands(this.textContent, computerOption);
            UpdateScore();
            
            // Update images
            playerHand.src = `./assets/${this.textContent}.png`
            computerHand.src = `./assets/${computerOption}.png`
                
        })
    })
};

    const UpdateScore = ()=>{

        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent =pScore;
        computerScore.textContent =cScore;

    }
    const compareHands = (playerChoice, ComputerChoice) =>{
        // Update text
        const winner = document.querySelector('.winner')
        // Checking for a tie
        if(playerChoice === ComputerChoice){
            winner.textContent ='It is a tie';
            return;
        }
        if(playerChoice ==='stone'){
            if(ComputerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                return
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                return;
            }
        }
        if(playerChoice ==='paper'){
            if(ComputerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                return
            }else{
                winner.textContent = 'player Wins';
                pScore++;
                return;
            }
        }
        if(playerChoice ==='scissors'){
            if(ComputerChoice === 'paper'){
                winner.textContent = 'Player Wins';
                pScore++;
                return
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                return;
            }
        }



    }

    // call all the inner function
    startGame();
    playMatch();
}


// start game
game();