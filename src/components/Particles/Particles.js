import React from 'react';
import './Particles.scss';

class Particles extends React.Component {
	render() {
		return (
			<div className="particles">
				<div className="animation-wrapper">
					<div className="particle particle-2"></div>
					<div className="particle particle-3"></div>
					<div className="particle particle-4"></div>
				</div>
			</div>
		)
	}
}

export default Particles;
