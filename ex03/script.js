document.getElementById('cor').addEventListener('change', function() {
    var corSelecionada = this.value;
    
    
    var titulo = document.getElementById('titulo');
    var texto = document.getElementById('texto');

    
    switch(corSelecionada) {
        case 'vermelho':
            titulo.style.color = 'red';
            texto.style.color = 'red';
            break;
        case 'verde':
            titulo.style.color = 'green';
            texto.style.color = 'green';
            break;
        case 'azul':
            titulo.style.color = 'blue';
            texto.style.color = 'blue';
            break;
        case 'amarelo':
            titulo.style.color = 'yellow';
            texto.style.color = 'yellow';
            break;
        case 'roxo':
            titulo.style.color = 'purple';
            texto.style.color = 'purple';
            break;
        default:
            titulo.style.color = '';
            texto.style.color = '';
    }
});