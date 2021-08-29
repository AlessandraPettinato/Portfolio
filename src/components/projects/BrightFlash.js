import React from "react";

import "./Project.css";

export default function BrightFlash() {
	return (
		<div className="project-container">
			<h2 className="project-title">
				<span>Bright Flash</span>
			</h2>

			<div className="left">
				<img
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1630240534/Bright%20Flash/Untitled_design_bdvorz.svg"
					alt="mobile/web app preview of Bright Flash"
				/>
			</div>
			<div className="right">
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
			</div>
			<p className="project-descr">
				The contributions of women to the advancement of science, the
				improvement of society and the care of our communities have always been
				there. Too often they are forgotten or overlooked in history books.
				<br></br>
				<br></br>
				The goal of this website is to give women back their rightful place in
				history. By playing a game of memory cards, we hope that you will learn
				about and remember the names and contributions of these pioneering
				women.
			</p>
		</div>
	);
}
