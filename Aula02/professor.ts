export class Professor {

    //Atributos
    public nome: string
    public idade: number
    public disciplinas: Array<string>
    public valorHora: number
    public quantidadeHoras: number

    //Construtor
    constructor(
        nome: string,
        idade: number,
        disciplinas: Array<string>,
        valorHora: number,
        quantidadeHoras: number

    ) {
        this.nome = nome
        this.idade = idade
        this.disciplinas = disciplinas
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras
    }

    //Métodos
    
    public apresentar() : string {
        return `O nome do professor é ${this.nome}, e tem ${this.idade} anos. Disciplina de ${this.disciplinas}, com o valor: ${this.valorHora}, com ${this.quantidadeHoras} horas.`
    }

    public calcularRendimento():number {
        let rendimento: number = this.valorHora * this.quantidadeHoras

        return rendimento
    }
    
}