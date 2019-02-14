let fenye = document.querySelector('.fenye')
let list = document.querySelectorAll('.fenye li')
let pre = document.querySelector('.fenye .pre')
let next = document.querySelector('.fenye .next')
let number = 1

fenye.addEventListener('click', function (e) {
  let target = e.target;
  let text = target.innerText * 1;
  if (text > 0) {
    number = text;
    for (let i = 0; i < list.length; i++) {
      list[i].className = list[i].className.replace('active', '');
    }
    list[number].className = "active";
  }
  if (target != pre) {
    if (text != 1) {
      pre.className = pre.className.replace('disable', '');
    } else {
      pre.className += " disable"
    }
  }
  if (target != next) {
    if (text <= list.length - 3) {
      next.className = next.className.replace('disable', '');
    } else {
      next.className += " disable"
    }
  }
})

pre.addEventListener('click', function (e) {
  if (number != 1) {
    number--;
    for (let i = 0; i < list.length; i++) {
      if (i != number) {
        list[i].className = list[i].className.replace('active', '');
      } else {
        list[i].className = "active";
      }
    }
    if (number == 1) {
      pre.className += " disable"
    }
  }
})

next.addEventListener('click', function () {
  if (number <= list.length - 3) {
    number++;
    for (let i = 0; i < list.length; i++) {
      if (i != number) {
        list[i].className = list[i].className.replace('active', '');
      } else {
        list[i].className = "active";
      }
    }
    if (number == list.length - 2) {
      next.className += " disable";
    }
  }
})