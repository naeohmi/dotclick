
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
        makeDots.animation();

    }
    //generate a key to render on the bottom of the screen 
    //key to include randomly generated divs that each display a unique color
    //need to save the unique randomly generated key order, each turn/level to determine if player won or not
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    key() {
        let keyBox = document.createElement('div');
        keyBox.setAttribute('id', 'keyBox');
        keyBox.innerHTML =
            `<h1>Color Key</h1>
             <h2>click the dots in this order</h2>`
        document.querySelector('#playScreenId').appendChild(keyBox);
        //this for loop will use the Game - levelNum number (after I make it lol) i < levelNum.length
        //        let keyColorBox = document.createElement('div');
        //        keyColorBox.setAttribute('id', 'keyColorBox');
        //        document.querySelector('#keyBox').appendChild(keyColorBox)
        for (let i = 0; i <= 4; i++) {
            var newColorKey = document.createElement('div');
            newColorKey.setAttribute('class', 'keyClass');
            newColorKey.setAttribute('id', 'keyId' + i);

            let colors = {
                cl1: 'rgba(232,0,0,.8)',
                cl2: 'rgba(255,255,0,.8)',
                cl3: 'rgba(3,185,6,.8)',
                cl4: 'rgba(0,162,255,.8)',
                cl5: 'rgba(255,69,203,.8)',
            };
            //for (let j in colors) {
            let colorsKeys = Object.keys(colors);
            newColorKey.setAttribute('color', colorsKeys[i]);
            colorsKeys.forEach((d) => {
                newColorKey.setAttribute('style', `background-color: ${colors[d]}`);
            });
            document.querySelector('#keyBox').appendChild(newColorKey);
        }; //for loop
    }

    //check if dots are clicked in the current key order
    //if yes - return win in order to advance to the next level
    //if no - return endScreen
    win() {

    }
}