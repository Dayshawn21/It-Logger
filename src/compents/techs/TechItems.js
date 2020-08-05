import React from 'react';
import PropTypes from 'prop-types';

const TechItems = ({ tech }) => {
	return (
		<li className="collection-item">
			<div>
				{tech.firstName}
				{tech.LastName}
				<a href="#!" className="secondary-content gray ">
					<i className="material-icons">delete</i>
				</a>
			</div>
		</li>
	);
};

TechItems.propTypes = {
	tech : PropTypes.object.isRequired
};

export default TechItems;
