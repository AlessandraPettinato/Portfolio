import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function SpaceCoachella() {
	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>
					SPACE COACHELLA
				</span>
			</div>
			<div className="content-container">
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
					On Mars, the party never stops! Come see what the two rovers,{" "}
					<span className="in-project">Ginny</span> and{" "}
					<span className="in-project">Percy</span>, are up to!
					<br />
					<br />
					Space Coachella was built during a 24 hours hackathon. The requirement
					of participation was to create a web app using React and the
					<span>
						<a
							target="_blank"
							href="https://api.nasa.gov/"
							rel="noopener noreferrer"
							style={{ fontSize: "1.3rem", color: "#41c731" }}
						>
							NASA API
						</a>
					</span>
					.
					<br />
					<br />
					The project, developed by three web developers, won the third place in
					the <span className="in-project">Wild Code School</span> hackathon.
				</p>
			</div>
		</section>
	);
}
