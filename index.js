/*
De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno,
 crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de 
 *arrow functions* para calcular as operações abaixo.

Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário 
implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no 
javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser 
chamada diretamente no console).
*/

const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)


const weigthedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

console.log(`Média ponderada: ${weigthedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
     {number: 10, weight: 1 },
)}`)

const median = (...numbers) => { 
    const orderedNumbers = [...numbers].sort((a,b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 !==0){
        return orderedNumbers [middle]
    }

    const firstMedian = orderedNumbers[middle -1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2,5,6,8,7,3,1)}`)
console.log(`Mediana: ${median(1,2,3,1,2,5)}`)


const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter (n => num === n).length
    ])

    quantities.sort((a,b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(5,4,5,6,4,8,5,6,8,5,4,6,5,8,4,6,5,21,3,2,5,1,12,3,7,8,9,8,7,8,6,5,4,2,1,3,5,48,9,7,89)}`)