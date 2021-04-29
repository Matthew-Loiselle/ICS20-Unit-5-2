document.getElementById('imagebutton').addEventListener('click', imageswap)

function imageswap () {
  document.getElementById('shrimp').style.display = "none"
  document.getElementById('deadshrimp').style.display = "block"
}

document.getElementById('textbutton').addEventListener('click', hidetext)

function hidetext () {
  document.getElementById('SecondText').style.display = "none"
}

document.getElementById('textswapper').addEventListener('click', swaptext)

function swaptext () {
  document.getElementById('FirstText').innerHTML = "and it did"
}

document.getElementById('backgroundbutton').addEventListener('click', background)

function background () {
  document.body.style.backgroundColor = "red"
}
