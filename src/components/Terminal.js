import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import HandleInput from "./controllers/HandleInput";
import UserInput from "./controllers/UserInput";
import NewInput from "./controllers/NewInput";

export default function Terminal() {
	const { showComponent, newInput, typed, values, handleClickInput } =
		HandleInput();

	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;

	return (
		<>
			<p className="login">Last login: {login}</p>
			<div className="user-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>
				<UserInput />
				{newInput && <UserInput />}
			</div>

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
