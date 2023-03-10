function validar() {
    let inputElement = document.getElementById("input1").value;
    console.log(typeof inputElement)
    let labelResult = document.getElementById("result");

    if(inputElement % 2 === 0){
        labelResult.textContent = "número par"
        console.log("número par")
    } else if (inputElement % 2 === 1) {
        labelResult.textContent = "número ímpar"
        console.log("número ímpar")
    } else { 
        labelResult.textContent = "valor inválido"
        console.log("valor inválido")
    }
}

// muda o array

let lista = [];


function criaLista(){
    let inputElm = document.getElementById("input2").value;
    lista.push(inputElm);
}

const addLista = (inputElm) => {
    let ul = document.getElementById("list");

    for(i=0; i < lista.length; i++){
        let li = document.createElement("li");
        li.textContent = lista[i]
        ul.append(li)
    }
    
}

// muda o html

function adicionar(){
    let inputValue = document.getElementById("input3");
    let ul = document.getElementById("list2")
    let createListItem = document.createElement("li");

    createListItem.innerHTML = inputValue.value;
    ul.appendChild(createListItem)

}

// find

let frutas = ["Abacaxi", "Uva", "Maçã", "Melancia", "Goiaba", "Banana", "Melão"];
const encontrar = () => {
    let primeira = frutas.find(frutas => frutas === frutas)
    return console.log(primeira) 
}