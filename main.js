function Pokemon(nome) {
    this.nome = nome;
    this.dizNome = function() {
        console.log("Eu sou o " + this.nome);
    }
}

function Pikachu(nome, tipo, hp) {
    this.tipo = tipo;
    this.hp = hp;

    this.Ataque = function() {
        console.log(this.nome + " usou choque do trovão");
    }

    Pokemon.call(this, nome);
}

function Charizard(nome, tipo, hp) {
    this.tipo = tipo;
    this.hp = hp;

    this.dizHp = function() {
        console.log('Meu Hp é de:' + this.hp);
    }
    Pokemon.call(this, nome);
}

const pikachuDoAsh = new Pikachu("Pikachu", "Elétrico","3");
const charizardDoGary = new Charizard("Charizard", "Fogo", "5");
const togepy = new Pokemon("Togepy");

pikachuDoAsh.dizNome();
togepy.dizNome();
charizardDoGary.dizNome();
pikachuDoAsh.Ataque();
charizardDoGary.dizHp();
