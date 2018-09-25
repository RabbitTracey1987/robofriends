import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './Robot';

ReactDOM.render(

   <CardList robots={robots}/>
	,document.getElementById('root'));
registerServiceWorker();
