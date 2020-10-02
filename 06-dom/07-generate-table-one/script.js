/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById('target');
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    for (let i = 0; i <10 ; i++) {
        var row = document.createElement('tr');
        for (let j = 0; j <5 ; j++) {
            var column = document.createElement('td');
            var cellText = document.createTextNode('Hello World!!');
            column.appendChild(cellText);
            row.appendChild(column);
        }
        tbody.appendChild(row)
    }
    table.appendChild(tbody);
    target.appendChild(table);
    table.setAttribute('border', '2');

})();
