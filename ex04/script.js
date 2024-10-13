const checkboxChocolate = document.getElementById('Chocolate');
const opcoesTorra = document.querySelectorAll('input[name="torra"]');
    
checkboxChocolate.addEventListener('change', function() {
     if (checkboxChocolate.checked) {
         opcoesTorra.forEach(opcao => {
                opcao.disabled = true;
            });
        } else {
            opcoesTorra.forEach(opcao => {
            opcao.disabled = false;
                });
            }
     });
   