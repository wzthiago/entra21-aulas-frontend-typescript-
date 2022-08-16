let nome = "Thiago Souza";
let idade = 31;
console.log(nome, idade);
$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Thiago" && idade == 31) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return "A soma foi esta:" + numA + numB;
}
console.log("A soma deu", somar(1, 5));
