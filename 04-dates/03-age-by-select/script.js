/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById('run').addEventListener('click', function () {
        let daysOfMonth = document.getElementById('dob-day').value;
        let months = document.getElementById('dob-month').value;
        let years = document.getElementById('dob-year').value;

        let now = new Date();
        let fullYear = now.getFullYear() - years;
        let fullMonths = now.getMonth() - months;
        let days = now.getDate() - daysOfMonth;
        let age = (fullMonths<0||(fullMonths===0 && days ===0)) ? fullYear-1 : fullYear;
        alert(`your age is ${age}`);
    })

})();
