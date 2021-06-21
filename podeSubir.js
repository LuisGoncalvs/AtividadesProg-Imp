// Exercício 'Pode Subir';

// Primeiros criamos uma função

function podeSubir (altura , acompanhada){
    if(typeof altura !== "number" || typeof acompanhada !== "boolean" ){
        return "Digite no primeiro argumento sua altura em numero e no segundo argumento, true ou false"
    }
    else if (altura > 140 && altura <= 200) {
        return "Pode Subir"
    }  
    else if (altura <= 140 && altura >= 120 && acompanhada === true){
        return "Pode subir, pois está acompanhada"
    }
    else if (altura <= 140 && altura >= 120 && acompanhada === false){
        return "Não pode subir, necessita de um acompanhante"
    }
    else if (altura < 120 || altura < 200){
        return "Não pode subir, sua altura não é permitida"
    }
     
}

console.log(podeSubir(180, false ))
    