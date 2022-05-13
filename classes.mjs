//Normalmente se usa letra maiuscula para declarar nome de classe
class FormaGeometrica{

    //variaveis privadas
    #base
    #altura
    #tipo
    
    //o constructor recebe dados externo: base, altura e tipo
    constructor(base, altura, tipo){

            //validações 
            // if(typeof base !== 'number' || base <= 0){
            //     throw new Error('ERRO: a base precisa ser numérica e maior que zero')
            // }
            // if(typeof altura !== 'number' || altura <= 0){
            //     throw new Error('ERRP:altura precisa ser númerica e maior que zero')
            // }
            // if(tipo !== 'R' && tipo !== 'T' && tipo !== 'E'){
            //     throw new Error('ERRO: tipo dever R, T ou E')
            // }

            //forma privada
        this.#base = base; 
        this.#altura = altura; 
        this.#tipo = tipo; 

        //forma publica
        //this.base = base; 
        //this.altura = altura; 
        //this.tipo = tipo; 
    }
    
    //funções getters: tem a finalidade de tornar visiveis ao mundo externo 

    get base(){
        return this.#base;
    }
    get altura(){
        return this.#altura
    }
    get tipo(){
        return this.#tipo
    }

    //funções setters tem a finalidade de alterar a informações privadads que 

    set base(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error('Erro')
        }
        this.#base = valor;
    }
    set altura(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error('Erro')
        }
        this.#altura = valor;
    }
    set tipo(valor){
        if(!['R', 'T', 'E']. includes(valor)){
            throw new Error('Erro')
        }
        this.#tipo = valor;
    }

    calculaArea(){
        switch(this.tipo){
            case 'R':
                return this.base * this.altura;
            case 'T':
                return(this.base * this.altura)/2;
            case 'E':
                return(this.base/2) * (this.altura/2)*Math.PI;
        }
    }
}

let forma1 = new FormaGeometrica(15, 16, 'T');
 console.log(forma1.calculaArea());
console.log(forma1.base, forma1.altura, forma1.tipo)