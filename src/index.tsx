import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./state";
import { CustomRouter } from "./components/CustomRouter/CustomRouter";
import { history } from "./history";
import 'reset-css/reset.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <CustomRouter history={history}>
            <App/>
        </CustomRouter>
    </Provider>
);


