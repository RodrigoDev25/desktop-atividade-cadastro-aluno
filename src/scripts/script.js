let listaAlunos = [] // Aqui guardamos todos os alunos como se fosse uma caixinha de registros 📦

let submitVar = document.getElementById("form-cadastro") // Pegamos o formulário pelo ID, como se fosse achar o bilhete premiado 🎫

function cadastrarAluno(event) {
    event.preventDefault() // Impede o formulário de recarregar a página, tipo: "Ei! Fica aqui!" ✋

    // Pegamos o que foi digitado nos campos - como colher ingredientes para uma receita 🥣
    let inputNome = document.getElementById("nome").value
    let inputMatricula = document.getElementById("matricula").value
    let inputIdade = document.getElementById("idade").value
    let inputMae = document.getElementById("mae").value
    let inputTelefone = document.getElementById("telefone").value

    // Criamos um aluno com tudo isso - um novo personagem no nosso livrinho 📖
    let objetoAluno = {
        nome: inputNome,
        matricula: inputMatricula,
        idade: inputIdade,
        mae: inputMae,
        telefone: inputTelefone
    }

    // Guardamos o novo aluno na nossa caixinha 📦
    listaAlunos.push(objetoAluno)

    // Mostramos no console os alunos cadastrados - tipo ver a coleção de figurinhas 🖼️
    console.log(listaAlunos)

    event.target.reset() // Limpamos os campos para o próximo aluno - como passar a borracha ✏️
}

submitVar.addEventListener("submit", cadastrarAluno) // Dizemos: "Quando clicarem no botão, chame o cadastro!" 🛎️
