let listaAlunos = []
let submitVar = document.getElementById("form-cadastro")
function cadastrarAluno(event) {
    event.preventDefault()
    let inputNome = document.getElementById("nome").valueformProduto.addEventListener("submit", cadastrarProduto)
    let inputMatricula = document.getElementById("matricula").value
    let inputIdade = document.getElementById("idade").value
    let inputMae = document.getElementById("mae").value
    let inputTelefone = document.getElementById("telefone").value

    let objetoAluno = {
        nome: inputNome,
        matricula: inputMatricula,
        idade: inputIdade,
        mae: inputMae,
        telefone: inputTelefone

    }

    listaAlunos.push(objetoAluno)

    console.log(listaAlunos)

}
submitVar.addEventListener("submit", cadastrarAluno)

