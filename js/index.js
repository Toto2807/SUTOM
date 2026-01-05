const game = document.getElementById('game');
const tableau = document.getElementById('tableau');
const board = document.getElementById('board');
const valider = document.getElementById('valider');

const table_word = ["Car", "Bus", "Train", "Plane", "Boat", "Bike", "Truck", "Taxi", "Metro", "Tram"]
const mot = table_word[Math.floor(Math.random() * table_word.length)]
const attemps = 6

for(let i = 0; i < attemps; i++){
    const lignes = document.createElement('tr')
    lignes.id = `lignes-${i}`
    lignes.innerHTML = `<td><input type="text" maxlength="1" placeholder="..."></td>`.repeat(mot.length).trim()
    board.appendChild(lignes)
}

let currentAttempt = 0

valider.addEventListener('click', () => {
    let mot_user = ''
    const inputs = document.querySelectorAll(`#lignes-${currentAttempt} input`)
    inputs.forEach(input =>{
        mot_user += input.value.toLowerCase()
    })
    if(mot_user.length !== mot.length){
        alert("Veuillez remplir tous les champs.")
        return
    }
    if(mot_user === mot.toLowerCase()){
        alert('Bravo, vous avez trouvé le mot !')
        return
    }
    currentAttempt++
    if(currentAttempt >= attemps){
        alert("Vous avez perdu le mot etait : " + mot)
        return
    }

    inputs.forEach((input,index) => {
        const lettre = input.value.toLowerCase()
        if(lettre === mot[index].toLowerCase()){
            input.style.backgroundColor = 'green'
        }
        else if(mot.includes(lettre)){
            input.style.backgroundColor = 'yellow'
        }
        else{
            input.style.backgroundColor = 'red'
        }
    })
})































// for(let i = 0; i < attemps; i++){
//     const lignes = document.createElement('tr')
//     lignes.id = `ligne-${i}`;
//     lignes.innerHTML = `<td><input id="lettre" type="text" maxlength="1" placeholder="..."></td>`.repeat(mot.length).trim();
//     board.appendChild(lignes);
// }


// let currentAttempt = 0;

// valider.addEventListener('click', () => {
//     let mot_user = ''
//     const inputs = document.querySelectorAll(`#ligne-${currentAttempt} input`);
//     inputs.forEach(input => {
//         mot_user += input.value.toLowerCase();
//     })
//     if(mot_user.length !== mot.length){
//         alert("Veuillez remplir tous les champs.");
//         return
//     }
//     if(mot_user === mot.toLowerCase()){
//         alert("Bravo, vous avez trouvé le mot !");
//         return
//     }
//     currentAttempt++
//     if(currentAttempt >= attemps){
//         alert("Vous avez perdu le mot etait : " + mot)
//         return
//     }
//     inputs.forEach((input,index) =>{
//         const lettre = input.value.toLowerCase()
//         if(lettre === mot[index].toLowerCase()){
//             input.style.backgroundColor = 'green';
//         } else if(mot.includes(lettre)){
//             input.style.backgroundColor = 'yellow';
//         } else {
//             input.style.backgroundColor = 'red';
//         }
//     })
// })