import React from "react";
import HandleInput from "../../HandleInput";

import Resume from "../Resume";
import BrightFlash from "../projects/BrightFlash";
import SpaceCoachella from "../projects/SpaceCoachella";
import Dravo from "../projects/Dravo";

export default function UserInput() {
	const {
		values,
		disabled,
		blinking,
		handleChangeInput,
		handleClickInput,
		showComponent,
	} = HandleInput();

	return (
		<>
			<form onSubmit={(e) => handleClickInput(e)}>
				<input
					className={blinking ? "blinking" : "stop-blinking"}
					value={values.userInput}
					onChange={handleChangeInput}
					disabled={disabled}
				/>
			</form>

			{showComponent && values.userInput === "nano resume" ? <Resume /> : null}

			{showComponent && values.userInput === "nano bright flash" ? (
				<BrightFlash />
			) : null}

			{showComponent && values.userInput === "nano space coachella" ? (
				<SpaceCoachella />
			) : null}

			{showComponent && values.userInput === "nano dravo" ? <Dravo /> : null}
		</>
	);
}
