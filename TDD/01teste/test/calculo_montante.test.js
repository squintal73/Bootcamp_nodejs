const calculaValor = require ('../src/calcula-montante')

test('com uma prestacao o montante e igual ao capital', () => {
    // Operação 
    const montante = calculaValor.calculaMontante(100, 0.175, 1);
    // Resultado do comportamento esperado.
    expect(montante).toBe(100);
})