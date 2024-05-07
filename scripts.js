// Função para lidar com o clique no botão
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

// Função para lidar com a tecla "Enter"
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        cliqueiNoBotao(); // Chama a função cliqueiNoBotao() quando a tecla "Enter" é pressionada
    }
});

let chave = 'cebcd482eda57fa9a6714c1c2ba91885';

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json());
    console.log(dados);
    colocarNaTela(dados);
    // AWAIT = ESPERE
    // FETCH -> FUNÇÃO DO JAVASCRIPT PARA ACESSAR SERVIDORES
    // THEN -> ENTÃO
    // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)
}

function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%";
}
