class Play {
    constructor() {
                this.playScreen();
        //        this.key();
    }
    //sets up the screen during game play and renders it (will be initialized in Game.startClick())
    playScreen() {
        let playScreenId = document.createElement('div');
        playScreenId.setAttribute('id', 'playScreenId');
        document.querySelector('main').appendChild(playScreenId);
    }
    makeDots() {
        let getDots = new Dot();
        getDots.makeDot1();        
        //set timeout
        getDots.makeDot2();
        getDots.makeDot3();
        getDots.animation();
        

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
        keyBox.innerHTML = `<h1>Click dots in this order:</h1>`;
        document.querySelector('html').appendChild(keyBox);

        let colors = {
            c0: 'rgba(232,0,0,.8)', //red
            c1: 'rgba(255,69,203,.9)', //pink
            c2: 'rgba(254,56,69,.8)', //cubered 
            c3: 'rgba(255,255,0,.9)', //yellow
            c4: 'rgba(101,227,183,.9)', //cubeteal
            c5: 'rgba(36,5,242,.8)', //blue
            c6: 'rgba(151,46,251,.9)', //purple
            c7: 'rgba(48,44,103,.9)', //cubeblue
            c8: 'rgba(0,0,0,.8)' //black
        };
        let colorArray = [colors.c0, colors.c1, colors.c2, colors.c3, colors.c4, colors.c5, colors.c6, colors.c7, colors.c8];
        let colorArrayKeys = Object.keys(colors);

        for (let i = 0; i < 4; i++) {
            let randN = this.randomNum(0, 8);
            var newColorKey = document.createElement('div');
            newColorKey.setAttribute('style', `background-color: ${colorArray[randN]}`);
            newColorKey.setAttribute('class', 'keyClass');
            newColorKey.setAttribute('id', `${randN}`); //unique color
            document.querySelector('#keyBox').appendChild(newColorKey);
        };
    }

    info() {
        let info = document.createElement('div');
        info.setAttribute('id', 'info');
        info.innerHTML =
            `<img src="images/logo.png">
             <div id="timer">timer</div>
             <div id="score-board">score</div`
        document.querySelector('aside').appendChild(info);
    }
    
    timer() {
        if (document.body.contains(document.querySelector('#timer'))) {
            let timer = {};
            timer.length = 0.2 * 60 * 1000;
            timer.count = function () {
                let m = Math.floor(timer.length / (60 * 1000));
                let s = (timer.length / 1000) - (m * 60);
                if (s < 10) {
                    s = '0' + s;
                }
                if (timer.length <= 0) {
                    document.querySelector('#playScreenId').innerHTML =
                        `<p>ZERO!</p>`;
                    clearInterval(timer.countInt);
                }
                timer.length -= 1000;
                document.querySelector('#timer').innerHTML =
                    `<p>${m}:<br />${s}</p>`;
            }
            timer.countInt = setInterval(timer.count, 1000);
        }
    }
}