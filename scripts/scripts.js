const container = document.querySelector('.rating-container')
const thankyouContainer = document.querySelector('.thankyou-container')
const errorContainer = document.querySelector('.error-container')
const radioButtons = document.querySelectorAll('input[name="rating"]')
const selectedText = document.querySelector('.thankyou-selected')

let checkedRating

const submitRating = () => {
  for (i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedRating = radioButtons[i].value
    }
  }

  if (checkedRating === undefined) {
    errorContainer.classList.remove('invisible')
    setTimeout(() => {
      errorContainer.classList.add('invisible')
    }, 3000)
  } else {
    selectedText.innerHTML = `You selected ${checkedRating} out of 5`

    thankyouContainer.classList.add('block')
    container.classList.add('hidden')
  }
}
