
// -- Aula 1
// var nome = "Nome Sobrenome";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo";
// // alert(idade + idade2);
// // console.log(nome);
// console.log(n1 * n2);
// // console.log(frase.replace("Japão", "Brasil"));
// // console.log(frase.toUpperCase());
// // console.log(frase.toLowerCase());

//-- Aula 2
// var lista = ["maçã", "pera", "laranja"];
// alert(lista[1]);
// lista.push("uva"); //adiciona o elemento na lista
// lista.pop(); //retira o último elemento da lista
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | ")); //separa os elementos da lista com o que quiser

// var fruta = { nome: "maçã", cor: "vermelha" };
// console.log(fruta.nome);

// var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
// console.log(frutas);
// alert(frutas[1].nome);

//-- Aula 3
// var idade = prompt("Qual sua idade");
// if (idade >= 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de idade");
// }; 

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count++;
// };

// var count;
// for (count = 0; count <= 5; count++) {
//     alert(count)
// }

// var d = new Date();
// alert(d);
// alert(d.getDate());
// alert(d.getHours());
// alert(d.getMinutes());

//-- Aula 4
// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?")

// // alert(soma(5, 10));
// // alert(setReplace("Vai Japão", "Japão", "Brasil"));
// console.log(validaIdade(idade));

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar() {
    // window.open("https://www.google.com.br/") //Nova janela
    window.location.href = "https://www.google.com.br/"; //Mesma aba/janela
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; //Troca o texto ao selecionar o texto
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto")
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada!")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}