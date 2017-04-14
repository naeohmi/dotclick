class Dot {
    constructor() {

    }
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //make the divs move, randomly around the screen
    //up and down and left and right
    move() {
        let h = $(window).height() - 50;
        let w = $(window).width() - 50;
        let nh = h * Math.random();
        let nw = w * Math.random();
        return {
            'nw': nw,
            'nh': nh
        };
    };

    animation() {
        for (let i = 0; i <= 25; i++) {
            let random = this.move();
            let currentDot = document.querySelectorAll('.dot');
            $(currentDot[i]).animate({
                top: random.nw,
                left: random.nh
            }, 1300, () => { //fat arrow doesnt re-assign this keyword! yay fat arrow
                this.animation();
            });
        };
    }
    //make divs - each div is an individual dot with a random color
    makeDot() {
        for (let i = 0; i <= 25; i++) {
            let randN = this.randomNum(1, 25);
            let newDot = document.createElement('span');

            let colors = ['rgba(232,0,0,.8)', 'rgba(255,255,0,.8)', 'rgba(3,185,6,.8)', 'rgba(255,69,203,.8)', 'rgba(36,5,242,.6)', 'rgba(255,127,0,.7)', 'rgba(151,46,251,.8)', 'rgba(142,255,208,.8)'];
            for (let j = 0; j <= 25; j++) {
                newDot.setAttribute('style', `background-color: ${colors[this.randomNum(0,7)]}`)

                newDot.setAttribute('class', 'dot'); 
                newDot.setAttribute('info', randN); //unique dot number
                newDot.setAttribute('id', 'id' + i);

                newDot.addEventListener('click', () => {
                    newDot.setAttribute('class', 'clicked');
                    console.log('clicked!');
                });
            };
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }
    animateDot() {
        for (let i = 0; i <= 25; i++) {
            let currentDot = document.getElementById('id' + i);
            this.animation(currentDot);
        }
    }
}