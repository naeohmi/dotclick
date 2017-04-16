class Play {
    constructor() {
        this.playScreen();
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
        //maybe set timeout here to add as time goes
        getDots.makeDot2();
        getDots.makeDot3();
        getDots.makeDot4();
        getDots.animation();
    }

    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    info() {
        let info = document.createElement('div');
        info.setAttribute('id', 'info');
        info.innerHTML =
            //`<img src="images/logo.png">
            `<div id="score-board"></div>
             <div id="timer"></div`
        document.querySelector('aside').appendChild(info);
    }

    timer() {
        if (document.body.contains(document.querySelector('#timer'))) {
            let timer = {};
            timer.length = 0.5 * 60 * 1000;
            timer.count = function () {
                let m = Math.floor(timer.length / (60 * 1000));
                let s = (timer.length / 1000) - (m * 60);
                if (s < 10) {
                    s = '0' + s;
                }
                if (timer.length <= 0) {
                    console.log('yes');
                    let end = new Game();
                    end.endScreen();
                    clearInterval(timer.countInt);
                }
                timer.length -= 1000;
                document.querySelector('#timer').innerHTML =
                    `<p>${m} : ${s}</p>`;
            }
            timer.countInt = setInterval(timer.count, 1000);
        }
    }
}