//Variáveis e tipos de dados

//Vamos começando declarando variáveis (declaration or declaração)
var name

//Atribuindo valores a uma variável (assignment or atribuição de valores)
name = "Maike"

//saber que tipo de dado foi colocado na variável

console.log(typeof name)
console.log( name)


//Podemos agrupar as declarações,fazer declarações conjuntas
let age,isHuman

age = 18
isHuman = true

//multiplos argumentos na função
console.log(name, age, isHuman)

//escrita de texto + variáveis

//concatenando valores
console.log('o ' + name + ' tem ' + age  + ' anos.')

//interpolando valores com template literals or template strings
console.log (`o ${name} tem ${age} anos`)