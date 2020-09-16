import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';
import './styles/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <App compiler="TypeScript" framework="React" stylePreProcessor="SCSS" />
    </React.StrictMode>,
    document.getElementById('root')
);
