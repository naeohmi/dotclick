class Game {
    constructor() {
        this.startScreen();
        this.playStatus = true;
        this.levelNum = 0;
        this.check();
    }
    //make the start screen render
    //with welcome msg, game instructions, and start button to click 
    startScreen() {
        const open = document.createElement('div');
        open.setAttribute('id', 'open');
        open.innerHTML =
            `<h1>Welcome to:</h1>
             <img src="images/logo.png"><br /><br />
             <p>Click the dots in the right order and advance to the next level!</p><br />
             <button id="start">Start Game</button>`;
        document.querySelector('header').appendChild(open);
        this.clickStart();
    }
    //set event listener to render the game screen when start button is clicked (take the screen set up in Dot.playscreen())
    removeStartScreen() {
        let screen = document.getElementById('open');
        screen.innerHTML = '';
    }
    clickStart() {
        let start = document.querySelector('#start');
        start.addEventListener('click', function () {
            console.log('yay');
            let goodByeOpen = document.querySelector("#open");
            goodByeOpen.remove();
            let startNow = new Play();
            startNow.playScreen();
            startNow.key();
            startNow.info();
        });
    }
    //checks to see if colors clicked in the correct key order
    check() {
        console.log('checking');
        let clicked = document.querySelectorAll('.clicked');
        let keyClass = document.querySelectorAll('.keyClass');
        console.log(clicked);
        if ((clicked.length != 0) && clicked.length === keyClass.length) {
            let winCheck = new Win();
            console.log('win');
            winCheck.win();
        }
    }

    //check what level the game is currently in play at.
    //if playStatus at current level is complete, then go to the next level
    //add one to levelNum (in Game constructor) then use that to add to the key in Play.key()
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