import React from "react";
import ProjectsList from "./components/ProjectsList";
import Contacts from "./components/Contacts";

import "./App.css";

export default function App() {
	const date = new Date().toDateString().slice(4, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;
	return (
		<>
			<header>
				<p className="line-1 anim-typewriter login ">
					Last login: <time>{login}</time> on Alessandra Pettinato's
					<span style={{ color: "#41c731" }}> Portfolio</span>
				</p>
			</header>
			<Contacts />
			<ProjectsList />
		</>
	);
}
