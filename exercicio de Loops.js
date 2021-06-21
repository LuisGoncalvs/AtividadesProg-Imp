// Exercicio de Loops

for (let papagaio = 0; papagaio < 5; papagaio++){
console.log("Olá mundo");
}

function soNumerosImpares(){
for(let i = 1; i<10; i++){
    if ((i % 2) != 0){
        console.log(i)
    }
}
}

soNumerosImpares()


function tabuada(){
    for(var num1 = 1; num1 <10; num1++){
        for(var num2 = 1; num2 <10; num2 ++){
            console.log(`${num2} x ${num1} = ${(num2*num1)}`)
        }
    }
}
tabuada(1)
