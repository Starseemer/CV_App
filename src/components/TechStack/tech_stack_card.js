import React from "react";
import "./tech_stack_card.css";
import TechStackItem from "./TechStackItem/tech_stack_item";

export default function TechStackCard() {
	return (
		<div class="card tech-stack-card">
			<div id="title"><h3>My Tech Stack</h3></div>
			<div id="content">
				<TechStackItem iconName="python" name="Python" />
				<TechStackItem iconName="js" name="Javascript" />
				<TechStackItem iconName="nodejs" name="NodeJS" />
				<TechStackItem iconName="c++" name="C++" />
				<TechStackItem iconName="reactjs" name="ReactJS" />
				<TechStackItem iconName="android" name="Android" />
				<TechStackItem iconName="flutter" name="Flutter" />
				<TechStackItem iconName="docker" name="Docker" />
				<TechStackItem iconName="django" name="Django" />
				<TechStackItem iconName="git" name="Git" />
				<TechStackItem iconName="postgresql" name="PostgreSQL" />
				<TechStackItem iconName="figma" name="Figma" />
				<TechStackItem iconName="kotlin" name="Kotlin" />
				<TechStackItem iconName="nextjs" name="NextJS" />
				<TechStackItem iconName="pytorch" name="PyTorch" />
				<TechStackItem iconName="flask" name="Flask" />
				<TechStackItem iconName="css3" name="CSS" />
				<TechStackItem iconName="html5" name="HTML5" />
			</div>
		</div>
	);
}
