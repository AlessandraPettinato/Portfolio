import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function Dravo() {
	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>DRAVO</span>
			</div>

			<div className="content-container">
				<aside className="image">
					<img
						src="https://res.cloudinary.com/dg5lakmem/image/upload/v1630244294/Bright%20Flash/Untitled_design_2_bbpfib.svg"
						alt="mobile/web app preview of Dravo"
					/>
				</aside>

				<aside className="links">
					<span className="github">
						<a
							target="_blank"
							href="https://github.com/beesage/dravo"
							rel="noopener noreferrer"
						>
							FRONT-END GITHUB REPO
						</a>
					</span>
					<span className="github">
						<a
							target="_blank"
							href="https://github.com/AlessandraPettinato/beesage-api"
							rel="noopener noreferrer"
						>
							BACK-END GITHUB REPO
						</a>
					</span>
				</aside>
				<p className="project-descr">
					Dravo is a social media network for beekeepers.
					<br />
					<br />
					It was created as the final Full-stack project built during my time at
					the <span className="in-project">Wild Code School</span>, and it was
					commissioned by a real client. The project was designed and developed
					by three web developers.
					<br />
					<br />
					Dravo is a side product of <span className="in-project">Beesage</span>
					, a smart scale used for intelligent beekeeping. The MVP set by the
					client was to allow beekeepers to have a
					<span className="in-project"> user profile</span>, load and update
					their information, and then create a
					<span className="in-project"> leaderboard</span> made of the data
					collected through the smart scale.
					<br />
					<br />
					Guided by an experienced senior developer, we were able to design
					ourselves the database, write queries, build the whole back-end
					routing system with <span className="in-project">Express.js</span> and
					finally display it to the front-end through
					<span className="in-project"> React</span>.
					<br />
					<br />
					Every component of the front-end GitHub repository is also fully
					documented.
				</p>
			</div>
		</section>
	);
}
