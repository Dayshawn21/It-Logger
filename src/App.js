import React, { useEffect } from 'react';
import Navbar from './compents/layout/Navbar';
import Logs from './compents/logs/Logs';
import Addbtn from './compents/layout/Addbtn';
import AddLogModal from './compents/logs/AddLogModal';
import EditLogModal from './compents/logs/EditLogModal';
import AddTechModal from './compents/techs/AddTechModal';
import TechListModal from './compents/techs/TechListModal';

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
				<Addbtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<Logs />
			</div>
		</div>
	);
};

export default App;
