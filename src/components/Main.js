require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {TechGraph} from './Graph';
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <TechGraph />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
