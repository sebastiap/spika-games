import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/common/card/card.css'

import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesContextProvider as Context } from './store/favorites-context';

import App from './App';

ReactDOM.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>,
  document.getElementById('root')
);
