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
				Hello everyone! This is <span>Alessandra</span>.<br></br>
				<br></br>A few words about me: I was born in a small town in southern
				Italy, but relocated to Rome as soon as I was 18.
				<br></br>
				<br></br>
				Before re-inventing myself as a <span>web developer</span>, when I
				thought that code was just a bunch of random words thrown on a screen, I
				was interested in linguistics, writing, and art -and still am.
				<br></br>
				<br></br>
				At the start of 2021 I decided to enrol in the{" "}
				<span>Wild Code School</span>'s boot camp.
				<br></br>
				<br></br>
				There, I learnt everything I needed to know regarding how to build web
				and mobile apps using the latest tech stack (
				<span>MySql, Express, React, Node.js</span>) while following the
				<span> SCRUM methodology</span>.<br></br>
				<br></br>
				The boot camp gave me a structure, but it's my passion for
				<span> never-ending learning</span> that drives me through. It is a new
				journey, and a long one, but I'm up for the challenge!
			</p>
		</section>
	);
}
