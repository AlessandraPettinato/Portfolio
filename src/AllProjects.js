import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function AllProjects() {
	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;
	return (
		<div className="all-projects-container">
			<header>
				<p className="login">
					Last login: <time>{login}</time> on <span>Alessandra Pettinato</span>
					's <span style={{ color: "#41c731" }}>Portofolio</span>
				</p>
			</header>
			<div className="tilde-blink-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>
				{/* <p className="welcome-message"> WELCOME TO MY PORTFOLIO</p> */}
				{/* <span className="blinking" /> */}
			</div>
		</div>
	);
}
