// Criar um array e percorre-lo

const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90]

    console.log(pontos[9])


// INDO PARA O SEGUNDO EXERCICIO
console.log('                                       ')
console.log('                                       ')
console.log('         SEGUNDO EXERCICIO           ')
console.log('                                       ')
console.log('                                       ')



// Segundo exercicio

const informacoes = [5, 9 , 9 , 8 , 5 , 9]

console.log(informacoes[3])   

    informacoes.unshift(15, 20)
        
    console.log(informacoes)


console.log('                                       ')
console.log('                                       ')
console.log('         TERCEIRO EXERCICIO           ')
console.log('                                       ')
console.log('                                       ')
 
// Terceiro exercicio

let numeros = [5, 8, 9, 8, 5];

console.log(numeros[4]);
        // retira o ultimo numero
    numeros.pop();
            // imprime a variável mostrando o numero que foi retirado
    console.log(numeros);
                // cria uma função que recebe o valor da variável numero após ela ter sofrido a alteração
        let numerosModificados = numeros.map(value => value);
                    // imprime os dados da variavel numerosModificados
        console.log(numerosModificados);

console.log('                                       ')
console.log('                                       ')
console.log('          QUARTO EXERCICIO             ')
console.log('                                       ')
console.log('                                       ')                    

// Quarto exercicio

let numerosDoSorteio = [5, 9, 15, 35, 55, 60]

console.log(numerosDoSorteio[5]);

    let numerosNecessarios = numerosDoSorteio.slice(0,3) 

    console.log(numerosNecessarios)

console.log('                                       ')
console.log('                                       ')
console.log('           EXERCICIOS EXTRA            ')
console.log('                                       ')
console.log('                                       ')

// Exercicios extra

for(let programa = 0; programa < 26; programa++){
    console.log(programa * 11 )
};

for(let mult8 = 0; mult8 < 63; mult8 ++){
    console.log(mult8 * 8)
}

for(let tab5 = 0; tab5 < 10; tab5 ++){
    console.log(`${tab5} x 5 = ${tab5 * 5}`)
}



            



