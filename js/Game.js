class Game {
    //make the start screen render
    //with welcome msg, game instructions, and start button to click 
    startScreen() {
        let open = document.createElement('div');
        open.setAttribute('class', 'open');
        open.innerHTML =
            `<h1>Welcome to:</h1>
             <img src="images/logo.png"><br /><br />
             <p>Click the dots in the right order and advance to the next level!</p><br />
             <button id="start">Click to Start!</button>`;
        document.querySelector('header').appendChild(open);
        this.clickStart();
    }
    //set event listener to render the game screen when start button is clicked (take the screen set up in Dot.playscreen())
    removePopScreen() {
        let screen = document.getElementById('open');
        screen.innerHTML = '';
    }

    clickStart() {
        let start = document.querySelector('#start');
        start.addEventListener('click', function () {
            console.log('yay');
            let goodByePop = document.querySelector(".open");
            goodByePop.remove();
            let startNow = new Play();
            startNow.info();
            startNow.timer();
            startNow.makeDots();
        });
    }
    endScreen() {
        let goodBye = document.querySelector('main');
        goodBye.innerHTML = '';
        let end = document.createElement('div');
        end.setAttribute('class', 'open');

        end.innerHTML = 
            `<h1>Game Over</h1>
             <img src="images/logo.png"><br /><br />
             <p>Nice job!</p>
             <button id=start>Click to Play Again</button>`
        document.querySelector('header').appendChild(end);
        this.clickStart();
    }
}