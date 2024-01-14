// faq toggle

const faqQuestions = document.getElementsByClassName("card-faq-question");

for (let i = 0; i < faqQuestions.length; i++) {
  const faqQuestion = faqQuestions[i];

  faqQuestion.addEventListener("click", (event) => {
    const currentFaqQuestion = event.currentTarget;
    const faqAnswer = currentFaqQuestion.nextElementSibling;
    const faqSignImage = currentFaqQuestion.lastElementChild;

    faqAnswer.style.display =
      faqAnswer.style.display === "block" ? "none" : "block";

    faqSignImage.src = faqSignImage.src.includes("icon-plus.svg")
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  });
}
