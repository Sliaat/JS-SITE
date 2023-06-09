const formulario = document.getElementById('meuFormulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const errorDiv = document.getElementById('error-message');
const sucessDiv = document.getElementById('sucess-message');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);
    if (valorB > valorA) {
        campoA.style.border = '';
        errorDiv.textContent = '';
        const mensagemSucesso = document.createElement('p');
        mensagemSucesso.textContent = 'Parabéns! O valor do campo B é maior que o valor do campo A.';
        sucessDiv.innerHTML = '';
        sucessDiv.appendChild(mensagemSucesso);
        sucessDiv.style.display = 'block'; 
        errorDiv.style.display = 'none';
        formulario.reset();
        return true;
    } else {
        campoA.style.border = '1px solid red'; 
        errorDiv.textContent = 'O valor do campo B não pode ser menor ou igual ao campo A';
        sucessDiv.innerHTML = '';
        errorDiv.style.display = 'block'; 
        sucessDiv.style.display = 'none'; 
        return false;
    }
});






