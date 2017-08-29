import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PiPlayer from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PiPlayer />, document.getElementById('root'));
registerServiceWorker();
