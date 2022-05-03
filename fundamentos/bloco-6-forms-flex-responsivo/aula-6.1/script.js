const checkTerm_checkbox = document.getElementById('term-check');
const sendButton_button = document.getElementById('submit-form');
const clearForm_button = document.getElementById('clear-form');
const tripForm_form = document.querySelector('form');

sendButton_button.addEventListener('click', (e) => {
  if (!checkTerm_checkbox.checked) {
    e.preventDefault();
    alert('Para participar da promoção, você deve concordar com a divulgação de suas fotos.')
  }
  const valueLengthName = document.querySelector('#user-name').value.length;
  const valueLengthEmail = document.querySelector('#user-email').value.length;
  if (valueLengthName < 10 || valueLengthName > 40) {
    alert('Dados Inválidos');
  } else if (valueLengthEmail < 10 || valueLengthEmail > 50) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});

clearForm_button.addEventListener('click', (e) => {
  tripForm_form.reset();
});