

let inputTexto = document.querySelector(".input-texto")
let Traducaotexto = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")

async function traduzir() {
    console.log(inputTexto.value)

    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt|"
        + idioma.value

    let resposta = await fetch(endereco)
    let dados = await resposta.json()

    Traducaotexto.textContent = dados.responseData.translatedText
    console.log(dados)
}





