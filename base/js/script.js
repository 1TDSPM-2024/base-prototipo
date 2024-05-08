

//JavaScript básico tópicos
// console.log("Olá Mundo!");

// //Capturar o botão pelo ID e atrelar a ele um evento de click.
// const btnElemento = document.getElementById("botao");
// btnElemento.addEventListener("click", function(){
//     console.log("Botão testado.");
// });

//1.Declaração de variáveis
// var nome = "João";
// let sobrenome = "Silva";
//  console.log("Nome completo : " + nome +" "+ sobrenome);
// //2.Declaração de constantes
// const idade = 20;
// console.log("Idade : " + idade);
// idade = 21;

//2.Hoisting
//Diferença entre var e let
// var nome = "João";

// if(true){
//     let nome = "Silva";
// }

// console.log(nome);

//3.Tipos de dados
    
// let tiposDeDados = [
//     "Number",
//     "String",
//     "Boolean",
//     "Null",
//     "Undefined",
//     "Object",
//     "Array",
//     "Function"
// ]

// //Imprimindo o array com console.table.
// console.table(tiposDeDados);


// //4.Operadores
 
// //5.Estruturas condicionais

// //6.Estruturas de repetição
// // //Imprimindo Array com forEach com função anônima
// // tiposDeDados.forEach(function(tipo){
// //     console.log(tipo);
// // });
// // //Imprimindo Array com forEach com arrowFunction
// // tiposDeDados.forEach((tipo)=>{
// //     console.log(tipo);
// // });
// //Itera sobre um array de tipos de dados que serão inseridos em uma lista ul no html de id tipo-dados
// //Recuperando a lista ul através do id
// let listaTiposDeDados = document.getElementById("tipo-dados");

// tiposDeDados.forEach((tipo)=>{
//     //Criando um elemento <li> para inserir na <ul>
//     let itemLista = document.createElement("li");
//     //Adicionando o texto do tipo de dado
//      itemLista.innerText = tipo;
//      //Inserindo o elemento <li> na <ul>
//      listaTiposDeDados.appendChild(itemLista); 
// });

//7.Funções

// function soma(a,b){
//     // let a = 4;
//     // let b = 5;

//     if((a+b)>=10){
//         console.log(`A soma  de a: ${a} e b: ${b} é maior ou igual à 10.`);
//         return true;
//     }else{
//         console.log(`A soma  de a: ${a} e b: ${b} não é maior do que 10.`);
//         return false;
//     }
// }

// const soma = (a,b)=>{
 
//     if((a+b)>=10){
//         console.log(`A soma  de a: ${a} e b: ${b} é maior ou igual à 10.`);
//         return true;
//     }else{
//         console.log(`A soma  de a: ${a} e b: ${b} não é maior do que 10.`);
//         return false;
//     }
// }

//Recuperar os campos email e senha através de querySelector.

// const inputEmail = document.querySelector("#idEmail");
// const inputSenha = document.querySelector("#idSenha");

function validacao(inputEmail,inputSenha) {

    //Recupere os dados dos campos e adicione em um objeto de nome usuário e desestruture o objeto
    //pegando as propriedades e realizando uma validação para ver se as propriedades possuem valores de preenchimento.
    //Após a validação, adicione uma nova propriedade ao objeto de nome nomeCompleto com o valor de sua escolha.

    if((inputEmail.value == "") && (inputSenha.value == "")){
        alert("O preenchimento dos campos são obrigatórios.");
        return false;
    } else{
      let usuario = {
        emailUsuario : inputEmail.value,
        senhaUsuario : inputSenha.value 
      };

      const{emailUsuario,senhaUsuario}=usuario;
      usuario = {...usuario, nomeCompleto : "Erick Alves Xavier dos Santos"};
      return true;
    }
}




//8.Arrays

// //9.Objetos
// let usuario = {
//     emailUsuario : "jo@email.com",
//     senhaUsuario : "123456",
//     nomeCompleto : "João da Silva"
// }
// // console.log(usuario.nomeCompleto + ", você está logado com o seu email: "+ usuario.emailUsuario);

// // let propsVariavel = "emailUsuario";
// // console.log(usuario["nomeCompleto"] + ", você está logado com o seu email: "+ usuario[propsVariavel]);
// console.log(usuario);

// //OPERADOR SPREAD( ... )
// usuario = {...usuario, idade:20 , regiao:"São Paulo"};

// console.log(usuario);


// //Destructuring
// const{emailUsuario,idade,regiao}=usuario;
// console.log(`E-mail do Usuário: ${emailUsuario}`);
// console.log(`Idade do Usuário: ${idade}`);
// console.log(`Região de Residência: ${regiao}`);

//10.Funções de array