class Dot {
    constructor() {
        this.playStatus = false;
        this.score = 0;
        this.colors = {
            c0: 'rgba(232,0,0,.8)', //red
            c1: 'rgba(255,69,203,.8)', //pink
            c2: 'rgba(254,56,69,.8)', //cubered 
            c3: 'rgba(255,255,0,.8)', //yellow
            c4: 'rgba(101,227,183,.8)', //cubeteal
            c5: 'rgba(36,5,242,.7)', //blue
            c6: 'rgba(151,46,251,.8)', //purple
            c7: 'rgba(48,44,103,.7)', //cubeblue
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
    //get a random number (found this method online)
    randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //make the divs move, randomly around the screen
    //using jQuery, (this is mostly from Joe's class on Monday)
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
    //animated the divs at different rates and in slightly different places on the screen so they're more spread out
    animation() {
        for (let i = 0; i <= 60; i++) {
            let random = this.move();
            let dot1 = document.querySelectorAll('.dot1');
            let dot2 = document.querySelectorAll('.dot2');
            let dot3 = document.querySelectorAll('.dot3');

            $(dot1[i]).animate({
                top: random.nw + 50,
                left: random.nh
            }, 2000, () => {
                this.animation();
            });
            $(dot2[i]).animate({
                top: random.nw,
                left: random.nh + 35
            }, 2100, () => {
                this.animation();
            });
            $(dot3[i]).animate({
                top: random.nw + 20,
                left: random.nh + 10
            }, 1800, () => {
                this.animation();
            });
            
        };
    }

    //make divs - each div is an individual dot/triangle with a random color and random size, when clicked add to the score and display updated score
    
    //small triangles 
    smallT() {
        for (let i = 0; i < 20; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `border-bottom: ${this.randomNum(20, 150)}px solid ${this.colorArray[randN]}`)
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
    //medium sized triangles
    medT() {
        for (let i = 0; i < 20; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `border-bottom: ${this.randomNum(100, 200)}px solid ${this.colorArray[randN]}`)
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
    //largest triangles
    largeT() {
        for (let i = 0; i < 15; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `border-bottom: ${this.randomNum(150, 250)}px solid ${this.colorArray[randN]}`)
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
    //one little dot
    dot() {
        for (let i = 0; i < 1; i++) {
            let randN = this.randomNum(0, 8);
            let newDot = document.createElement('span');
            newDot.setAttribute('style', `background-color: rgba(101,227,183,.7)`);
            
            newDot.setAttribute('class', 'dot4');
            newDot.setAttribute('id', `${randN}`); //unique dot number
            newDot.addEventListener('click', () => {
                newDot.setAttribute('class', 'clicked');
                this.playStatus = true;
                let scoreBoard = document.getElementById('score-board');
                scoreBoard.innerHTML = `<p>score:${this.score += 7}</p>`;
            });
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }
    //animate all the divs on the screen
    animateDot() {
        for (let i = 0; i <= 60; i++) {
            let currentDot = document.getElementById('id' + i);
            this.animation(currentDot);
        }
    }
}