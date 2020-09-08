const $popupSuccess = document.querySelector('.popup__success')
const $popupFailure = document.querySelector('.popup__failure')
const $popupClose = document.querySelector('.popup__button')
const $form = document.forms.review
const $submit = $form.querySelector('.filter-form__button')

const fields = ['name', 'surname', 'phone', 'email']

$submit.addEventListener('click', (e) => {
  e.preventDefault()
  const $elements = $form.elements

  for (const field of fields) {
    console.log($elements[field].value)
    if (!$elements[field].value) {
      $popupFailure.classList.add('active')
      return false
    }
  }

  $popupSuccess.classList.add('active')

})

$popupClose.addEventListener('click', () => {
  $popupFailure.classList.remove('active')
  $popupSuccess.classList.remove('active')
})
