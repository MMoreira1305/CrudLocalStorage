// Função de editar dados
function editar(id) {
    let pessoas = pegaDados()
    let pessoa = pessoas[id]
  
  
    $("#salvar-btn").text("Editar") // muda o valor do botão de Salvar para Editar
  
    $("#index").val(id) // adicioanar ao input oculto o valor do id JQUERY
    $("#name").val(pessoa.nome) // pega o valor do input JQUERY
    $("#age").val(pessoa.idade) // pega o valor do input JQUERY
    $("#weigth").val(pessoa.peso)
    $("#cpf").val(pessoa.cpf)
    $("#rg").val(pessoa.rg)
    // pega o valor do input JQUERY
  }
  
  export { editar }