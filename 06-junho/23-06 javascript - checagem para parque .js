var idade = Number(prompt("Digite sua idade: "))
var altura = Number(prompt("Digite sua idade em metros:"))
var peso = Number(prompt("Digite seu peso em kg: "))

if((idade> 12) && (altura >=1.50) && (peso>=50) && (peso<=130)){
    alert("Pode brincar! Aproveite!")
}else if(idade<12){
    alert("Você não pode brincar! A idade inserida é inválida!")
}else if(altura<1.50){
    alert("Você não pode brincar! A altura inserida é inválida!")
}else if((peso<=49) && (peso>=131)){
    alert("Você não pode brincar! O peso inserido é inválido!")
}
