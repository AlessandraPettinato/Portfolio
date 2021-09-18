import React from "react";
import Resume from "./Resume";
import BrightFlash from "./projects/BrightFlash";
import Dravo from "./projects/Dravo";
import SpaceCoachella from "./projects/SpaceCoachella";
import Stopwatch from "./projects/Stopwatch";
import Todo from "./projects/Todo";
import Pokedex from "./projects/Pokedex";

export default function AllProjects() {
	return (
		<div className="all-projects-container">
			<Resume />
			<Dravo />
			<BrightFlash />
			<SpaceCoachella />
			<Pokedex />
			<Stopwatch />
			<Todo />
		</div>
	);
}
