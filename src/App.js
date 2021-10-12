import React from "react";
// import AllProjects from "./components/AllProjects";
import AllProjects1 from "./components/AllProjects1";
import Contacts from "./components/Contacts";
import "./components/AllProjects1-style.css";

import "./App.css";

export default function App() {
	// const date = new Date().toDateString().slice(0, 10);
	// const hours = new Date().getHours();
	// const minutes = new Date().getMinutes();
	// const seconds = new Date().getSeconds();

	// const login = `${date} ${hours}:${minutes}:${seconds}`;
	return (
		<>
			<header>
				{/* <p className="line-1 anim-typewriter login ">
					Last login: <time>{login}</time> on Alessandra Pettinato's
					<span style={{ color: "#41c731" }}> Portfolio</span>
				</p> */}
				<p id="main-caption">Alessandra Pettinato</p>
				<p id="job-position">Front-End Developer</p>
				<hr className="break-portfolio" />
			</header>

			{/* <AllProjects /> */}
			<Contacts />
			<AllProjects1 />
		</>
	);
}
