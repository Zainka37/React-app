import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './Redux/Redux_Store.js'

/* новая функция которая будет перерендеривать  когда в стейте  изменятся данные
 по этому мы туда передаем параметы обьектав разные компоненты
 По сколько мы используем стетйц, но его не можем експортировать,
 мы его просто передаем как параметер функции
  функцией rerenderEntireTree из стейт  */

  ReactDOM.render(
          <BrowserRouter>
    <Provider store = { store }>
    <App />
      </Provider>
      </BrowserRouter>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
