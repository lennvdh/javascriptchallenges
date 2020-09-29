/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let numberOne = document.getElementById('op-one').value;
    let numberTwo = document.getElementById('op-two').value;

    document.getElementById("addition").addEventListener("click", function() {
        let result = parseFloat(document.getElementById('op-one').value) + parseFloat(document.getElementById('op-two').value);
        alert(result);

        document.getElementById('op-one').value = "";
        document.getElementById('op-two').value = "";

    });

    document.getElementById("substraction").addEventListener("click", function() {
        let min = parseFloat(document.getElementById('op-one').value) - parseFloat(document.getElementById('op-two').value);
        alert(min);

        document.getElementById('op-one').value = "";
        document.getElementById('op-two').value = "";
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let maal = parseFloat(document.getElementById('op-one').value) * parseFloat(document.getElementById('op-two').value);
        alert(maal);

        document.getElementById('op-one').value = "";
        document.getElementById('op-two').value = "";
    });

    document.getElementById("division").addEventListener("click", function() {
        let deel = parseFloat(document.getElementById('op-one').value) / parseFloat(document.getElementById('op-two').value);
        alert(deel);

        document.getElementById('op-one').value = "";
        document.getElementById('op-two').value = "";
    });
})();
