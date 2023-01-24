function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz ola");
    }
}
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    this.dizSalario = function() {
        console.log(this.salario);
    }

    Pessoa.call(this, nome);
}


const funcionario1 = new Funcionario("Maria","dev front-end", "5000", "sao paulo", "sao paulo", "brasil");
const funcionario2 = new Funcionario("Joao","dev back-end", "5000", "rio de janeiro", "rio de janeiro", "brasil");
const funcionario3 = new Funcionario("Jose","full stack", "7000", "nova iorque", "washington DC","estados unidos");

funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.dizSalario();
funcionario2.dizOi();
funcionario2.dizCargo();
funcionario2.dizSalario();
funcionario3.dizOi();
funcionario3.dizCargo();
funcionario3.dizSalario();