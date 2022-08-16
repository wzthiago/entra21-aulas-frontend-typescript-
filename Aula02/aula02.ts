import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";

console.log("Aula 02 funcionou");

let animal1: Animal = new Animal("drosofila", "mosca", 0.5, ["ar", "lixo", "comida"])
console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitate[0]);
console.log(animal1.getEspecie);

animal1.nome = "Cachorro"
animal1.peso = 2.5
animal1.habitate[0] = "jardim"
animal1.setEspecie = "lupuscaninos"

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitate[0]);
console.log(animal1.getEspecie);

let animal2: Animal = new Animal("mamifero", "vaca", 200, ["terra", "mato", "agua"])
console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitate[0]);
console.log(animal2.getEspecie);

animal2.nome = "Cachorro"
animal2.peso = 1.5
animal2.habitate[0] = "jardim"
animal2.setEspecie = "caninos"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitate[0]);
console.log(animal2.getEspecie);


let animal3: Animal = new Animal("anfibio", "sapo", 0.3, ["agua", "microorganismos", "terra"])
console.log(animal3);
console.log(animal3.nome);
console.log(animal3.peso);
console.log(animal3.habitate[0]);
console.log(animal3.getEspecie);

animal3.nome = "Ra"
animal3.peso = 0.2
animal3.habitate[0] = "lugares humidos"
animal3.setEspecie = "sapeira"

console.log(animal3);
console.log(animal3.nome);
console.log(animal3.peso);
console.log(animal3.habitate[0]);
console.log(animal3.getEspecie);

let fulano: Aluno = new Aluno("Thiago", 31, [9,9,9])
console.log(fulano);
console.log(fulano.nome);
console.log(fulano.idade);
console.log(fulano.calcularMedia());
console.log(fulano.apresentar());


