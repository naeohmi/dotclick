class Dot {
    constructor() {
        this.playStatus = false;
        this.score = 0;

    }
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //make the divs move, randomly around the screen
    //up and down and left and right
    move() {
        let h = $(window).height();
        let w = $(window).width();
        let nh = h * Math.random();
        let nw = w * Math.random();
        return {
            'nw': nw,
            'nh': nh
        };
    };

    animation() {
        for (let i = 0; i <= 10; i++) {
            let random = this.move();
            let dot1 = document.querySelectorAll('.dot1');
            let dot2 = document.querySelectorAll('.dot2');
            let dot3 = document.querySelectorAll('.dot3');
            
            $(dot1[i]).animate({
                top: random.nw + 150, left: random.nh
            }, 2000, () => {
                this.animation();
            });
            $(dot2[i]).animate({
                top: random.nw, left: random.nh + 70
            }, 3000, () => {
                this.animation();
            });
            $(dot3[i]).animate({
                top: random.nw, left: random.nh
            }, 1500, () => {
                this.animation();
            });
        };
    }

    //make divs - each div is an individual dot with a random color
    makeDot1() {
        for (let i = 0; i <= 10; i++) {
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
            newDot.setAttribute('style', `border-bottom: 50px solid ${colorArray[randN]}`)
            newDot.setAttribute('class', 'dot1');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>${this.score += 3}</p>`;
            });
            document.querySelector('html').appendChild(newDot);
        }
    }

       makeDot2() {
        for (let i = 0; i <= 10; i++) {
            let randN = this.randomNum(0, 6);
            let newDot = document.createElement('span');
            let colors = {
                c0: 'rgba(232,0,0,.7)', //red
                c1: 'rgba(255,69,203,.5)', //pink
                c2: 'rgba(255,127,0,.7)', //orange
                c3: 'rgba(255,255,0,.7)', //yellow
                c4: 'rgba(3,185,6,.7)', //green
                c5: 'rgba(36,5,242,.7)', //blue
                c6: 'rgba(151,46,251,.7)' //purple
            };
            let colorArray = [colors.c0, colors.c1, colors.c2, colors.c3, colors.c4, colors.c5, colors.c6];
            let colorArrayKeys = Object.keys(colors);
            newDot.setAttribute('style', `border-bottom: 100px solid ${colorArray[randN]}`)
            newDot.setAttribute('class', 'dot2');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>${this.score += 2}</p>`;
            });
            document.querySelector('html').appendChild(newDot);
        }
    }
          makeDot3() {
        for (let i = 0; i <= 10; i++) {
            let randN = this.randomNum(0, 6);
            let newDot = document.createElement('span');
            let colors = {
                c0: 'rgba(232,0,0,.3)', //red
                c1: 'rgba(255,69,203,.3)', //pink
                c2: 'rgba(255,127,0,.3)', //orange
                c3: 'rgba(255,255,0,.3)', //yellow
                c4: 'rgba(3,185,6,.3)', //green
                c5: 'rgba(36,5,242,.3)', //blue
                c6: 'rgba(151,46,251,.3)' //purple
            };
            let colorArray = [colors.c0, colors.c1, colors.c2, colors.c3, colors.c4, colors.c5, colors.c6];
            let colorArrayKeys = Object.keys(colors);
            newDot.setAttribute('style', `border-bottom: 125px solid ${colorArray[randN]}`)
            newDot.setAttribute('class', 'dot3');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>${this.score += 1}</p>`;
            });
            document.querySelector('html').appendChild(newDot);
        }
    } 
    
    
    animateDot() {
        for (let i = 0; i <= 25; i++) {
            let currentDot = document.getElementById('id' + i);
            this.animation(currentDot);
        }
    }
}