import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App = React.createClass({
  	render() {
	    return (
	      	<div>
	        	<h1>App</h1>
		        <ul>
		          	<li><Link to="/page1">Page1</Link></li>
			        <li><Link to="/page2">Page2</Link></li>
		        </ul>
	      	</div>
	    )
  	}
});

render((
  	<Router>
	    <Route path="/" component={App}>
	      	<Route path="page1" component={Page1} />
	      	<Route path="page2" component={Page2}>
	      	</Route>
	    </Route>
  	</Router>
), document.getElementById('container'));
