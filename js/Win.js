class Win {
    constructor() {

    }

    //check if dots are clicked in the current key order
    //if yes - return win in order to advance to the next level
    //if no - return endScreen
    win() {
        let clicked = document.querySelectorAll('.clicked');
        let keyClass = document.querySelectorAll('.keyClass');
        console.log('win init');

        for (let i = 0; i <= keyClass.length; i++) {
            let keyId = document.getElementById(`k[i]`);
            let dotId = document.getElementById(`d[i]`);
            console.log(keyId);
            console.log(dotId);


            //            if (clicked[i] === keyClass[i]) {
            //                return true;
            //            } else {
            //                return false;
            //            }
        }
    }
}