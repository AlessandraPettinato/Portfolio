import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function Stopwatch() {
	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>POKEDEX</span>
			</div>

			<div className="content-container">
				<div className="image-link-container">
					<aside className="image">
						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1631921267/Portfolio/Untitled_design_3_uu3s1t.png"
							alt="web app preview of Pokedex"
						/>
					</aside>

					<aside className="links">
						<span className="github">
							<a
								target="_blank"
								href="https://github.com/AlessandraPettinato/pokedex"
								rel="noopener noreferrer"
							>
								REPOSITORY
							</a>
						</span>
					</aside>
				</div>
				<p className="project-descr">
					This project was assigned as part of an interview process I underwent
					some months ago. The goal was to fetch data from the{" "}
					<span className="in-project">Pokemon API</span> and render them
					on-screen.
					<br />
					<br />
					The Pokemon displayed are the original 151. Thanks to a pagination
					system they are methodically divided into sections.
					<br />
					<br />
					The users can catch a Pokemon, store it locally, and delete it
					whenever they need.
				</p>
			</div>
		</section>
	);
}
