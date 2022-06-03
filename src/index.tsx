import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {API_URL} from "./service";
import {Provider} from "react-redux";
import store from "./store/store";

import "./css/index.css";
import 'react-loading-skeleton/dist/skeleton.css'

const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ApolloProvider>
);