import React from 'react';
import { LuminousGallery } from 'luminous-lightbox';
import './Projects.scss';
const config = require('../../config');

class Projects extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.projects = config.projects.map(this.figure)
	}
	tags(d) {

	}
	figure(d,i) {
		//console.log(d.tags);
		var figure = <>
			<picture className="img-responsive">
				<source srcSet={`/images/${d.thumb.replace('thumb/','webp/').replace('.jpg','.webp').replace('.png','.webp').replace('.jpeg','.webp')}`} type="image/webp" />
				<img src={`/images/${d.thumb}`} alt={ d.title } />
			</picture>
			<div className="figure-overlay">
				<div className="overlay-container">
					<div className="inner">
						<div className="client">{ d.client }</div>
						<div className="title">{ d.title }</div>
						{typeof d.date!=='undefined' && d.date!="" ?<div className="date">{ d.date }</div>:null}
						
						{ typeof d.tags=='undefined' ? null : (<div className="tags">{d.tags.map((t, i) => <div className="tag" key={i}>{t}</div>)}</div>)}
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
