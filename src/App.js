import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import ProjectOne from "./components/ProjectOne";
import Resume from "./components/Resume";
import "./App.css";
import UserInput from "./controllers/UserInput";

export default function App() {
	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;

	const [showResume, setShowResume] = useState(false);

	const [values, setValues] = useState({
		userInput: "",
	});

	return (
		<>
			<p className="login">Last login: {login}</p>
			<div className="user-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>
				<p className="user" text="/Users/visitor"></p>
			</div>
			<UserInput
				showResume={showResume}
				setShowResume={setShowResume}
				values={values}
				setValues={setValues}
			/>

			{showResume && values.userInput === "nano resume" ? <Resume /> : null}
			{/* <p className="intro">
				Some cute words about me. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Donec magna felis, tempor tempus sodales eu, laoreet
				quis ipsum. Ut sed pharetra ante. Sed ultrices arcu quis risus interdum
				mollis id a ex. Praesent vel consectetur leo. Vestibulum purus massa,
				porttitor nec metus ac, gravida mattis mauris.{" "}
			</p> */}
		</>
	);
}
