let meuArray = [1, "dois", true, { chave: "valor" }];


console.log(meuArray[0]); // Saída: 1
console.log(meuArray[1]); // Saída: dois
console.log(meuArray[2]); // Saída: true
console.log(meuArray[3]); // Saída: { chave: "valor" }

//Retornar o tamanho do array
let tamArray = meuArray.length
console.log(tamArray);

//Inserir novo dado no array
meuArray.push("Aula"); //ultima posição
meuArray.unshift("Primeiro"); //primeira posição

meuArray.pop(); //Remove a ultima posição do array
meuArray.shift() //Remove a primeira a primeira posição
console.log(meuArray);

for(let i=0; i<meuArray.length; i++){
    console.log(`Posição [${i}]: ${meuArray[i]}`);
}

meuArray.forEach((p, i) =>{
    console.log(p);
    console.log(i);
});

