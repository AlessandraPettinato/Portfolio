import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./Project.css";

export default function AdminPanel() {
	return (
		<section className="project-container">
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>{" "}
				<span style={{ color: "white", fontSize: "2rem" }}>ADMIN PANEL</span>
			</div>

			<div className="content-container">
				<div className="image-link-container">
					<aside className="image">
						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1639835456/Portfolio/Untitled_design_6_ypkond.png"
							alt="web app preview of Admin Panel"
						/>
					</aside>

					<aside className="links">
						<span className="github">
							<a
								target="_blank"
								href="https://github.com/AlessandraPettinato/Admin-Panel"
								rel="noopener noreferrer"
							>
								REPOSITORY
							</a>
						</span>
					</aside>
				</div>
				<p className="project-descr">
					The Admin Panel is a full-stack project I am creating in order to
					experiment with <span className="in-project">TypeScript</span>,{" "}
					<span className="in-project">mongoDB</span>, and{" "}
					<span className="in-project">Apollo</span>.
					<br />
					<br />
					The frontend part communicates with the backend through a{" "}
					<span className="in-project">GraphQL API</span>.
					<br />
					<br />
					It features a <span className="in-project">Login page</span> and a{" "}
					<span className="in-project">Dashboard</span>, which contains a{" "}
					<span className="in-project">Table</span> that can be sorted and
					filtered.
					<br />
					<br />I am currently working on restyling each page using{" "}
					<span className="in-project">material-ui</span> components, and on
					creating further functionalities.
					<br />
					<br />
				</p>
			</div>
		</section>
	);
}
