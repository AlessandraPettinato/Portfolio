import React from "react";

import "./Project.css";

export default function SpaceCoachella() {
	return (
		<section className="project-container">
			<h2 className="project-title">
				<span>Space Coachella</span>
			</h2>

			<aside className="left">
				<img
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1630242340/Untitled_design_1_ciwqkv.svg"
					alt="mobile/web app preview of Space Coachella"
				/>
			</aside>

			<aside className="right">
				<span className="github">
					<a
						target="_blank"
						href="https://github.com/AlessandraPettinato/Space-Coachella"
						rel="noopener noreferrer"
					>
						GITHUB
					</a>
				</span>
				<span className="website">
					<a
						target="_blank"
						href="https://spacecoachella.netlify.app/"
						rel="noopener noreferrer"
					>
						WEBSITE
					</a>
				</span>
			</aside>
			<p className="project-descr">
				On Mars, the party never stops! Come see what the two rovers, Ginny and
				Percy, are up to!
				<br></br>
				<br></br>
				The project was built during a 24 hours hackathon. The aim was to create
				a web app using React and the{" "}
				<span>
					<a
						target="_blank"
						href="https://api.nasa.gov/"
						rel="noopener noreferrer"
						style={{ fontSize: "1.3rem" }}
					>
						NASA API
					</a>
				</span>
				.
			</p>
		</section>
	);
}
