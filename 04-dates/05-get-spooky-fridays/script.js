/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', function () {
        let inputYear = document.getElementById('year').value;
        let startDate = new Date(`1/1/${inputYear}`);
        let endDate = new Date(`31/12/${inputYear}`);
        let result = "";
        while (startDate<=endDate){
            if (startDate.getDay() == 5 && startDate.getDate() == 13){
                let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
                let monthIndex = startDate.getMonth();
                result += `${months[monthIndex]}`;
            }
            startDate.setDate(startDate.getDate()+1);
        }
        newResult = result.slice(0, result.length -1);
        alert(`Month(s) whit friday the 13 in ${inputYear} : ${newResult}.`);
        document.getElementById('year').value = "";
    })




})();
