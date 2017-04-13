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
        
            for (let i = 0; i <= 25; i++){
                let random = this.move();
            let currentDot = document.querySelectorAll('.dot');
//            this.animation(currentDot);
                $(currentDot[i]).animate({
            top: random.nw,
            left: random.nh
        }, 500, () => { //fat arrow doesnt re-assign this keyword! yay fat arrow
            this.animation();
        });
    
            };
    }
    //make divs - each div is an individual dot 
    makeDot() {
        for (let i = 0; i <= 25; i++) {
            let randN = this.randomNum(1, 25);
            let newDot = document.createElement('span');
            newDot.setAttribute('class', 'dot');
            newDot.setAttribute('info', randN); //unique dot number
            newDot.setAttribute('id', 'id' + i);
            
            //            newDot.addEventListener('click', )
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }
    animateDot() {
        for (let i = 0; i <= 25; i++){
            let currentDot = document.getElementById('id' + i);
            this.animation(currentDot);
        }
    }
        
    


    //set the colors of the dots to a unique ID 
    //track the colors (to be used in conjuction with gamePLay on dot click to determine if the dots are clicked in the desired order)
    color() {


    }
}