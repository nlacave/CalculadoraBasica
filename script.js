document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('survey-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var inputNumero1 = document.getElementById('numero1');
      var inputNumero2 = document.getElementById('numero2');
      var resultadoInput = document.getElementById('resultado');
  
      var numero1 = parseFloat(inputNumero1.value);
      var numero2 = parseFloat(inputNumero2.value);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        resultadoInput.value = 'Operación Inválida.';
        return;
      }

      var operacion = parseInt(event.submitter.getAttribute('operacion-aritmetica'));

  
      function calcular(operacion) {
        if (operacion === 1) {
          return numero1 + numero2;
        } else if (operacion === 2) {
          return numero1 - numero2;
        } else if (operacion === 3) {
          return numero1 * numero2;
        } else if (operacion === 4) {
          if (numero2 === 0) {
            return "No es posible dividir por cero";
          } else {
            return numero1 / numero2;
          }
        }
      }
  
      resultadoInput.value = calcular(operacion);
    });
  });
  