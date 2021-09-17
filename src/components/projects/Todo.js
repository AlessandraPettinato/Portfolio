import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function Stopwatch() {
	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>Todo List</span>
			</div>

			<div className="content-container">
				<div className="image-link-container">
					<aside className="image">
						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1631897478/Untitled_design_2_ryhpzl.png"
							alt="web app preview of Stopwatch"
						/>
					</aside>

					<aside className="links">
						<span className="github">
							<a
								target="_blank"
								href="https://github.com/AlessandraPettinato/Todo"
								rel="noopener noreferrer"
							>
								GITHUB REPO
							</a>
						</span>
					</aside>
				</div>
				<p className="project-descr">
					A Todo app created with{" "}
					<span className="in-project">HTML and CSS</span>. JavaScript was used
					to manipulate the DOM and make the interaction with the app possible.
					<br />
					<br />
					Thanks to this Todo app you can keep note of all your tasks! You are
					able to add to the list as many "todos" as you want and mark them as
					done whenever you're indeed done with them!
					<br />
					<br />
					If you change your mind and prefer to chill instead of washing your
					dishes, you can delete any tasks as well.
				</p>
			</div>
		</section>
	);
}
