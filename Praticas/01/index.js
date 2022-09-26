const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCnh: true,
    apelidos: ["jr, Juninho"]
};

textoCnh = pessoa.temCnh ? "possui" : "não possui";

// if (pessoa.temCnh === true) {
//     pessoa.temCnh = "possui";
// } else {
//     pessoa.temCnh = "não possui";
// }

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCnh} CNH e tem os seguintes apelidos: ${pessoa.apelidos}.`);