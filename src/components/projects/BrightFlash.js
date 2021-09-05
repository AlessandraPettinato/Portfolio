import React from "react";

import "./Project.css";

export default function BrightFlash() {
	return (
		<section className="project-container">
			<h2 className="project-title">
				<span>Bright Flash</span>
			</h2>

			<aside className="left">
				<img
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1630240534/Bright%20Flash/Untitled_design_bdvorz.svg"
					alt="mobile/web app preview of Bright Flash"
				/>
			</aside>
			<aside className="right">
				{" "}
				<span className="github">
					<a
						target="_blank"
						href="https://github.com/AlessandraPettinato/Bright-Flash"
						rel="noopener noreferrer"
					>
						GITHUB
					</a>
				</span>
				<span className="website">
					<a
						target="_blank"
						href="https://bright-flash.herokuapp.com/"
						rel="noopener noreferrer"
					>
						WEBSITE
					</a>
				</span>
			</aside>
			<p className="project-descr">
				Bright Flash is one of the projects built during my time in{" "}
				<span className="in-project">Wild Code School</span>. The main goal of
				the assignment was to learn how to fetch data from an API, and then
				create a web app using <span className="in-project">React</span>.
				<br />
				<br />
				The project was fueled by the creativity and endeavour of four web
				developers, who contributed to every step of development (including
				sketching up the design and creating wireframes and mockups).
				<br />
				<br />
				What we all agreed on was to create an app that would highlight women's
				contributions to the advancement of science. Rather than having merely a
				teaching moment, we wanted to make the experience fun for the user: we
				then decided to use a "gamification" approach and to create a{" "}
				<span className="in-project">memory card game</span>.
				<br />
				<br />
			</p>
		</section>
	);
}
