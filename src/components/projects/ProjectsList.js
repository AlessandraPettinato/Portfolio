import React from "react";

import { ProjectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
	return (
		<div className="all-projects-container">
			{/* <Resume /> */}
			{ProjectData.map((item, index) => {
				return <ProjectCard key={index} item={item} />;
			})}
		</div>
	);
}
