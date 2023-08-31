import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@/app/styles/main.css';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import { router } from '@/app/router/router';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<RouterProvider router={router}>*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>

      {/*</RouterProvider>*/}
    </Provider>
  </React.StrictMode>,
);
