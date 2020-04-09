var dropdownTimeout

function toggleMenu () {
  const classList = document.querySelector('#menu').classList

  if (classList.contains('open')) {
    classList.remove('open')
    document.body.style = 'overflow: auto'
  } else {
    classList.add('open')
    document.body.style = 'overflow: hidden'
  }
}

window.addEventListener('load', function () {
  document.querySelector('#nav-toggle').addEventListener('click', toggleMenu)
})

window.showMusicDropdown = function () {
  const el = document.getElementById('menu')

  el.classList.add('show-dropdown')
}

window.hideMusicDropdown = function (delay) {
  if (delay) {
    dropdownTimeout = setTimeout(window.hideMusicDropdown, delay)
    return
  }

  const el = document.getElementById('menu')

  el.classList.remove('show-dropdown')
}

window.clearDropdownTimeout = function () {
  this.clearTimeout(dropdownTimeout)
}
