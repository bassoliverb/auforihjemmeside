window.toggleChords = function toggleChords (target) {
  const el = target.closest('.text-track')

  if (el.classList.contains('show')) {
    el.classList.remove('show')
  } else {
    el.classList.add('show')
  }
}
