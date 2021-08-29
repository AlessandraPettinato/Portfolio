import React from "react";

export default function Cheatsheet() {
	return (
		<>
			<div className="cheatsheet-container">
				<p className="cheat-text">
					Hello there and welcome to my <span>portfolio</span>! My name is
					Alessandra Pettinato, but it’s such a long name that I’d rather you
					call me <span>Sandra</span> :)
					<br></br>
					<br></br>
					If you haven’t figure out yet, this app is based on the Mac’s
					terminal. You can navigate through it using some basic commands.
					<br></br>
					<br></br>
					The portfolio is a work in progress, so unfortunately there’s only a
					few you can use at the moment.
					<br></br>
					<br></br>
					Here’s a list of the available commands:
				</p>
				<br></br>
				<ul>
					<li>
						<p className="cheat-text">
							<span>ls</span>: show the content of the folder;
						</p>
					</li>
					<li>
						<p className="cheat-text">
							{" "}
							<span>nano</span>: open the file you are targeting;
						</p>
					</li>
					<li>
						<p className="cheat-text">
							<span>clear</span>: clear the content of the console.
						</p>
					</li>
				</ul>
				<br></br>
				<br></br>
				<p className="cheat-text">Have fun!</p>
			</div>
		</>
	);
}
