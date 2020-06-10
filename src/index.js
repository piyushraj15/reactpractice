import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import User from './User'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));

registerServiceWorker();
