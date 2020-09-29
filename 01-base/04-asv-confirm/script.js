/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age = prompt("what is your age?");
    let gender = prompt("what is your gender?");
    let town = prompt("where do you live?");
    if (confirm(age) && confirm(gender) && confirm(town) === true){
        alert("well done");
    }else{
        let age = prompt("what is your age?");
        let gender = prompt("what is your gender?");
        let town = prompt("where do you live?");
    }


})();
