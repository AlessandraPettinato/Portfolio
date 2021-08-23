import React from "react";
import "./App.css";

export default function App() {
	const date = new Date().toDateString();
	const hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();

	const login = `${date} ${hours}:${minutes}:${seconds}`;
	console.log(date);

	return (
		<>
			<p className="login">Last login: {login}</p>
			<h1 className="title"> ~ Alessandra Pettinato</h1>
			<p className="intro">
				Some cute words about me. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Donec magna felis, tempor tempus sodales eu, laoreet
				quis ipsum. Ut sed pharetra ante. Sed ultrices arcu quis risus interdum
				mollis id a ex. Praesent vel consectetur leo. Vestibulum purus massa,
				porttitor nec metus ac, gravida mattis mauris.{" "}
			</p>
		</>
	);
}
