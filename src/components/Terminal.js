import React from "react";

import UserInput from "./controllers/UserInput";

export default function Terminal() {
	const date = new Date().toDateString().slice(0, 10);
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;

	return (
		<>
			<p className="login">Last login: {login} on Alessandra Pettinato</p>
			<div className="user-container">
				<UserInput />
			</div>
			<p className="cheatsheet">
				*type <span>cheatsheet</span> if you're unsure on what to do ;)
			</p>
		</>
	);
}
