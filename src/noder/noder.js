var openButtons = document.querySelectorAll('[data-node-target]')
var closeButtons = document.querySelectorAll('[data-close-button]')
var overlay = document.getElementById('overlay')

console.log(openButtons)
console.log(closeButtons)

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

function openNode (node) {
  if (node == null) return
  node.classList.add('active')
  overlay.classList.add('active')
};

function closeNode (node) {
  if (node == null) return
  node.classList.remove('active')
  overlay.classList.remove('active')
};
