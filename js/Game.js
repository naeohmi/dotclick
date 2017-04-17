class Game {
    //make the start screen render
    //with welcome msg, game instructions, and start button to click 
    startScreen() {
        let open = document.createElement('div');
        open.setAttribute('class', 'open');
        open.innerHTML =
            `<h1>Welcome to:</h1>
             <img src="images/tri.png">
             <p>Click the triangles for points, smaller triangles are worth more points. Click the dot for extra points!</p>
             <button id="start">start!</button>`;
        document.querySelector('header').appendChild(open);
        this.clickStart();
    }
    //set event listener to render the game screen when start button is clicked (take the screen set up in Dot.playscreen())
    removePopScreen() {
        let screen = document.getElementById('open');
        screen.innerHTML = '';
    }
    //when the start button is clicked, add the Play screen!
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
    //when the timer runs out, add the end screen
    endScreen() {
        let goodBye = document.querySelector('main');
        goodBye.innerHTML = '';
        let end = document.createElement('div');
        end.setAttribute('class', 'open');
        end.innerHTML = 
            `<h1>Game Over</h1>
             <img src="images/tri.png">
             <p>Large triangles are +1 point, medium triangles are +2 points, small triangles are +3 points. The dot is +7! Have fun &hearts;<br /></p>
             <button id=start>Play Again</button>`
        document.querySelector('header').appendChild(end);
        this.clickStart();
    }
}