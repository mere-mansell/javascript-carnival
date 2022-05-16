// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// - The ability to store or get references to the cells in the HTML table.
// - A function to randomly select which cell should show the mole.
// - A way to show a mole in the chosen cell.

// get a random cell
// mole image appears in cell
// click on mole
// mole respawns in a different cell
console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('TD')
let randomNum = Math.floor(Math.random() * cells.length)
let randomCell = cells[randomNum]
console.log(randomCell)

// create image
// assign image to the random cell selected

let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'
randomCell.appendChild(mole)

// click on mole
// mole dissappear

mole.onclick = whackedMole

function whackedMole() {
  randomNum = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomNum]
  randomCell.appendChild(mole)

  // play audio

  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
