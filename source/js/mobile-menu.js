const $header = document.querySelector('.page-header')
const $buttonClose = $header.querySelector('.page-header__close-button')
const $buttonOpen = $header.querySelector('.page-header__toggle')

$header.classList.remove('no-js')

$buttonClose.addEventListener('click', () => {
  $header.classList.remove('active')
})

$buttonOpen.addEventListener('click', () => {
  $header.classList.add('active')
})
