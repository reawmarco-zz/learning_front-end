// importa a classe que contém o método para formatar a messagem em UPPERCASE.
import util from './util/util.js'

const printMessage = (message) => {
  return util.formatMessageUpperCase(message);
}

var me = printMessage('mensagem para ser formatada em uppercase.');
console.log(me);

document.getElementById('messageH1').innerHTML = me;
console.log(me);
