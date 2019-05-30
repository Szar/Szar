import React from 'react';
import './Footer.scss';
const config = require('../../config');

class Footer extends React.Component {
	render() {
		return (
			<section id={this.props.id}>
				<div className="container">
					<div className="icons">
						<div className="icon">
							<a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
						</div>
						<div className="icon">
							<a href={config.contact.github} target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github-alt" aria-hidden="true"></i>
							</a>
						</div>
						<div className="icon">
							<a href={config.contact.email} target="_blank" rel="noopener noreferrer">
								<i className="fa fa-paper-plane" aria-hidden="true"></i>
							</a>
						</div>
					</div>© { new Date().getFullYear() } {config.author}
				</div>
			</section>
		)
	}
}

export default Footer;
