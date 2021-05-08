function scrollToTop() {
  event.preventDefault()
  let top = document.getElementById("top")
  top.scrollIntoView({ behavior: "smooth" })
}
function scrollToEat() {
  event.preventDefault()
  let howToEat = document.getElementById("how-to-eat")
  howToEat.scrollIntoView({ behavior: "smooth" })
}

function scrollReview() {
  event.preventDefault()
  let review = document.getElementById("reviews")
  review.scrollIntoView({ behavior: "smooth" })
}

function scrollIndex() {
  event.preventDefault()
  let index = document.getElementById("index")
  index.scrollIntoView({ behavior: "smooth" })
}
