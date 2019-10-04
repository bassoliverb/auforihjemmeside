function toggleMenu () {
  const classList = document.querySelector('#menu').classList

  if (classList.contains('open')) {
    classList.remove('open')
  } else {
    classList.add('open')
  }
}

window.addEventListener('load', function () {
  document.querySelector('#nav-toggle').addEventListener('click', toggleMenu)
})
