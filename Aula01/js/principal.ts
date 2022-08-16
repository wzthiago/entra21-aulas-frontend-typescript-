let nome: string = "Thiago Souza";
let idade: number = 31;

console.log(nome, idade);

$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body")

function teste(): number {
    return 0

}

function dados(nome: string, idade: number): boolean {
    if (nome == "Thiago" && idade == 31) {
        return true;
    } else {
        return false;
    }
}

function somar(numA: number, numB: number) {
    return "A soma foi esta:" + numA + numB
}

console.log("A soma deu", somar(1,5));