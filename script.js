$(document).ready(function() {
    $("#modalidad_trabajo").on("change", function() {
      valSelectJob = $(this).val();
      select_value = 0;
      number = 0;
      if (valSelectJob == "sin_retiro") {
        $('#con_retiro').hide();
        $('#sin_retiro').show();
        $('#categoria_trabajo').show();
        $('#horas_trabajadas').show();
        $('#label_horas_trabajadas').show();
        $('#boton_calcular').show();
      } else if (valSelectJob == "con_retiro") {
        $('#sin_retiro').hide();
        $('#con_retiro').show();
        $('#categoria_trabajo').show();
        $('#horas_trabajadas').show();
        $('#label_horas_trabajadas').show();
        $('#boton_calcular').show();
      } else {
        $('#sin_retiro').hide();
        $('#con_retiro').hide();
        $('#categoria_trabajo').hide();
        $('#horas_trabajadas').hide();
        $('#label_horas_trabajadas').hide();
        $('#boton_calcular').hide();
        $('#boton_calcular').hide();
      }
    });
    $("select").on("change", function() {
      $("#horas_trabajadas").val(0);
      $('#textDiv').hide();
    });
    $("#con_retiro").on("change", function() {
      select_value = document.getElementById('con_retiro').value;
    });
    $("#sin_retiro").on("change", function() {
      select_value = document.getElementById('sin_retiro').value;
    });
    $("#boton_calcular").on("click", function() {
      jobTime = $("#horas_trabajadas").val();
      var div = document.getElementById("textDiv");
      if (jobTime > 48) {
        div.textContent = '$'.concat(' ', select_value);
      } else if (jobTime >= 0) {
        producto = select_value / 48;
        total = producto * jobTime;
        total = total.toFixed(2);
        div.textContent = '$ '.concat(total);
      } else {
        div.textContent = '$ '.concat(0);
      }
      var text = div.textContent;
      $('#textDiv').show();
    });
  
  });