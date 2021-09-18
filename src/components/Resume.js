import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Resume.css";

export default function Resume() {
	return (
		<section className="resume-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>ABOUT ME</span>
			</div>
			<p className="resume-text">
				Hello everyone! My name is Alessandra, a passionate{" "}
				<span>Front-end developer</span> from South Italy who is about to
				relocate to Berlin soon.
				<br />
				<br />
				During these past few years, I worked as a <span>Content Editor </span>
				for some performance-art festivals in Rome, where I was also the{" "}
				<span>Social Media Manager</span> of the companies.
				<br />
				<br />I was in charge of planning the daily publications of their
				platforms and adapting the main graphic designs to different social
				media formats using mainly <span>Adobe Illustrator</span> and{" "}
				<span>Adobe InDesign</span>.
				<br />
				<br />I also had the chance to live abroad in <span>
					Taipei (TW)
				</span>{" "}
				to further my studies in Mass Communication and practice my Chinese.
				<br />
				<br />
				I have always been interested in linguistics, writing, and technology,
				and I wanted to find a way to combine all of my interests.
				<br />
				<br />
				That is exactly why, at the beginning of 2021, I decided to enrol in the{" "}
				<span>Wild Code School</span>'s boot camp.
				<br />
				<br />
				There, I learnt everything I needed to know regarding how to build web
				and mobile apps using the latest tech stack (
				<span>MySql, Express, React, Node.js</span>) while following the{" "}
				<span> SCRUM methodology</span>.
				<br />
				<br />
				The boot camp gave me a structure on how to work in this new world, but
				it's my passion for <span> never-ending learning</span> that drove me
				all the way here.
			</p>
		</section>
	);
}
