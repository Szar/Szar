import React from 'react';
import { Link } from 'react-scroll';
import './Skills.scss';
const config = require('../../config');

class Skills extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.skills = config.skills.map(this.skillSection)
	}
	skill(d,i) {

	}
	skillSection(d,i) {
		return <div key={`skills-${i}`} className="col">
			<div className="row">
				<div className="col col-header">
					<h4 className="animated">{ d.name }</h4>
				</div>
				<div className="col">
					<ul className="skills">
						{ d.data.map(function(skill,j) {
							return <li key={`skill-${j}`} className={`skill level-${skill.level} animated`}>{skill.name}</li>
						}) }
					</ul>
				</div>
			</div>
		</div>
	}
	render() {
		return (
			<section id={this.props.id}>
				<div>
					<div className="container">
						<h3 className="animated" data-duration="1200">Skills</h3>
						<div className="row">
							{ this.skills }
						</div>
						<div className="arrow">
							<Link to={this.props.next} spy={true} smooth={true} duration={800}>
								<i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Skills;
