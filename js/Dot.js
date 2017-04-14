class Dot {
    constructor() {
        this.winStatus = false;

    }
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //make the divs move, randomly around the screen
    //up and down and left and right
    move() {
        let h = $(window).height() + 50;
        let w = $(window).width() + 50;
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
            }, 2200, () => { //fat arrow doesnt re-assign this keyword! yay fat arrow
                this.animation();
            });
        };
    }
    //make divs - each div is an individual dot with a random color
    makeDot() {
        for (let i = 0; i <= 25; i++) {
            let randN = this.randomNum(0, 6);
            let newDot = document.createElement('span');
            
            let colors = {
                c0: 'rgba(232,0,0,.8)', //red
                c1: 'rgba(255,69,203,.6)', //pink
                c2: 'rgba(255,127,0,.8)', //orange
                c3: 'rgba(255,255,0,.8)', //yellow
                c4: 'rgba(3,185,6,.8)', //green
                c5: 'rgba(36,5,242,.8)', //blue
                c6: 'rgba(151,46,251,.8)' //purple
            };
            let colorArray = [colors.c0, colors.c1, colors.c2, colors.c3, colors.c4, colors.c5, colors.c6];
            let colorArrayKeys = Object.keys(colors);

            for (let j = 0; j <= 25; j++) {
                newDot.setAttribute('style', `background-color: ${colorArray[randN]}`)

                newDot.setAttribute('class', 'dot');
                newDot.setAttribute('id', `${randN}`); //unique dot number

                newDot.addEventListener('click', () => {
                    newDot.setAttribute('class', 'clicked');
                    
                    let clickd = document.querySelectorAll('.clicked');
                    let keyClass = document.querySelectorAll('.keyClass');
//                    console.log(clickd.getAttribute('id'));
                    
                    if ((clicked.length !== 0) && (clicked.id === keyClass.id)) {
                        console.log('whoohoo true');
                        this.winStatus = true;
                    } else {
                        this.winStatus = false;
                    }

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