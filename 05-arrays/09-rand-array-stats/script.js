/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', function () {
        let randomNumArr = [];
        for (let i = 0; i <10 ; i++) {
            randomNumArr[i] = Math.floor(Math.random()*99+1)
            document.getElementById(`n-${i+1}`).innerText = randomNumArr[i];
        }
        let sum = randomNumArr.reduce(function (a,b) {
            return a + b;
        })
        let average = randomNumArr.reduce((a,b)=> a +b, 0) / randomNumArr.length;

        document.getElementById('min').innerText = Math.min(...randomNumArr);
        document.getElementById('max').innerText = Math.max(...randomNumArr);
        document.getElementById('sum').innerText = sum;
        document.getElementById('average').innerText = average;


    })

})();
