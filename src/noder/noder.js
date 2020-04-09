const openButtons = document.querySelectorAll('[data-node-target]')
const closeButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

let currentNode = null

openButtons.forEach(function (div) {
  div.addEventListener('click', function () {
    const node = document.querySelector(div.dataset.nodeTarget)
    openNode(node)
  })
})

closeButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const node = button.closest('.popup')
    closeNode(node)
  })
})

overlay.addEventListener('click', function () {
  closeNode(currentNode)
})

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeNode(currentNode)
  }
})

function openNode (node) {
  if (node == null) return

  currentNode = node

  node.classList.add('active')
  overlay.classList.add('active')
};

function closeNode (node) {
  if (node == null) return
  node.classList.remove('active')
  overlay.classList.remove('active')
};
