import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { store } from './state/Store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import {rootReducer,persistReduce} from "./state/Store"
import { configureStore} from '@reduxjs/toolkit'
import {QueryClientProvider,QueryClient} from "react-query";
const store = configureStore({reducer: persistReduce});
const persistor = persistStore(store);
const queryClient=new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
