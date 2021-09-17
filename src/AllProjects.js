import React from "react";
import Resume from "./components/Resume";
import BrightFlash from "./components/projects/BrightFlash";
import Dravo from "./components/projects/Dravo";
import SpaceCoachella from "./components/projects/SpaceCoachella";

export default function AllProjects() {
	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;
	return (
		<div className="all-projects-container">
			<header>
				<p className="login">
					Last login: <time>{login}</time> on Alessandra Pettinato's{" "}
					<span style={{ color: "#41c731" }}>Portofolio</span>
				</p>
			</header>
			<Resume />
			<BrightFlash />
			<Dravo />
			<SpaceCoachella />
		</div>
	);
}
