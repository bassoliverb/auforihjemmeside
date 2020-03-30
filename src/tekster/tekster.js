window.toggleChords = function toggleChords (target) {
  const el = target.closest('.text-track')
  const songTitle = el.querySelector('h1').innerText

  if (el.classList.contains('show')) {
    el.classList.remove('show')
    window.gtag('event', 'hide', {
      event_category: 'Chords',
      event_label: songTitle
    })
  } else {
    el.classList.add('show')
    window.gtag('event', 'show', {
      event_category: 'Chords',
      event_label: songTitle
    })
  }
}
