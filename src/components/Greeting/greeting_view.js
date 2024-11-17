import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./greeting_view.css";

export default function GreetinView() {
	return (
		<div class="greet">
			<h1>Hi There! <span>I'm Berk Yildizgörer</span></h1>
            <div class="greet-text">
            
            <TypeAnimation
					sequence={[
						"I'm a Computer Engineer", // Types 'One'
						1000, // Waits 1s
						"I'm a Full-Stack Developer", // Deletes 'One' and types 'Two'
						1000, // Waits 2s
						"I'm a Researcher",
                        1000,
                        "I'm a M.Sc. Computer Scientist",
                        1000 // Types 'Three' without deleting 'Two'
					]}
					wrapper="span"
					cursor={true}
					repeat={Infinity}
					style={{ fontSize: "2em", display: "inline-block" }}
				/>
            </div>
		</div>
	);
}
