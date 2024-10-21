const botao = document.createElement("button")
botao.innerText = "Don't Click"

const bota = document.getElementsByTagName("body")
bota[0].appendChild(botao)

const div = document.createElement("div")
div.innerText = "Clico em"

botao.addEventListener("click", function(){
    bota[0].appendChild(div)
})