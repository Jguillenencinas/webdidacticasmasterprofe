document.addEventListener('DOMContentLoaded', function() {
    const preguntas = [
      {
        pregunta: "¿Qué lenguaje se utiliza para estructurar el contenido de una página web?",
        respuestaCorrecta: "html"
      },
      {
        pregunta: "¿Qué lenguaje se utiliza para dar estilo a una página web?",
        respuestaCorrecta: "css"
      },
      {
        pregunta: "¿Qué lenguaje se utiliza para agregar interactividad a una página web?",
        respuestaCorrecta: "javascript"
      }
    ];
  
    let preguntaIndex = 0;
    let respuestasCorrectas = 0;
  
    const quizContainer = document.getElementById('quizContainer');
    const quiz = document.getElementById('quiz');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
  
    function mostrarPregunta(index) {
      quiz.innerHTML = `<p>${preguntas[index].pregunta}</p>
                        <input type="text" id="respuestaInput" placeholder="Escribe tu respuesta aquí">
                        <p id="respuestaMensaje" class="text-danger"></p>`;
    }
  
    function validarRespuesta(respuestaUsuario, respuestaCorrecta) {
      return respuestaUsuario.trim().toLowerCase() === respuestaCorrecta;
    }
  
    function validarYCorregir() {
      const respuestaInput = document.getElementById('respuestaInput');
      const respuestaMensaje = document.getElementById('respuestaMensaje');
      const respuestaUsuario = respuestaInput.value;
  
      if (respuestaUsuario === '') {
        respuestaMensaje.textContent = 'Por favor, ingresa una respuesta.';
        return;
      }
  
      if (validarRespuesta(respuestaUsuario, preguntas[preguntaIndex].respuestaCorrecta)) {
        respuestasCorrectas++;
      }
  
      if (preguntaIndex === preguntas.length - 1) {
        // Es la última pregunta, mostrar la nota y reiniciar el formulario
        mostrarNota();
        reiniciarFormulario();
      } else {
        // Pasar a la siguiente pregunta
        preguntaIndex++;
        mostrarPregunta(preguntaIndex);
      }
    }
  
    function mostrarNota() {
      const nota = `${respuestasCorrectas}/${preguntas.length}`;
      alert(`Tu nota es: ${nota}`);
    }
  
    function reiniciarFormulario() {
      preguntaIndex = 0;
      respuestasCorrectas = 0;
      mostrarPregunta(preguntaIndex);
    }
  
    mostrarPregunta(preguntaIndex);
  
    prevBtn.addEventListener('click', function() {
      if (preguntaIndex > 0) {
        preguntaIndex--;
        mostrarPregunta(preguntaIndex);
      }
    });
  
    nextBtn.addEventListener('click', function() {
      validarYCorregir();
    });
  
    quiz.addEventListener('input', function() {
      const respuestaMensaje = document.getElementById('respuestaMensaje');
      respuestaMensaje.textContent = '';
    });
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      validarYCorregir();
    });
  });
  