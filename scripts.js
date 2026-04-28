//Fução IA
function traduzir() { }

let inputTexto = document.querySelector(".input-texto");
let Traducaotexto = document.querySelector(".traducao");
let idioma = document.querySelector(".idioma");

async function traduzir() {
    console.log(inputTexto.value);

    let endereco =
        "https://api.mymemory.translated.net/get?q=" +
        inputTexto.value +
        "&langpair=pt|" +
        idioma.value;

    let resposta = await fetch(endereco);
    let dados = await resposta.json();

    Traducaotexto.textContent = dados.responseData.translatedText;
    console.log(dados);
}
//Função Traduzir
function ouvir() {
    let voz = window.webkitSpeechRecognition;

    let reconhecimento = new voz();

    reconhecimento.lang = "pt";

    reconhecimento.onresult = (evento) => {
        let TextoTranscricao = evento.results[0][0].transcript;
        inputTexto.textContent = TextoTranscricao;
        console.log(TextoTranscricao);
        traduzir()

    };

    reconhecimento.start();
}
