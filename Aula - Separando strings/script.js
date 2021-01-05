//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.

let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" ")
console.log(myArray) 

//.Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrases = "Eu quero viver o Amor"
let myArrays = phrase.split(" ")
let phraseWithUnderscores = myArrays.join("_")
console.log(phraseWithUnderscores) 