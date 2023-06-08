import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyles, theme } from 'styles';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Context } from 'components';
import { Global, ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Context>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <App />
        </ThemeProvider>
      </Context>
    </BrowserRouter>
  // </React.StrictMode>
);
