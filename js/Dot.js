class Dot {
    constructor() {
        this.playStatus = false;
        this.score = 0;
        this.colors = {
            c0: 'rgba(232,0,0,.8)', //red
            c1: 'rgba(255,69,203,.9)', //pink
            c2: 'rgba(254,56,69,.8)', //cubered 
            c3: 'rgba(255,255,0,.9)', //yellow
            c4: 'rgba(101,227,183,.9)', //cubeteal
            c5: 'rgba(36,5,242,.8)', //blue
            c6: 'rgba(151,46,251,.9)', //purple
            c7: 'rgba(48,44,103,.8)', //cubeblue
            c8: 'rgba(0,0,0,.7)' //black
        };
        this.colorArray = [
            this.colors.c0,
            this.colors.c1,
            this.colors.c2,
            this.colors.c3,
            this.colors.c4,
            this.colors.c5,
            this.colors.c6,
            this.colors.c7,
            this.colors.c8
        ];
        this.colorArrayKeys = Object.keys(this.colors);
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
        for (let i = 0; i <= 50; i++) {
            let random = this.move();
            let dot1 = document.querySelectorAll('.dot1');
            let dot2 = document.querySelectorAll('.dot2');
            let dot3 = document.querySelectorAll('.dot3');

            $(dot1[i]).animate({
                top: random.nw ,
                left: random.nh + 50
            }, 2000, () => {
                this.animation();
            });
            $(dot2[i]).animate({
                top: random.nw,
                left: random.nh + 70
            }, 3000, () => {
                this.animation();
            });
            $(dot3[i]).animate({
                top: random.nw,
                left: random.nh + 50
            }, 1500, () => {
                this.animation();
            });
        };
    }

    //make divs - each div is an individual dot with a random color
    makeDot1() {
        for (let i = 0; i < 15; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `border-bottom: 50px solid ${this.colorArray[randN]}`)
            newDot.setAttribute('class', 'dot1');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>score:${this.score += 3}</p>`;
            });
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }

    makeDot2() {
        for (let i = 0; i < 20; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `border-bottom: 100px solid ${this.colorArray[randN]}`)
            newDot.setAttribute('class', 'dot2');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>score:${this.score += 2}</p>`;
            });
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }
    makeDot3() {
        for (let i = 0; i < 15; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `border-bottom: 150px solid ${this.colorArray[randN]}`)
            newDot.setAttribute('class', 'dot3');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>score:${this.score += 1}</p>`;
            });
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }

    animateDot() {
        for (let i = 0; i <= 50; i++) {
            let currentDot = document.getElementById('id' + i);
            this.animation(currentDot);
        }
    }
    finalScore() {
        return this.score;
    }
}