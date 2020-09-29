/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    document.getElementById('target').innerText =
        day + "/" + month + "/" + year + "  " + hours + ":" + minutes;


})();
