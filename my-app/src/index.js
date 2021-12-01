import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import *as AWS from 'aws-sdk'
import { ConfigurationOption } from 'aws-sdk'

const configuration: ConfigurationOption = {
  region: 'us-west-2',
  secretAccessKey:'shXGf/lgz3H+F5oxr+oA2G/awG1D4KF+DnLUrtIA',
  accessKeyId: 'AKIA6KF5YTVH6UFESTS4',
}

AWS.config.update(configuration)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
