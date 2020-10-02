/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById('target');
    //to see the wave easier, uncomment the next line
    //target.innerHTML = 'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll';
    let string = target.innerHTML;
    let stringArray = string.split('');


    let sizes = [1,2,3,4,5,5,4,3,2,1];

    let time = 1;

    move();

    function move(){
        let fontBase = 8;
        let x=0;

        if (time < 100){

            target.innerHTML = "";

            for(let i = 0; i < stringArray.length; i++){
                target.innerHTML += `<span style="font-size: ${fontBase + sizes[x]*4}px;">${stringArray[i]}</span>`;
                x = (x<9) ? x+1 : 0;
            }


            for (let j=0;j<sizes.length;j++){
                if (j < sizes.length-1){
                    sizes[j]=sizes[j+1];
                } else {
                    sizes[j]=sizes[0];
                }
            }
            console.log(sizes);

            time++;
            setInterval(move,200*time);
        }
    }

})();
