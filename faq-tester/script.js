document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function (faqQuestion) {
    faqQuestion.addEventListener("click", function () {
      const faqAnswer = faqQuestion.nextElementSibling;

      // Toggle class 'active' to show/hide the answer
      faqAnswer.style.display =
        faqAnswer.style.display === "block" ? "none" : "block";
    });
  });
});
