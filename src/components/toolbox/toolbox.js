import React from "react";
import "./toolbox.scss"

export default class Toolbox extends React.Component {
	render() {
		return (
        	<div className="toolbox">
            	<h2>toolbox</h2>

	        	<div className="container">
					<div className="category">
						<h4>Frontend</h4>
						<ul>
							<li>VueJS</li>
							<li>ReactJS</li>
							<li>Bootstrap</li>
							<li>jquery</li>
						</ul>
					</div>

					<div className="category">
						<h4>Backend</h4>
						<ul>
							<li>NodeJS</li>
							<li>Laravel</li>
							<li>Wordpress</li>
						</ul>
					</div>
					
					<div className="category">
						<h4>Other services</h4>
						<ul>
							<li>Git</li>
							<li>new relic</li>
							<li>sentry</li>
							<li>aws</li>
						</ul>
					</div>

					<div className="category">
						<h4>Developer Tools</h4>
						<ul>
							<li>sass</li>
							<li>webpack</li>
							<li>grunt & gulp</li>
							<li>phpunit</li>
						</ul>
					</div>

					<div className="category">
						<h4>Package Managers</h4>
						<ul>
							<li>NPM</li>
							<li>Composer</li>
							<li>Homebrew</li>
							<li>Chocolatey</li>
						</ul>
					</div>

					<div className="category">
						<h4>Languages</h4>
						<ul>
							<li>PHP</li>
							<li>HTML</li>
							<li>javascript</li>
							<li>mysql</li>
						</ul>
					</div>            
	        	</div>
        	</div>
    	);
	}
}