// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
// assim como a quantidade de dias pelos quais o carro foi alugado.
// Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

kmPercorridos = 8500
quantidadeDias = 45
precoApagar = (60 * quantidadeDias) + (0.15 * kmPercorridos)

console.log(`O preço a pagar pelo aluguel é R$ ${precoApagar}.`)