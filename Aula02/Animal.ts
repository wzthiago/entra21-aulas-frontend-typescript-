export class Animal {
    //Atributos
    private especie: string
    public nome: string
    public peso: number
    public habitate: Array<string>

    //Construtor
    constructor(
        especie: string,
        nome: string,
        peso: number,
        habitat: Array<string>,
    ) {
        this.especie=especie
        this.nome=nome
        this.peso=peso
        this.habitate=habitat
    }

    //Metodos
    public get getEspecie(): string{
        return this.especie;
    }

    public set setEspecie (especie:string){
        this.especie = especie;
    }

   

}