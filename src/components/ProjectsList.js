import React from "react";

import Resume from "./Resume";
import BrightFlash from "./projects/BrightFlash";
import Dravo from "./projects/Dravo";
import SpaceCoachella from "./projects/SpaceCoachella";
import Stopwatch from "./projects/Stopwatch";
import Todo from "./projects/Todo";
import Pokedex from "./projects/Pokedex";
import AdminPanel from "./projects/AdminPanel";

export default function ProjectsList() {
	return (
		<div className="all-projects-container">
			{/* <Resume /> */}
			<AdminPanel />
			<Dravo />
			<BrightFlash />
			<SpaceCoachella />
			<Pokedex />
			<Stopwatch />
			<Todo />
		</div>
	);
}
