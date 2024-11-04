const prompt = require("prompt-sync")();

class InscricaoJogador {
    constructor(nome, idade, tipoPersonagem) {
        this.nome = nome;
        this.idade = idade;
        this.tipoPersonagem = tipoPersonagem;
    }

    atacar() {
        let ataque;

        switch (this.tipoPersonagem.toLowerCase()) { 
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monje":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "ataque básico";
        }

        console.log(`O herói ${this.nome}, com suas habilidades de ${this.tipoPersonagem}, atacou e ${ataque}.`);
    }
}
const heroi1 = new InscricaoJogador("Evy", 20, "mago");
const heroi2 = new InscricaoJogador("Juruzinho", 20, "guerreiro");
const heroi3 = new InscricaoJogador("Dou", 20, "monje");
const heroi4 = new InscricaoJogador("Gui", 20, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();