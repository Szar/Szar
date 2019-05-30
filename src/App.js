import React from 'react';
import { Helmet } from "react-helmet";
import enterView from 'enter-view';
import Particles from './components/Particles/Particles';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './sass/style.scss';
const config = require('./config');

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}
	componentDidMount() {
		this.createAnimations();
		enterView({
			selector: '.animated',
			enter: function(e){
				if(e.style.opacity!==1) {
					e.style.opacity = 1;
				}
			},
		});
	}
	createAnimations(){
		var elements = document.getElementsByClassName('animated');
		for(let i=0; i<elements.length; i++) {
			var e = elements[i],
				duration = e.getAttribute('data-duration') && e.getAttribute('data-duration')!=='' ? parseInt(e.getAttribute('data-duration')) : 800,
				delay = e.closest('section').id === 'projects' || e.classList.contains('skill') ? 10 * Math.floor(40 * Math.random()) + 200 : 500;
			e.style.transition = `opacity ${duration}ms cubic-bezier(0.5, 0, 0, 1) ${delay}ms`;
			e.style.visibility = 'visibility';
		}
	}
	
	render() {
		return (
			<div className="App">
				<Helmet>
					<meta name="robots" content="noindex,follow" />
					<title>{config.title}</title>
					<meta name="description" content={config.description} />
				</Helmet>
				<Particles />
				<Home id="home"/>
				<Skills id="skills" next="projects"/>
				<Projects id="projects"/>
				<Footer id="contact" />
			</div>
		)
	}
}

export default App;
