function traduzir() {}

let inputTexto = document.querySelector(".input-texto")
let Traducaotexto = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")

async function traduzir() {
    console.log(inputTexto.value)

    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt-BR|"
        + idioma.value

    let resposta = await fetch(endereco)
    let dados = await resposta.json()

    Traducaotexto.textContent = dados.responseData.translatedText
    console.log(dados)
}

function ouvirvoz() {

    console.log("funcionou?")
    let voz = window.webkitSpeechRecognition
    let reconhecimento = new voz()
    reconhecimento.lang = "pt-BR"
    reconhecimento.onresult = (evento) =>
        console.log(evento)

}

reconhecimento.start()
