import React from "react";
import AllProjects from "./components/AllProjects";
import Contacts from "./components/Contacts";

import "./App.css";

export default function App() {
	const date = new Date().toDateString().slice(0, 10);
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
			<AllProjects />
			<Contacts />
		</>
	);
}
