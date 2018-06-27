// Não alterar o arquivo

import React from 'react'; //obrigatorio
import ReactDOM from 'react-dom'; // dom do react
import './index.css'; //todo css é aplicado automaticamente por essa linha
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// <App /> : App é instanciado
// render cria HTML: coloca o component App dentro do elemento que possui o id root
ReactDOM.render(<App />, document.getElementById('root')); // .render(o que deve ser mostrado, onde deve ser mostrado)
registerServiceWorker();
