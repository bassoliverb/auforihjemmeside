const songs = {
  aabne_favne: {
    src: '/audio/aabne_favne.mp3',
    title: 'Åbne Favne'
  }
}

let currentAudio = null
let currentSong = null

function padNum (n) {
  return n < 10 ? '0' + n : n
}

function formatTime (time) {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor((time % 60))

  if (hours) {
    return hours + ':' + padNum(minutes) + ':' + padNum(seconds)
  }
  return minutes + ':' + padNum(seconds)
}

window.playSong = function playSong (id) {
  if (currentSong === id) {
    return window.toggleSong()
  }

  if (currentAudio) {
    currentAudio.pause()
    document.getElementById('song-play-' + currentSong).src = '/images/play-icon.svg'
  }

  currentSong = id
  const song = songs[id]

  const audio = new window.Audio(song.src)
  currentAudio = audio
  audio.addEventListener('canplay', function () {
    audio.play()
    document.getElementById('player').classList.remove('hidden')
    document.getElementById('song-title').innerText = song.title
    document.getElementById('song-time').innerText = '0:00 / ' + formatTime(audio.duration)
    document.getElementById('button-play-icon').classList.add('hidden')
    document.getElementById('button-pause-icon').classList.remove('hidden')
    document.getElementById('song-play-' + id).src = '/images/pause-icon.svg'
    document.getElementById('button-stop').classList.add('hidden')
  })
  audio.addEventListener('timeupdate', function () {
    document.getElementById('song-time').innerText = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration)
  })
  audio.addEventListener('ended', window.stopSong)
}

window.toggleSong = function toggleSong () {
  if (currentAudio.paused) {
    currentAudio.play()
    document.getElementById('button-play-icon').classList.add('hidden')
    document.getElementById('button-pause-icon').classList.remove('hidden')
    document.getElementById('song-play-' + currentSong).src = '/images/pause-icon.svg'
    document.getElementById('button-stop').classList.add('hidden')
  } else {
    currentAudio.pause()
    document.getElementById('button-play-icon').classList.remove('hidden')
    document.getElementById('button-pause-icon').classList.add('hidden')
    document.getElementById('song-play-' + currentSong).src = '/images/play-icon.svg'
    document.getElementById('button-stop').classList.remove('hidden')
  }
}

window.stopSong = function stopSong () {
  if (currentSong && currentAudio) {
    document.getElementById('song-play-' + currentSong).src = '/images/play-icon.svg'
    document.getElementById('button-stop').classList.add('hidden')
    document.getElementById('player').classList.add('hidden')
    currentAudio.pause()
    currentAudio = null
    currentSong = null
  }
}
