class Game {
    //make the start screen render
    //with welcome msg, game instructions, and start button to click 
    startScreen() {
        const open = document.createElement('div');
        open.setAttribute('id', 'open');
        open.innerHTML =
            `<h1>Welcome to:</h1>
             <img src="images/logo.png"><br /><br />
             <p>Click the dots in the right order and advance to the next level!</p><br />
             <button id="start">Click to Start!</button>`;
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
            startNow.info();
            startNow.timer();
            startNow.makeDots();
        });
    }
    endScreen() {
        if 
        
    }
}