//tratamento de eventos
//tratamento de eventos
document.querySelector("#paginas").addEventListener("input", calcular);
document.querySelector("#tipo").addEventListener("change", calcular);
document.querySelector("#prototipo_sim").addEventListener("change", calcular);
document.querySelector("#prototipo_nao").addEventListener("change", calcular);

document.querySelector("#prazo").addEventListener("input", function() {
    const prazo= document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerText = "Nota: " + prazo;
    calcular();
})

function calcular() {
    //DOM- Document Object Model
    const qtdeDePaginas = parseInt(document.querySelector("#paginas").value);
    let valor = qtdeDePaginas * 1000;

    const tipo = document.querySelector("#tipo").value;
    if (tipo == 2) valor += 2000;

    const prototipo = document.querySelector("#prototipo_sim").checked;
    if (prototipo) valor *= 1.1;

    // Exiba o resultado em vez de tentar definir o valor do elemento #valor
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = valor.toFixed(2) + " horas";
}
function calcularHoras() {
    const filmes = {
        '1': 141,
        '2': 180,
        '3': 111,
        '4': 152,
        '5': 129,
        '6': 106,
        '7': 106,
        '8': 133,
        '9': 206,
        '10': 117
    };

    let totalMinutos = 0;

    const qtdeDeFilmes = document.querySelectorAll('.campo').length;

    for (let i = 1; i <= qtdeDeFilmes; i++) {
        const vezesAssistido = parseInt(document.querySelector(`#paginas${i}`).value);
        const nomeFilme = document.querySelector(`#tipo${i}`).value;
        totalMinutos += vezesAssistido * filmes[nomeFilme];
    }

    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    document.getElementById('resultado').innerText = `Você gastou um total de ${horas} horas e ${minutos} minutos assistindo aos filmes.`;
}

function registro() {
    // Lógica para registro aqui...
    console.log("Registro efetuado com sucesso!");
}



// Adiciona funcionalidade de clonagem do formulário
document.querySelector('.adicionar-filme').addEventListener('click', function() {
    var formularioExistente = document.querySelector('#formulario'); // Seleciona o formulário existente
    var novoFormulario = formularioExistente.cloneNode(true); // Clona o formulário existente

    // Limpa os valores dos campos do novo formulário
    novoFormulario.querySelectorAll('input[type="text"]').forEach(function(input) {
        input.value = '';
    });

});

// Adiciona funcionalidade de clonagem do formulário para múltiplas vezes
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('adicionar-filme')) {
        var formularioExistente = document.querySelector('#formulario'); // Seleciona o formulário existente
        var novoFormulario = formularioExistente.cloneNode(true); // Clona o formulário existente

        // Limpa os valores dos campos do novo formulário
        novoFormulario.querySelectorAll('input[type="text"]').forEach(function(input) {
            input.value = '';
        });

        // Adiciona o novo formulário após o último formulário clonado
        var formularioClonadoContainer = document.getElementById('formulario-clonado');
        formularioClonadoContainer.appendChild(novoFormulario); // Adiciona o formulário clonado no espaço reservado
    }
});
// Select the form and the place where you want to display the result
const form = document.querySelector('form');
const resultDisplay = document.getElementById('result-display');

// Add event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting in the default way
  event.preventDefault();

  // Initialize total minutes
  let totalMinutes = 0;

  // Loop through the form elements
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];

    // If the element is an input and its name is movie, process the data
    if (element.name === 'movie' && element.value!== 'Select') {
      // Get the movie minutes and the times watched
      const movieMinutes = movieMinutesList[element.value];
      const timesWatched = form.elements['timesWatched' + i].value;

      // Multiply the movie minutes by the number of times watched and add it to totalMinutes
      totalMinutes += movieMinutes * timesWatched;
    }
  }

  // Convert total minutes to hours and minutes
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Display the result on the page
  resultDisplay.textContent = `You spent ${hours} hours and ${minutes} minutes watching movies.`;
});

// Create an object with movie minutes
const movieMinutesList = {
  PobresCriaturas: 141,
  Oppenheimer: 180,
  Barbie: 111,
  AnatomyOfAFall: 152,
  Maestro: 129,
  PastLives: 106,
  InterestZone: 106,
  TheRejects: 133,
  MoonflowerKillers: 206,
  AmericanFiction: 117,
};
// Adiciona event listener ao botão "Enviar"
document.querySelector('.meu-botao.enviar').addEventListener('click', function() {
    calcular(); // Calcula as horas antes de chamar a função de registro
    registro(); // Chama a função de registro
});

