/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    pw1 = document.getElementById('pass-one');
    validate = document.getElementById('validity');

    pw1.addEventListener('keyup', function () {
        validate.innerHTML = "";
        let pattern = /^(?=.*?[0-9].*?[0-9])[0-9a-zA-Z!@#$%0-9]{8,}$/;
        validate.innerHTML = (pattern.test(pw1.value)) ? 'Ok' : 'Not ok'
    })
})();
