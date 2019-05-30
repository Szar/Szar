import React from 'react';
import { LuminousGallery } from 'luminous-lightbox';
import './Projects.scss';
const config = require('../../config');

class Projects extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.projects = config.projects.map(this.figure)
	}

	figure(d,i) {
		var figure = <>
			<img className="img-responsive" src={`/images/${d.thumb}`} alt={ d.title } />
			<div className="figure-overlay">
				<div className="overlay-container">
					<div className="inner">
						<div className="client">{ d.client }</div>
						<div className="title">{ d.title }</div>
						<div className="date">{ d.date }</div>
					</div>
				</div>
			</div>
		</>;
		return d.type==='lightbox'?<div className="figure animated" key={`project-${i}`}><a className="luminous-image" href={`/images/${d.url}`}>{figure}</a></div>:<div className="figure animated" key={`project-${i}`}><a target="_blank" rel="noopener noreferrer" href={ d.url }>{figure}</a></div>

	}
	componentDidMount() {
		new LuminousGallery(document.querySelectorAll(".luminous-image"));
	}
	
	render() {
		return (
			<section id={this.props.id}>
				<div>
					<div className="container">
						<h3 className="animated" data-duration="1200">Projects</h3>
					</div>
					<div id="work">
					<div className="figures">{ this.projects }</div>
					</div>
				</div>
			</section>
		)
	}
	
}

export default Projects;
