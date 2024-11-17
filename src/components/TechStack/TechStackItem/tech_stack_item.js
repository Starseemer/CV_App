import React from "react";
import StackIcon from "tech-stack-icons";
import "./tech_stack_item.css";

export default function TechStackItem({iconName, name}) {
	return (
		<div id="itemContainer">
			<StackIcon className="icon" name={iconName} />
            <div id="name">{name}</div>
		</div>
	);
}
