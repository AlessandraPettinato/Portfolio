import React from "react";
import HandleInput from "./HandleInput";

export default function newInput() {
	const {
		values,
		disabled,
		blinking,
		errorHandling,
		handleChangeInput,
		handleClickInput,
		showComponent,
	} = HandleInput();

	return (
		<>
			<div className="form-container">
				<form onSubmit={(e) => handleClickInput(e)}>
					<input
						className={blinking ? "blinking" : "stop-blinking"}
						value={values.userInput}
						onChange={handleChangeInput}
						disabled={!blinking ? disabled : disabled}
					/>
				</form>
			</div>
		</>
	);
}
