import React from 'react';
import { Link } from 'react-scroll';
import Glitch from '../Glitch/Glitch';
const config = require('../../config');

class Home extends React.Component {

	componentDidMount() {
		var glitch = new Glitch("#coded");
		glitch.setText(config.title).then(function() {
			setTimeout(glitch.setText(null), 800);
		});
	}
	title() {
		var i = 0,
			h1 = <h1 id="coded">{config.title.split(".")
			.map(function(d){ return d })
			.reduce(function(p,c){ 
				i+=1;
				return [p, <span key={i} className="highlight">.</span>, c] 
			})
		}</h1>;
		return h1;
	}
	render() {
		return (
			<section id={this.props.id}>
				<div>
					<div className="container">
						{ this.title() }
						<h2>Hey, I’m <span className="highlight">{config.author}</span>.<br/>I'm a full-stack web developer.</h2>
						<div className="arrow">
							<Link to="skills" spy={true} smooth={true} duration={800}>
								<i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Home;
