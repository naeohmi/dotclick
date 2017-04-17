class Play {
    constructor() {
        this.playScreen(); //immediately add the play screen
    }
    //sets up the screen during game play and renders it (will be initialized in Game.startClick())
    playScreen() {
        let playScreenId = document.createElement('div');
        playScreenId.setAttribute('id', 'playScreenId');
        playScreenId.innerHTML = '<img src="images/cube.gif">';
        document.querySelector('main').appendChild(playScreenId);
    }
    //initialize the Dot class and render the dots/triangles on the screen
    makeDots() {
        let getDots = new Dot();
        getDots.smallT();
        //maybe set timeout here to add as time goes
        getDots.medT();
        getDots.largeT();
        getDots.dot();
        getDots.animation();
    }
    //random number (found this online)
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    //adds the timer and score board to the screen
    info() {
        let info = document.createElement('div');
        info.setAttribute('id', 'info');
        info.innerHTML =
            //`<img src="images/logo.png">
            `<div id="score-board"></div>
             <div id="timer"></div`
        document.querySelector('aside').appendChild(info);
    }
    //creates the timer and starts it at 30 seconds (I used this same function in my memory game)
    timer() {
        if (document.body.contains(document.querySelector('#timer'))) {
            let timer = {};
            timer.length = 0.5 * 60 * 1000;
            timer.count = () => {
                let m = Math.floor(timer.length / (60 * 1000));
                let s = (timer.length / 1000) - (m * 60);
                if (s < 10) {
                    s = '0' + s;
                }
                if (timer.length <= 0) {
                    let end = new Game();
                    end.endScreen();
                    clearInterval(timer.countInt);
                }
                timer.length -= 1000;
                document.querySelector('#timer').innerHTML =
                    `<p>${m}:${s}</p>`;
            }
            timer.countInt = setInterval(timer.count, 1000);
        }
    }
}