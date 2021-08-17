import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TestHeader from "./TestHeader";
import TestHome from "./TestHome";
import Route1 from "./Route1";
import Route2 from "./Route2";

export default function App() {
	return (
		<div>
			<Router>
				<TestHeader />
				<Switch>
					<TestHome />
					<Route path="/route1" component={Route1} />
					<Route path="/route2" component={Route2} />
					<Route exact path="/" component={TestHome} />
				</Switch>
			</Router>
		</div>
	);
}
