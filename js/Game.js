class Game {
    constructor() {
        this.playStatus = true;
        this.levelNum = 0;
        this.startScreen = null;
        
    }
    //make the start screen render
    //with welcome msg, game instructions, and start button to click 
    startScreen() {
        const open = document.createElement('div');
        open.setAttribute('id', 'open');
        open.innerHTML =
            `<h1>Welcome to Dot Click!</h1>
             <button>Start Game</button>`;
        document.querySelector('header').appendChild(open);
//        this.addEventListener('click', () => {
//            
//        })
        
    }
    //set event listener to render the game screen when start button is clicked
    clickStart() {
        
    }
    //check what level the game is currently in play at.
    //if playStatus at current level is complete, then go to the next level
    level() {
    
    }
    //if game at current level of play is still in progress set to true
    //if current level game is complete/won then go to the next level
    //if current level of game is over/lost then go to the end screen
    playStatus() {
        
    }
    //make the end screen render with final msg and
    //display the level of completion and a button for starting a new game
    endScreen() {
        
    }
    //make the new game button, that when clicked will start a new game
    newGame() {
        
    }
    
}