/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        let url = '../../_shared/api.json';
        let heroName = document.getElementById('hero-name').value;
        let heroEgo = document.getElementById('hero-alter-ego').value;
        let heroPower = document.getElementById('hero-powers').value;
        if (heroName && heroEgo && heroPower){
            fetch(url)
                .then(res=>res.json())
                .then(data => data.heroes)
                .then(heroes => {
                    let heroId = heroes.length +1;
                    heroes[heroes.length] = {
                        "id": heroId,
                        "name": heroName,
                        "alterEgo": heroEgo,
                        "abilities": [heroPower]
                    }
                    console.table(heroes);
                })
        }else {
            console.log('please fill in data before submitting.')
        }
    })
})();
