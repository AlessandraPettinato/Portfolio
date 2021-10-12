import React from "react";

import "./Contacts.css";

export default function Resume() {
	return (
		// <section className="contacts-container">
		// 	<aside>
		// 		<h1 className="contacts">CONTACTS</h1>
		// 		<>
		// 			<a
		// 				target="_blank"
		// 				href="https://www.linkedin.com/in/alessandra-pettinato/"
		// 				rel="noopener noreferrer"
		// 			>
		// 				<h1 className="handles">LinkedIn</h1>
		// 			</a>
		// 			<a
		// 				target="_blank"
		// 				href="https://github.com/AlessandraPettinato"
		// 				rel="noopener noreferrer"
		// 			>
		// 				<h1 className="handles">GitHub</h1>
		// 			</a>
		// 		</>
		// 		<a
		// 			target="_blank"
		// 			href="mailto:alessandrapettinato@hotmail.it"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h1 className="handles">Mail</h1>
		// 		</a>
		// 	</aside>
		// </section>
		<section className="contacts-container">
			<>
				<li>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/alessandra-pettinato/"
						rel="noopener noreferrer"
					>
						<h1 className="handles">LinkedIn</h1>
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://github.com/AlessandraPettinato"
						rel="noopener noreferrer"
					>
						<h1 className="handles">GitHub</h1>
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="mailto:alessandrapettinato@hotmail.it"
						rel="noopener noreferrer"
					>
						<h1 className="handles">Mail</h1>
					</a>
				</li>
			</>
		</section>
	);
}
