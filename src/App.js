import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import UserInput from "./controllers/UserInput";

import Resume from "./components/Resume";
import BrightFlash from "./components/BrightFlash";
import SpaceCoachella from "./components/SpaceCoachella";
import Dravo from "./components/Dravo";

import "./App.css";

export default function App() {
	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;

	const [showComponent, setShowComponent] = useState(false);

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
				setShowComponent={setShowComponent}
				values={values}
				setValues={setValues}
			/>

			{showComponent && values.userInput === "nano resume" ? <Resume /> : null}
			{showComponent && values.userInput === "nano Bright Flash" ? (
				<BrightFlash />
			) : null}
			{showComponent && values.userInput === "nano Space Coachella" ? (
				<SpaceCoachella />
			) : null}
			{showComponent && values.userInput === "nano Dravo" ? <Dravo /> : null}

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
