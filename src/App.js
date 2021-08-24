import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import ProjectOne from "./components/ProjectOne";
import Resume from "./components/Resume";
import "./App.css";

export default function App() {
	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;

	const [blinking, setBlinking] = useState(true);

	const [values, setValues] = useState({
		userInput: "",
	});

	const [showResume, setShowResume] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const handleChangeInput = (e) => {
		setBlinking(false);
		setValues({
			userInput: e.target.value,
		});
	};

	const handleClickInput = (e) => {
		e.preventDefault();
		setShowResume(true);
		setDisabled(true);
		console.log("clicked");
	};

	return (
		<>
			<p className="login">Last login: {login}</p>
			<div className="user-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>
				<p className="user" text="/Users/visitor"></p>
				<form onSubmit={(e) => handleClickInput(e)}>
					<input
						className={blinking ? "blinking" : "stop-blinking"}
						value={values.userInput}
						onChange={handleChangeInput}
						disabled={disabled}
					/>
				</form>
				{/* <button
					onClick={() => handleClickInput()}
					style={{ position: "absolute", left: "40rem" }}
				>
					Clicca quaaa
				</button> */}
			</div>
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
