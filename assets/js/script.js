let ctaButton = document.querySelector(".opencta");
let introDiv = document.querySelector('.introQuestion');
let msgDiv = document.querySelector('.surpriseMsg');
window.addEventListener("pageshow", function () {
  ctaButton.classList.add("animateRipple");
});

ctaButton.addEventListener("click", function () {
  if (ctaButton.classList.contains("animateRipple"))
    ctaButton.classList.remove("animateRipple");
    introDiv.remove();
    msgDiv.classList.remove('hidden')
});
