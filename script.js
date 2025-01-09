var botao = document.getElementById("botao")
var origem = document.getElementById("origem")
var destino = document.getElementById("destino")
var res = document.getElementById("res")
var input = document.getElementById("input")

document.addEventListener("keydown", (event) => {
    // Verifica se a tecla pressionada é o "Enter"
    if (event.key === "Enter") {
      botao.click(); // Aciona o clique no botão
    }
  });


function converter() {
    if (origem.value == 'real' && destino.value == 'dolar') {
       res.innerHTML=`<strong> O valor convertido é <span style="color:;">${Math.trunc(input.value / 6.14)} US$</span></strong>`
    } else if (origem.value == 'dolar' && destino.value == 'real')  {
        res.innerHTML = `<strong>O valor convertido é <span style="color:;">${Math.trunc(input.value * 6.14)} R$</span></strong>`
    } else if (origem.value == 'euro' && destino.value == 'real') {
        res.innerHTML = `O valor convertido é <span style="color:;"> ${input.value * 6.46} R$</span>`

    } else if (origem.value == 'real' && destino.value == 'euro') {
        res.innerHTML = `O valor convertido é <span style="color:;">${Math.trunc(input.value / 6.46)} €</span>`
    } else if (origem.value == 'dolar' && destino.value == 'euro')  {
        res.innerHTML = `O valor convertido é <span style="color:;">${Math.trunc(input.value * 0.95)} €</span>`
    } else if (origem.value == 'euro' && destino.value == 'dolar') {
        res.innerHTML = `O valor convertido é <span style="color:;">${Math.trunc(input.value / 0.95)} US$</span>`
    } else if (origem.value == destino.value)
        alert('Não é possivel fazer a conversão !')
}
