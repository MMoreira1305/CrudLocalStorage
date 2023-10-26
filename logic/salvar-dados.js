// Salvabdo dados
function salvar() {
    let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [] // pega o que tem local
  
    let nome = $("#name").val() // pega o valor do input JQUERY
    let idade = $("#age").val() // pega o valor do input JQUERY
    let peso = $("#weigth").val() // pega o valor do input JQUERY
    let cpf = $("#cpf").val()
    let rg = $("#rg").val()
  
    let item = { nome, peso, idade, cpf, rg } // criando o objeto
  
    let status = $("#salvar-btn").text()
  
    if (status == "Salvar") {
      pessoas.push(item) // colocando objeto no array
    } else {
      let id = $("#index").val() // aqui pego o id que foi adicionado na chamada o editar
      pessoas[id] = item  // substitui no array o item existente pelo novo item que foi editado
    }
  
    if ($("#name").val() != "" && $("#age").val() != "" && $("#weigth").val() != "" && $("#cpf").val() != "" && $("#rg").val() != "") {
      localStorage.setItem("pessoas", JSON.stringify(pessoas)) // armazenando local
      monteTabela()
      $("form").trigger("reset")
      $("#salvar-btn").text("Salvar") // muda o valor do botão de Salvar para Editar
      setTimeout(() => {
        $("form").removeClass("was-validated")
      }, 1)
  
    }
  
  
  }
  
  export { salvar }