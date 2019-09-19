import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import './Resize.css';

export default class Resizable extends Component {

render() {
    return (
	    <div class="Resize">
	     	{this.props.children}
	    </div>  
    );
  }
}
