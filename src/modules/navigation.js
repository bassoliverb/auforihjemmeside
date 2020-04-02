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

window.toggleMusicDropdown = function toggleMusicDropdown () {
  const el = document.getElementById('nav')

  if (el.classList.contains('show-dropdown')) {
    el.classList.remove('show-dropdown')
  } else {
    el.classList.add('show-dropdown')
  }
}
