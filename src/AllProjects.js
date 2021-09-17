import React from "react";

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
					Last login: <time>{login}</time> on Alessandra Pettinato's{" "}
					<span style={{ color: "#41c731" }}>Portofolio</span>
				</p>
			</header>
		</div>
	);
}
