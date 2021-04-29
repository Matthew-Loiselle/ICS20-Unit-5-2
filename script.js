document.getElementById('imagebutton').addEventListener('click', imageswap)
document.getElementById('backgroundbutton').addEventListener('click', background)
document.getElementById('textswapper').addEventListener('click', swaptext)
document.getElementById('textbutton').addEventListener('click', hidetext)

function imageswap () {
  document.getElementById('shrimp').style.display = 'none'
  document.getElementById('deadshrimp').style.display = 'block'
}

function hidetext () {
  document.getElementById('SecondText').style.display = 'none'
}

function swaptext () {
  document.getElementById('FirstText').innerHTML = 'and it did'
}

function background () {
  document.body.style.backgroundColor = 'red'
}
