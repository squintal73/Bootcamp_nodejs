const numeros = parseInt(process.argv[2])
//const numeros = 20;
const multiplos = []
for (let i = 1; i < numeros; i++ ) {
    if ((i % 3 === 0 ) || (i % 5 === 0 )) {
        multiplos.push(i)
    }
}

console.log(multiplos)