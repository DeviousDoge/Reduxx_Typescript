import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');


  if (container === null) {
    throw new Error("Root element not found");
} 

const root = createRoot(container);

const renderApp = async (): Promise<void> => {
  const webVitals = await import('./reportWebVitals');
  await webVitals.default();
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
debugger;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(async () =>  {
  await renderApp()
  reportWebVitals();
})();
