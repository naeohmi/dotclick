class Dot {
    constructor() {
        this.animateDot();

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

    animateDot() {
        let random = this.move();
        //        console.log(random);
        $('div').animate({
            top: random.nw,
            left: random.nh
        }, 800, function () {
            this.animateDot();
        });
    };
    //make divs - each div is an individual dot 
    makeDot() {
        for (let i = 0; i <= 50; i++) {
            let randN = this.randomNum(1, 50);
            //            console.log(randN);
            let newDot = document.createElement('div');
            newDot.setAttribute('class', 'dot');
            newDot.setAttribute('info', randN); //unique dot number
            newDot.setAttribute('id', 'id' + i);
            //            newDot.addEventListener('click', )
            this.animateDot();
            document.querySelector('#playScreenId').appendChild(newDot);
        }
    }


    //set the colors of the dots to a unique ID 
    //track the colors (to be used in conjuction with gamePLay on dot click to determine if the dots are clicked in the desired order)
    color() {


    }
}