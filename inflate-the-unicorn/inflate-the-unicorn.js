// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// Using the onclick method to call it, you will need to write a function that gets called every time you click on one of the unicorns.
// Once you have written your function, how do you know if it is being called or not? Often this is where we would use something like a console.log as it will show up in the Dev Tools console even if we haven't completed our function yet!

// an array containing the images
let images = document.getElementsByClassName('inflate-an-image')

// the ability to click on each unicorn
for (let i = 0; i < images.length; i++) {
  images[i].onclick = unicornClicked
}

// write a function that gets called every time you click on a unicorn
// figure out which unicorn was clicked
// increase its inflitation level
let inflationLevel0 = 0
let inflationLevel1 = 0
let inflationLevel2 = 0
// change the src of the image

function unicornClicked(e) {
  let unicorn = e.target
  console.log('You clicked on: ' + unicorn.id)

  // change inflation level
  // unicorn 0
  if (unicorn.id == 'Unicorn0') {
    inflationLevel0++
    // if statements use curly brackets {} if there is more than one line of code after it. If there's only one line of code then you dont need curlies.
    if (inflationLevel0 == 4) {
      inflationLevel0 = 0
      alert('Unicorn 0 says Thank you <3')
    }

    // change image src
    unicorn.src = './images/unicorn-' + inflationLevel0 + '.png'
  }

  // unicorn 1
  if (unicorn.id == 'Unicorn1') {
    inflationLevel1++

    if (inflationLevel1 == 4) {
      inflationLevel1 = 0
      alert('Unicorn 1 says Thank you <3')
    }

    unicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
  }

  //unicorn 2
  if (unicorn.id == 'Unicorn2') {
    inflationLevel2++

    if (inflationLevel2 == 4) {
      inflationLevel2 = 0
      alert('Unicorn 2 says Thank you <3')
    }

    unicorn.src = './images/unicorn-' + inflationLevel2 + '.png'
  }
}
