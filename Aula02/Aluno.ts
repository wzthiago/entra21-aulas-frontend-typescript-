export class Aluno {
    public nome: string
    public idade: number
    public notas: Array<number>

    constructor(nome: string, idade: number, notas: Array<number>,) {
        this.nome = nome
        this.idade = idade
        this.notas = notas
    }

    public apresentar(): string {
        return `Ola meu nome é ${this.nome} e tenho ${this.idade} anos`
    }

    public calcularMedia(): number {
        let soma: number = 0
        this.notas.forEach(nota => {
            soma += nota
        });
        return soma / this.notas.length
        //esta linha faz a media em um codigo menor
       //return this.notas.reduce((anterior,posterior) => anterior+posterior,0 ) / this.notas.length
    }






}