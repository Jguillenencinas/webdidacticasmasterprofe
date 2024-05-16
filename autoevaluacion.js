$(document).ready(function() {
  $("#testForm").submit(function(event) {
    event.preventDefault();
    
    // Obtener respuestas
    var preguntaHTML = $("#preguntaHTML").val().trim().toLowerCase();
    var respuestaRadioCSS = $("input[name='respuestaRadioCSS']:checked").val();
    var respuestaSelectJS = $("#respuestaSelectJS").val();
    var respuestaCheckboxHTML = $("input[name='respuestaCheckboxHTML[]']:checked").map(function() {
      return $(this).val();
    }).get();
    var respuestaSelectMultipleJS = $("#respuestaSelectMultipleJS").val();
    
    // Variables para almacenar respuestas correctas e incorrectas y opciones correctas
    var respuestasCorrectas = 0;
    var respuestasIncorrectas = 0;
    var opcionesCorrectas = {
      preguntaHTML: "hyper text markup language",
      respuestaRadioCSS: "opcion1",
      respuestaSelectJS: ["opcion1"],
      respuestaCheckboxHTML: ["opcion1"],
      respuestaSelectMultipleJS: ["opcion1"]
    };

    // Calcular respuestas correctas
    if (preguntaHTML === opcionesCorrectas.preguntaHTML) respuestasCorrectas++;
    if (respuestaRadioCSS === opcionesCorrectas.respuestaRadioCSS) respuestasCorrectas++;
    if (respuestaSelectJS && respuestaSelectJS.includes(opcionesCorrectas.respuestaSelectJS[0])) respuestasCorrectas++;
    if (respuestaCheckboxHTML && respuestaCheckboxHTML.includes(opcionesCorrectas.respuestaCheckboxHTML[0])) respuestasCorrectas++;
    if (respuestaSelectMultipleJS && respuestaSelectMultipleJS.includes(opcionesCorrectas.respuestaSelectMultipleJS[0])) respuestasCorrectas++;
    
    // Calcular respuestas incorrectas y mostrar opciones correctas
    if (preguntaHTML !== opcionesCorrectas.preguntaHTML) {
      respuestasIncorrectas++;
      $("#preguntaHTML").val(opcionesCorrectas.preguntaHTML);
    }
    if (respuestaRadioCSS !== opcionesCorrectas.respuestaRadioCSS) {
      respuestasIncorrectas++;
      $("input[name='respuestaRadioCSS'][value='" + opcionesCorrectas.respuestaRadioCSS + "']").prop('checked', true);
    }
    if (respuestaSelectJS && !respuestaSelectJS.includes(opcionesCorrectas.respuestaSelectJS[0])) {
      respuestasIncorrectas++;
      $("#respuestaSelectJS").val(opcionesCorrectas.respuestaSelectJS[0]);
    }
    if (respuestaCheckboxHTML && !respuestaCheckboxHTML.includes(opcionesCorrectas.respuestaCheckboxHTML[0])) {
      respuestasIncorrectas++;
      $("input[name='respuestaCheckboxHTML[]'][value='" + opcionesCorrectas.respuestaCheckboxHTML[0] + "']").prop('checked', true);
    }
    if (respuestaSelectMultipleJS && !respuestaSelectMultipleJS.includes(opcionesCorrectas.respuestaSelectMultipleJS[0])) {
      respuestasIncorrectas++;
      $("#respuestaSelectMultipleJS").val(opcionesCorrectas.respuestaSelectMultipleJS);
    }

    // Mostrar diálogo antes de mostrar el resultado
    var mensaje = "Inténtalo de nuevo!\n\nRespuestas correctas: " + respuestasCorrectas + "\nRespuestas incorrectas: " + respuestasIncorrectas + "\n\nReinicia el test para intentarlo de nuevo (verás las respuestas corectas a continuación).";
    alert(mensaje);
  });

  $("#reiniciar").click(function() {
    // Limpiar formulario
    $("#testForm")[0].reset();
    // Limpiar resultado
    $("#resultado").empty();
  });
});
