import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./tab_bar.css";

export default function TabBar() {
	return (
		<div id="tabbar">
			<div id="leading">Berk Yildizgörer</div>
			<div id="center">
				{/* <TypeAnimation
					sequence={[
						"Computer Engineer", // Types 'One'
						1000, // Waits 1s
						"Full-Stack Developer", // Deletes 'One' and types 'Two'
						1000, // Waits 2s
						"Researcher",
                        1000,
                        "Computer Scientist",
                        1000, // Types 'Three' without deleting 'Two'
						() => {
							console.log("Sequence completed");
						},
					]}
					wrapper="span"
					cursor={true}
					repeat={Infinity}
					style={{ fontSize: "2em", display: "inline-block" }}
				/> */}
			</div>
			<div id="trailing">
				<div id="tab"> <a href="#about">About</a></div>
				<div id="tab"><a href="#projects">Projects</a> </div>
				<div id="tab"><a href="#contact">Contact</a></div>
			</div>
		</div>
	);
}
