

let inputTexto = document.querySelector(".input-texto")

async function traduzir() {
    console.log(inputTexto.value)

    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt|en"

    let resposta = await fetch(endereco)
    let dados = await resposta.json()

    Traducaotexto.textContent = dados.responseData.translatedText
    console.log(dados)
}

let Traducaotexto = document.querySelector(".traducao")



