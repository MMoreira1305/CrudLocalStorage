// Aqui estamos pegando as funções da pasta de logic, onde fica armazenada toda a lógica do nosso site.


import { deletar } from "./logic/deletar-dados.js";
import { editar } from "./logic/editar-dados.js";
import { salvar } from "./logic/salvar-dados.js";
import { monteTabela } from "./logic/montar-dados.js";
import { pegaDados } from "./logic/pegar-dados.js";

window.deletar = deletar
window.editar = editar
window.salvar = salvar
window.pegaDados = pegaDados
window.monteTabela = monteTabela
monteTabela()

// export default deletar;
