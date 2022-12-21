let storyOpening = document.querySelector('.story-opening')
let optionOne = document.querySelector('.option-one')
let optionOneScreen = document.querySelector('.option-one-screen')
let optionTwo = document.querySelector('.option-two')
let optionTwoScreen = document.querySelector('.option-two-screen')
let optionThree = document.querySelector('.option-three')
let optionThreeScreen = document.querySelector('.option-three-screen')
let optionFour = document.querySelector('.option-four')
let optionFourScreen = document.querySelector('.option-four-screen')
let optionFive = document.querySelector('.option-five')
let optionFiveScreen = document.querySelector('.option-five-screen')
let optionSix = document.querySelector('.option-six')
let optionSixScreen = document.querySelector('.option-six-screen')
let optionSeven = document.querySelector('.option-seven')
let optionSevenScreen = document.querySelector('.option-seven-screen')
let optionEight = document.querySelector('.option-eight')
let optionEightScreen = document.querySelector('.option-eight-screen')
let optionNine = document.querySelector('.option-nine')
let optionNineScreen = document.querySelector('.option-nine-screen')
let imageOne = document.querySelector('.image-one')


optionOne.onclick = function(){
  optionOneScreen.style.display = 'block'
  storyOpening.style.display = 'none'
  optionOne.style.display = 'none'
  optionTwo.style.display = 'none'
}

optionTwo.onclick = function(){
  optionTwoScreen.style.display = 'block'
  storyOpening.style.display = 'none'
  optionOne.style.display = 'none'
  optionTwo.style.display = 'none'
}

optionThree.onclick = function(){
  optionOneScreen.style.display = 'none'
  optionThreeScreen.style.display = 'block'
  optionTwoScreen.style.display = 'none'
  optionTwo.style.display = 'none'
}

optionFour.onclick = function(){
  optionFourScreen.style.display = 'block'
  optionOneScreen.style.display = 'none'
}

optionFive.onclick = function(){
  optionFiveScreen.style.display = 'block'
  optionFourScreen.style.display = 'none'
}

optionSix.onclick = function(){
  optionSixScreen.style.display = 'block'
  optionFourScreen.style.display = 'none'
}

optionSeven.onclick = function(){
  optionSevenScreen.style.display = 'block'
  optionFourScreen.style.display = 'none'
}

optionEight.onclick = function(){
  optionEightScreen.style.display = 'block'
  optionSevenScreen.style.display = 'none'
}

optionNine.onclick = function(){
  optionNineScreen.style.display= 'block'
  optionSevenScreen.style.display = 'none'
}

imageOne.onmouseover = function(){
imageOne.style.display
}








