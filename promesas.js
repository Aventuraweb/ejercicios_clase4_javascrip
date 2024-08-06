const numeros = [];

const num1 = 1; 
const num2 = 1; 

function nuevonumero(a, b){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if ( a !== 'number' || b !== 'number'){
                resolve(a+b)
            }else{
                reject('Los numeros no son validos')
            }
        }, 2000); 
    }); 
}

nuevonumero(num1, num2)
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 2);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 3);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 4);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 5);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 6);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 7);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 8);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 9);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 10);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 11);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 12);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 13);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 14);
    })
    .then( resultado => {
        console.log(resultado);
        numeros.push(resultado); 
        console.log(numeros);
        return nuevonumero(resultado, 15);
    })
    .then((resultado) => {
        numeros.push(resultado);
        console.log(numeros);
    })
    .catch((error) => {
        console.log(error);
    });
    


