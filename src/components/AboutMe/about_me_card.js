import React from "react";
import "./about_me_card.css";

export default function AboutMeCard() {
	return (
		<div>
			<div id="title-center">
				<h3>About Me</h3>
			</div>
		
		<div
			class="card"
			style={{ width: 40 + "rem", marginTop: 1 + "rem", marginLeft: 0 }}
		>
			<div id="content">
				<p>
					I am a dedicated Full-Stack Developer and Researcher with a
					passion for technology and innovation. I am currently
					pursuing a Master's degree in Computer Science at the
					University of Freibrug. My research interests include
					software engineering, machine learning, artificial
					intelligence, and full-stack development.
                </p>
			</div>
		</div>
		</div>
	);
}
