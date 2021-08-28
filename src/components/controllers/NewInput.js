import React, { useState } from "react";

export default function newInput({ setShowComponent }) {
	const [blinking, setBlinking] = useState(true);

	const [disabled, setDisabled] = useState(false);

	const [newInput, setNewInput] = useState({
		newUserInput: "",
	});

	const handleChangeNewInput = (e) => {
		setBlinking(false);
		setNewInput({
			newUserInput: e.target.value.toLowerCase(),
		});
	};

	const handleClickNewInput = (e) => {
		e.preventDefault();
		setShowComponent(true);
		setDisabled(true);
	};

	return (
		<>
			<form
				onSubmit={(e) => handleClickNewInput(e)}
				style={{ gridColumn: "2/6", gridRow: "5" }}
			>
				<input
					className={blinking ? "blinking" : "stop-blinking"}
					value={newInput.newUserInput}
					onChange={handleChangeNewInput}
					disabled={disabled}
				/>
			</form>
		</>
	);
}
