// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// push left and right arrow keys to change the outfit
// up and down arrow keys to switch between the body parts

// need a function that gets the arrow pushes
// need a function to change the horizontal images: must set upper and lower max
// need a function to change the vertical position (body part): must set upper and lower max
// images need an id for each body part
// index of the position of the clothing (eg. clothing default = 0 and right arrow -> 1, 2, 3 etc, left arrow -> 5,4,3 etc)
// assign each body part an index head = 0, body = 1, feet = 2

// 3 functions: click, vertical, horizontal
// 2 index: outfit, body part

// ---- arrow key clicks function ----------
document.onkeydown = checkKey

function checkKey(e) {
  // e = e || window.event; only required when working in parameters for old browsers eg. explorer and they can go and suck it.

  if (e.keyCode == '38') {
    // up arrow
    changeBodyPart(-1) // -1 because head is [0] so to get from body [1] to head you need to -1
  } else if (e.keyCode == '40') {
    // down arrow
    changeBodyPart(1)
  } else if (e.keyCode == '37') {
    // left arrow
    changeOutfit(-1)
  } else if (e.keyCode == '39') {
    // right arrow
    changeOutfit(1)
  }
}

// ---- defaults and variables ------------

let outfitIndex = [0, 0, 0] // outfit index of which clothing on which part of the body, [0] is the head, [1] -body, [2] -shoes
let bodyIndex = 0 // index of which body part we are working with

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes') // links body part variable to the images in the HTML

let images = [head, body, shoes] // images to link to the HTML images
let strings = ['head', 'body', 'shoes'] // create an array of strings for replacing the src of the images

// ------- function for horizontal shift (outfit shift) --------

function changeOutfit(shift) {
  let index = outfitIndex[bodyIndex] // assigning index as outfitIndex passing through the body index
  let image = images[bodyIndex]
  let str = strings[bodyIndex] // tells the strings, images and outfits which part of the body we are working with

  index += shift

  if (index < 0) index = 5 // creates a lower limit, you can't go less than 0, going back from 0 you go back to 5

  if (index > 5) index = 0 // creates an upper limit so you can't go further than 5. After 5 you go back to 0

  outfitIndex[bodyIndex] = index // reassign the outfitIndex[bodyIndex]

  image.src = './images/' + str + index + '.png' // change image source
}

// --------- function for vertical shift (body part shift) ----------

function changeBodyPart(shift) {
  bodyIndex += shift

  if (bodyIndex < 0) bodyIndex = 2 // there are only 3 body parts, [0] head, [1] body, [2] shoes

  if (bodyIndex > 2) bodyIndex = 0
}
