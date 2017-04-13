class Game {
    constructor() {
        this.startScreen();
        this.playStatus = true;
        this.levelNum = 0;
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
        });
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

class Dot {
    constructor() {

    }
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    //make divs - each div is an individual dot 
    makeDot() {
        for (let i = 0; i <= 50; i++) {
            let randN = this.randomNum(1, 50);
            console.log(randN);
            let newDot = document.createElement('div');
            newDot.setAttribute('info', randN); //unique dot number
            newDot.setAttribute('id', 'id' + i);
            //            newDot.addEventListener('click', )
        }

    }
    //make the divs move, randomly around the screen
    //up and down and left and right
    move() {

    }
    //set the colors of the dots to a unique ID 
    //track the colors (to be used in conjuction with gamePLay on dot click to determine if the dots are clicked in the desired order)
    color() {

    }
}


class Play {
    constructor() {
        //        this.playScreen();
        //        this.key();


    }
    //sets up the screen during game play and renders it (will be initialized in Game.startClick())
    playScreen() {
        let playScreenId = document.createElement('div');
        playScreenId.setAttribute('id', 'playScreenId');

        playScreenId.innerHTML =
            ``;

        document.querySelector('main').appendChild(playScreenId);


        let makeDots = new Dot();
        makeDots.makeDot();
        console.log(playScreenId)

    }
    //generate a key to render on the bottom of the screen 
    //key to include randomly generated divs that each display a unique color
    //need to save the unique randomly generated key order, each turn/level to determine if player won or not
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    key() {
        console.log('key');
        let keyBox = document.createElement('div');
        keyBox.setAttribute('id', 'keyBox');
        keyBox.innerHTML =
            `<h1>Color Key</h1>
             <h2>click the dots in this order</h2>`
        document.querySelector('#playScreenId').appendChild(keyBox);
        //this for loop will use the Game - levelNum number (after I make it lol) i < levelNum.length
        let keyColorBox = document.createElement('div');
        keyColorBox.setAttribute('id', 'keyColorBox');
        document.querySelector('#keyBox').appendChild(keyColorBox)
        for (let i = 0; i <= 4; i++) {
            let newColorKey = document.createElement('div');
            newColorKey.setAttribute('class', 'keyClass');
            newColorKey.setAttribute('id', 'keyId' + i);
            
            let colors = {
                cl1: 'rgba(232,0,0,.8)',
                cl2: 'rgba(255,255,0,.8)',
                cl3: 'rgba(3,185,6,.8)',
                cl4: 'rgba(0,162,255,.8)',
                cl5: 'rgba(255,69,203,.8)',
            };
//            for (let j in colors) {
                let go = Object.keys(colors);
                console.log(go[i]);
                newColorKey.setAttribute('style', `background-color: go.value[i]`);
                newColorKey.setAttribute('color', go[i]);
                document.querySelector('#keyColorBox').appendChild(newColorKey);

            //}
        }
    }
        //check if dots are clicked in the current key order
        //if yes - return win in order to advance to the next level
        //if no - return endScreen
        win() {

        }
    }