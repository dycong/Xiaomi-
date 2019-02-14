let left = document.querySelector('.jieshao .left')
let green = document.querySelector('.jieshao .left .green')
let big = document.querySelector('.jieshao .big')
let bigImg = document.querySelector('.jieshao .big img')

let leftWidth = parseInt(getComputedStyle(left)['width'])
let greenWidth = parseInt(getComputedStyle(green)['width'])
let bigWidth = parseInt(getComputedStyle(big)['width'])
let bigImgWidth = parseInt(getComputedStyle(bigImg)['width'])

let maxLeft = leftWidth - greenWidth
let maxTop = maxLeft
let scale = (bigImgWidth - bigWidth) / (leftWidth - greenWidth)
console.log(scale)

left.addEventListener('mousemove', function (e) {
  let left = e.offsetX - greenWidth / 2
  let top = e.offsetY - greenWidth / 2

  left = left >= 0 ? left : 0
  top = top >= 0 ? top : 0

  left = left <= maxLeft ? left : maxLeft
  top = top <= maxTop ? top : maxTop

  green.style.left = left + 'px'
  green.style.top = top + 'px'

  bigImg.style.left = -left * scale + 'px'
  bigImg.style.top = -top * scale + 'px'
})