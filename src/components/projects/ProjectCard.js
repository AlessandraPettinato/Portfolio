import React from "react";
import Highlighter from "react-highlight-words";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function ProjectCard({ item }) {
	const {
		name,
		text,
		preview,
		alt,
		gitHub,
		gitHubFrontend,
		gitHubBackend,
		demo,
	} = item;

	let searchWords = [
		"TypeScript",
		"full-stack",
		"mongoDB",
		"Apollo",
		"GraphQL API",
		"Login page",
		"Dashboard",
		"Table",
		"material-ui",
		"Wild Code School",
		"user profile",
		"load",
		"update",
		"leaderboard",
		"mySQL",
		"Express.js",
		"React",
		"wireframes",
		"mockups",
		"gamification",
		"hackathon",
		"NASA API",
		"Pokemon API",
		"pagination",
		"HTML",
		"CSS",
		"JavaScript",
	];

	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span
					style={{
						color: "white",
						fontSize: "2rem",
						textTransform: "uppercase",
						whiteSpace: "nowrap",
					}}
				>
					{name}
				</span>
			</div>
			<div className="content-container">
				<div className="image-link-container">
					<aside className="image">
						<img src={preview} alt={alt} />
					</aside>
					<aside className="links">
						{gitHub && (
							<span className="github">
								<a target="_blank" href={gitHub} rel="noopener noreferrer">
									REPOSITORY
								</a>
							</span>
						)}
						{gitHubFrontend && (
							<span className="github">
								<a
									target="_blank"
									href={gitHubFrontend}
									rel="noopener noreferrer"
								>
									CLIENT REPO
								</a>
							</span>
						)}
						{gitHubBackend && (
							<span className="github">
								<a
									target="_blank"
									href={gitHubBackend}
									rel="noopener noreferrer"
								>
									SERVER REPO
								</a>
							</span>
						)}
						{demo && (
							<span className="website">
								<a target="_blank" href={demo} rel="noopener noreferrer">
									DEMO
								</a>
							</span>
						)}
					</aside>
				</div>
				<Highlighter
					highlightTag="span"
					// className="project-whole-descr"
					highlightClassName="highlight-text"
					unhighlightClassName="project-descr"
					searchWords={searchWords}
					textToHighlight={text}
				/>
			</div>
		</section>
	);
}
