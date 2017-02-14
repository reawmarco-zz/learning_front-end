import React from 'react';
import ReactDom from 'react-dom';
import '../styles/style.scss';
import App from './components/app.js';


ReactDom.render(<App/>, document.getElementById('divMessage'));










/*const printMessage = (message) => {
  //noinspection JSAnnotator
    return util.formatMessageUpperCase(message);
}

var me = printMessage('mensagem para ser formatada em uppercase.');
console.log(me);

document.getElementById('messageH1').innerHTML = me;
console.log(me); */
