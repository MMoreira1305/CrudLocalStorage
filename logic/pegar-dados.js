
// Pegando os dados e exportando eles do localStorage
function pegaDados() {
    let dados = JSON.parse(localStorage.getItem('pessoas')) || []
    return dados
  }
  
  export { pegaDados }