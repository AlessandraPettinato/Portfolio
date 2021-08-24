import React, { useState } from "react";

export default function UserInput({ setShowComponent, values, setValues }) {
	const [blinking, setBlinking] = useState(true);

	const [disabled, setDisabled] = useState(false);

	const handleChangeInput = (e) => {
		setBlinking(false);
		setValues({
			userInput: e.target.value,
		});
	};

	const handleClickInput = (e) => {
		e.preventDefault();
		setShowComponent(true);
		setDisabled(true);
	};

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
		</>
	);
}
