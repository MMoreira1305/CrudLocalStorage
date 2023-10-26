// Função de montar tabela, pegando os dados pela função de pegaDados() na pasta de pegar-dados.js
function monteTabela() {
    let pessoas = pegaDados()
    let lista = ""
  
    // Fazendo um for para pegar os dados dentro do localstorage pelo pegaDados().
    for (let [i, p] of pessoas.entries()) {
      lista +=
        `
       <tr>
                      <th scope="row">${i}</th>
                      <td>${p.nome}</td>
                      <td>${p.idade}</td>
                      <td>${p.peso}</td>
            <td>${p.cpf}</td>
            <td>${p.rg}</td>
                      <td>
                          <button type="button" onclick="editar(${i})" class="btn btn-primary">Editar</button>
                          <button type="button" onclick="deletar(${i})" class="btn btn-danger">Excluir</button>
                      </td>
                  </tr>
       `
    }
  
    // Fazer um innerHTML na div montada em index.html
    document.getElementById("tabela").innerHTML = lista // JS PURO
    $("#tabela").html(lista) //JQUERY
  }
  
  export { monteTabela }
  
  // monteTabela()