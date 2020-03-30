window.toggleChords = function toggleChords (target) {
  const el = target.closest('.text-track')
  const songTitle = el.querySelector('h1').innerText

  if (el.classList.contains('show')) {
    el.classList.remove('show')
  } else {
    el.classList.add('show')
    window.ga('send', 'event', 'Tekster', 'Vis akkorder', songTitle)
  }
}
