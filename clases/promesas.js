let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum > 0.4) {
            resolve(randomNum);
        } else {
            reject('El número es menor de 0.4');
        }
    }, 2500);
});

prom.then((num) => {
    console.log('PASA POR EL RESOLVE');
    console.log(num);
}).catch((err) => {
    console.log('PASA POR EL CATCH')
    console.log(err);
});

console.log('Termina Script');
