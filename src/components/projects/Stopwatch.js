import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function Stopwatch() {
	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>STOPWATCH</span>
			</div>

			<div className="content-container">
				<div className="image-link-container">
					<aside className="image">
						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1631872310/Untitled_design_1_vebvet.png"
							alt="web app preview of Stopwatch"
						/>
					</aside>

					<aside className="links">
						<span className="github">
							<a
								target="_blank"
								href="https://github.com/AlessandraPettinato/Stopwatch"
								rel="noopener noreferrer"
							>
								REPOSITORY
							</a>
						</span>
						<span className="website">
							<a
								target="_blank"
								href="https://sandra-stopwatch.netlify.app/"
								rel="noopener noreferrer"
							>
								DEMO
							</a>
						</span>
					</aside>
				</div>
				<p className="project-descr">
					A simple Stopwatch created with{" "}
					<span className="in-project">HTML</span> and{" "}
					<span className="in-project">CSS</span>.
					<br />
					<span className="in-project">JavaScript</span> was used to manipulate
					the DOM and make the interaction with the app possible.
					<br />
					<br />
					This Stopwatch is able to start a counter, stop it, set laps and reset
					it. At every lap, the stopwatch records either the total time and the
					difference between it and the moment the lap is set.
				</p>
			</div>
		</section>
	);
}
