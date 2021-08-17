import React from "react";
import { Link } from "react-router-dom";

export default function TestHeader() {
	return (
		<nav>
			<ul className="mr-10">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/route1">Go to Route </Link>
				</li>
				<li>
					<Link to="/route2">Go to Route 2</Link>
				</li>
			</ul>
		</nav>
	);
}
