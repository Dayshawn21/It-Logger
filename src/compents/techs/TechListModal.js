import React, { useState, useEffect } from 'react';
import TechItems from './TechItems';

const TechListModal = () => {
	const [
		techs,
		setTechs
	] = useState([]);
	const [
		loading,
		setLoading
	] = useState(false);

	useEffect(() => {
		getTechs();
		//eslint-disable-next-line
	}, []);

	const getTechs = async () => {
		setLoading(true);
		const res = await fetch('/techs');
		const data = await res.json();

		setTechs(data);
		setLoading(false);
	};
	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4> Technician List </h4>
				<ul className="collection"> </ul>
				{!loading && techs.map((tech) => <TechItems tech={tech} key={tech.id} />)}
			</div>
		</div>
	);
};

export default TechListModal;
