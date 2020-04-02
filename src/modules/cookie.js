window.cookieReadmore = function cookieReadmore () {
  document.getElementById('cookie-warning').classList.add('open')
}

window.acceptCookies = function acceptCookies () {
  window.localStorage.setItem('cookie-consent', 'accepted')
  document.getElementById('cookie-warning').classList.remove('show')
}

window.rejectCookies = function acceptCookies () {
  window.localStorage.setItem('cookie-consent', 'rejected')
  document.getElementById('cookie-warning').classList.remove('show')
}
