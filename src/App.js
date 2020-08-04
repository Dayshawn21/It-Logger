import React, { useEffect } from 'react';
import Navbar from './compents/layout/Navbar';
import Logs from './compents/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
	useEffect(() => {
		M.AutoInit();
	});
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<Logs />
			</div>
		</div>
	);
};

export default App;
