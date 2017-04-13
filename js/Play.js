class Play {
    constructor() {
        
    }
    //sets up the screen during game play and renders it (will be initialized in Game.startClick())
    playScreen() {
        console.log('playScreen');
        let playScreenId = document.createElement('div');
        playScreenId.setAttribute('id', 'playScreenId');
        playScreenId.innerHTML = 
            ``;
        
    }
    //generate a key to render on the bottom of the screen 
    //key to include randomly generated divs that each display a unique color
    //need to save the unique randomly generated key order, each turn/level to determine if player won or not
    key() {
        console.log('key');
        let keyBox = document.createElement('div');
        keyBox.setAttribute('id', 'keyBox');
        keyBox.innerHTML = 
            `<h1>Color Key</h1>
            <h2>Click the dots in this color order!</h2>`
        //this for loop will use the Game - levelNum number (after I make it lol) i < levelNum.length
        for (let i = 0; i < 4; i++) {
            let newColorKey = 
            
        }
        
    }
    //check if dots are clicked in the current key order
    //if yes - return win in order to advance to the next level
    //if no - return endScreen
    win() {
        
    }
}