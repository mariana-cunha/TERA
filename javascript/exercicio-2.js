let safra = {
  fevereiro: {
    frutas: [
      "abacate",
      "ameixa",
      "carambola",
      "goiaba",
      "jaca",
      "limão",
      "maçã",
      "mamão",
      "manga",
      "melancia",
      "pêra",
      "uva",
    ],
    legumes: [
      "abóbora",
      "abobrinha",
      "berinjela",
      "beterraba",
      "milho verde",
      "quiabo",
      "tomate",
    ],
    verduras: [
      "acelga",
      "alface",
      "chicória",
      "escarola",
      "espinafre",
      "salsa",
    ],
  },
};

let infoVoo = {
    horaPartida: "8:30 PM",
    horaChegada: "9:35 PM",
    previsaoChegada: "1:05",
    preco: 1.255, 
    currency: "R$",
    infoPreco: "ida e volta por viajante",
    partida: "Rio de Janeiro (SDU)", 
    destino: "São Paulo (GRU)",
    companhiaArea: "GOL Linhas Aéreas S.A.",
};

let sapatos = {
    1: [{
        modelo: "Baby Flyer",
        produto: "117.883737373",
        cor: "Café",
        estoque: 24, 
        valorUnidade: 56.29,
        valorTotalEstoque: 1350.96
    }],
    2: [{
        modelo: "Baby Flyer",
        produto: "117.883737373",
        cor: "Preto",
        estoque: 12, 
        valorUnidade: 48.40,
        valorTotalEstoque: 580.80
    }],
    3: [{
        modelo: "Baby Flyer",
        produto: "117.883737373",
        cor: "Mostarda/Preto",
        estoque: 24, 
        valorUnidade: 48.40,
        valorTotalEstoque: 1161.60
    }]
}

let livro = {
    autora: "Chimamanda Ngozi Adichie",
    titulo: "Para educar crianças feministas",
    tipo: "seminovo/usado",
    editora: "Companhia das Letras",
    ano: 2019,
    estante: "Sociologia",
    peso: "93g",
    ISBN: "977S776723123",
    idioma: "Português",
    cadastrado: "2022-05-16",
    descricao: "SKU.... Acabamento. Brochura..."
}


// 2 

// o operador informado é "-"

if (33 - 5 == 28){
    console.log("true, o resultado é 28")
} else {
    console.log("false, o resultado era", 33 - 5)
}

if (33 * 5 == 165){
    console.log("true, é 165")
} else {
    console.log("false")
}


// 3 - retorne apenas frutas que possuem a letra o

let frutas = [ "Abacaxi", "Uva", "Maçã", "Goiaba", "Abacate", "Acerola"];
let resultado = frutas.filter(fruta => fruta.match("o"))
console.log(resultado)

// SP

let estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"]
let resultados = estados.filter(estado => estado.replace("SP", ""))
console.log(resultados)

// ou

let estadosSemSP = estados.filter((estado) => {
    return estado !== "SP"
})

// 4 - horas trabalhadas
let horasTrabalhadas = 7;

if (horasTrabalhadas > 6){
    console.log("horas trabalhadas - hora de almoço:", horasTrabalhadas - 1)
} else {
    console.log("segue o mesmo", horasTrabalhadas);
}


// 5 - soma dos números pares de 1 - 100

let zero = 0;

let numeros = Array.from(Array(101).keys());
// console.log(numeros);

let numerosPares = numeros.filter(n => n % 2 == 0)
console.log(numerosPares);

let soma = numerosPares.reduce((zero, nmr) => zero + nmr, 0)
console.log(soma)




