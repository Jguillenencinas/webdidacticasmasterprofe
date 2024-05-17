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
  let tableRows = "";
  const form = document.getElementById('testForm');
 
  for (let i = 1; i <= 10; i++) {
    const questionId = `question${i}`;
    let userAnswer;
    let isCorrect = false;
    let correctAnswer = correctAnswers[questionId];
 
    if (questionId === 'question10') {
      // Obtener las opciones seleccionadas del select múltiple
      const selectedOptions = [...form[questionId].selectedOptions].map(option => option.value);
      isCorrect = selectedOptions.sort().toString() === correctAnswer.sort().toString();
      userAnswer = selectedOptions;
    } else if (questionId === 'question6') {
      // Obtener los checkboxes seleccionados
      const selectedCheckboxes = Array.from(document.querySelectorAll(`#${questionId} input:checked`)).map(checkbox => checkbox.value);
      isCorrect = selectedCheckboxes.sort().toString() === correctAnswer.sort().toString();
      userAnswer = selectedCheckboxes;
    } else if (Array.isArray(correctAnswer)) {
      const selectedOptions = [...form[questionId].selectedOptions].map(option => option.value);
      isCorrect = selectedOptions.sort().toString() === correctAnswer.sort().toString();
      userAnswer = selectedOptions;
    } else {
      userAnswer = form[questionId].value;
      isCorrect = userAnswer.toString().trim().toLowerCase() === correctAnswer.toString().trim().toLowerCase();
    }
 
    if (isCorrect) {
      score++;
      tableRows += `<tr><td>Pregunta ${i}</td><td class="correct">Correcto</td><td>${correctAnswer}</td></tr>`;
    } else {
      tableRows += `<tr><td>Pregunta ${i}</td><td class="incorrect">Incorrecto</td><td>${correctAnswer}</td></tr>`;
    }
  }
 
  const finalScore = (score / 10) * 100;
  const table = `
    <table class="results-table">
      <thead>
        <tr>
          <th>Pregunta</th>
          <th>Correcta o Incorrecta</th>
          <th>Respuesta Correcta</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    <h5>Tu calificación: ${finalScore}%</h5>
  `;
 
  document.getElementById('feedback').innerHTML = table;
}
 
document.getElementById('testForm').addEventListener('reset', function() {
  document.getElementById('feedback').innerHTML = '';
});