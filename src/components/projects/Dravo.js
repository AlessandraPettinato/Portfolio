import React from "react";

import "./Project.css";

export default function Dravo() {
	return (
		<section className="project-container">
			<h2 className="project-title">
				<span>Dravo</span>
			</h2>

			<aside className="left">
				<img
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1630244294/Bright%20Flash/Untitled_design_2_bbpfib.svg"
					alt="mobile/web app preview of Dravo"
				/>
			</aside>

			<aside className="right">
				<span className="github">
					<a
						target="_blank"
						href="https://github.com/beesage/dravo"
						rel="noopener noreferrer"
					>
						FRONT-END GITHUB
					</a>
				</span>
				<span className="website">
					<a
						target="_blank"
						href="https://github.com/AlessandraPettinato/beesage-api"
						rel="noopener noreferrer"
					>
						BACK-END GITHUB
					</a>
				</span>
			</aside>
			<p className="project-descr">
				Dravo is a social media network for beekeepers.
				<br></br>
				<br></br>
				The project was created in collaboration with two Junior Developers and
				it's full-stack.
			</p>
		</section>
	);
}
