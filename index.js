// let newColours = document.querySelectorAll('a')
// let hardBox = document.querySelectorAll('.hard')
// console.log(newColours)

// newColours[1].addEventListener('click', function () {
//     for (let i = 0; i < hardBox.length; i++) {
//         hardBox[i].classList.add('remove')
//     }
// })

// newColours[2].addEventListener('click', function () {
//     for (let i = 0; i < hardBox.length; i++) {
//         hardBox[i].classList.remove('remove')
//     }
// })

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// let colours = document.querySelectorAll('.colours')

// for (let i = 0; i < colours.length; i++) {
//     colours[i].style.backgroundColor = 'rgb(244, 124, 202)'

// }

// console.log(getRandomInt(1, 5))


let colourList = [
    'rgb(234, 33, 32)',
    'rgb(44, 133, 232)',
    'rgb(234, 33, 232)',
    'rgb(34, 0, 32)',
    'rgb(234, 33, 132)',
    'rgb(34, 0, 12)'
]

let square = document.querySelectorAll('.square')
let correctColor = document.querySelector('span')
let msg = document.querySelector('#msg')
let topHeader = document.querySelector('.top-header')

let pickedColor = colourList[3]
correctColor.textContent = pickedColor
let count = 0
for (let i = 0; i < square.length; i++) {
    square[i].style.background = colourList[i]
    
    square[i].addEventListener('click', function () {
        count++
        if (square[i].style.background === pickedColor && count < 4) {
            msg.textContent = 'Corret!'
            similarColor(square, pickedColor)
            
        }
        else if (count < 4) {
            this.style.background = '#232323'
            msg.textContent = 'Try Again!'

        }
        else if (count > 3) {
            alert('Your chances are up!')
        }
        
    })
    
}

let similarColor = function (li, correct) {
    for (var i = 0; i < li.length; i++) {
        li[i].style.background = correct
        topHeader.style.background = correct

    }

}