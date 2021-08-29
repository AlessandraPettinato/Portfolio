import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import HandleInput from "./HandleInput";

import Resume from "../Resume";
import BrightFlash from "../projects/BrightFlash";
import SpaceCoachella from "../projects/SpaceCoachella";
import Dravo from "../projects/Dravo";

export default function UserInput() {
	const {
		values,
		disabled,
		blinking,
		errorHandling,
		handleChangeInput,
		handleClickInput,
		showComponent,
		showError,
		newInput,
	} = HandleInput();

	return (
		<>
			<div className="form-container">
				<BsArrowRightShort className="arrow" />
				<p className="tilde"> ~ </p>
				<form onSubmit={(e) => handleClickInput(e)}>
					<input
						autoFocus
						className="caret-block"
						// className={!blinking ? "blinking" : "stop-blinking"}
						value={values.userInput}
						onChange={handleChangeInput}
						disabled={!blinking ? disabled : disabled}
					/>
				</form>
				{showComponent && values.userInput === "ls" ? (
					<>
						<p className="ls-resume">bio</p>
						<p className="ls-bright">bright-flash</p>
						<p className="ls-dravo">dravo</p>
						<p className="ls-space">space-coachella</p>
					</>
				) : null}

				{showComponent && values.userInput === "nano bio" ? <Resume /> : null}

				{showComponent && values.userInput === "nano bright-flash" ? (
					<BrightFlash />
				) : null}

				{showComponent && values.userInput === "nano space-coachella" ? (
					<SpaceCoachella />
				) : null}

				{showComponent && values.userInput === "nano dravo" ? <Dravo /> : null}

				{showError ? (
					<p className="err">
						{values.userInput}: {errorHandling.message}
					</p>
				) : null}
			</div>
			{newInput ? <UserInput /> : null}
		</>
	);
}
