import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
