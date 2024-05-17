const correctAnswers = {
  question1: "ul",
  question2: 3,
  question3: "azul",
  question4: "sí",
  question5: 4,
  question6: ["img", "picture"],
  question7: "javascript",
  question8: "html",
  question9: "css",
  question10: ["ul", "li", "ol"]
};

function submitForm() {
  let score = 0;
  let feedback = "";
  const form = document.getElementById('testForm');

  for (let i = 1; i <= 10; i++) {
      const questionId = `question${i}`;
      let userAnswer;
      let isCorrect = false;

      if (questionId === 'question10' || questionId === 'question6') {
          const selectedCheckboxes = Array.from(document.querySelectorAll(`#${questionId} input:checked`)).map(checkbox => checkbox.value);
          isCorrect = selectedCheckboxes.sort().toString() === correctAnswers[questionId].sort().toString();
      } else if (Array.isArray(correctAnswers[questionId])) {
          const selectedOptions = [...form[questionId].selectedOptions].map(option => option.value);
          isCorrect = selectedOptions.sort().toString() === correctAnswers[questionId].sort().toString();
      } else {
          userAnswer = form[questionId].value;
          isCorrect = userAnswer.toString().trim().toLowerCase() === correctAnswers[questionId].toString().trim().toLowerCase();
      }

      if (isCorrect) {
          score++;
          feedback += `<p>Pregunta ${i}: <span class="text-success">Correcto</span></p>`;
      } else {
          feedback += `<p>Pregunta ${i}: <span class="text-danger">Incorrecto</span></p>`;
      }
  }

  const finalScore = (score / 10) * 100;
  feedback += `<h5>Tu calificación: ${finalScore}%</h5>`;
  document.getElementById('feedback').innerHTML = feedback;
}

document.getElementById('testForm').addEventListener('reset', function() {
  document.getElementById('feedback').innerHTML = '';
});
