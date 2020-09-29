/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let currentDate = new Date();
    let currentHours = currentDate.getHours() - 17;
    let currentMinutes = currentDate.getMinutes() - 30;
    if (currentHours<0 ||(currentHours === 0 && currentMinutes === 0 )){
        document.getElementById('target').innerText = "Hello";
    }else{
        document.getElementById('target').innerText = "Good Evening"
    }

})();
