import { useState } from "react";

export default function HandleInput() {
	const [values, setValues] = useState({
		userInput: "",
	});

	const [disabled, setDisabled] = useState(false);

	const [blinking, setBlinking] = useState(true);

	const [showComponent, setShowComponent] = useState(false);

	const [errorHandling] = useState({
		message: "Command not found",
	});

	const handleChangeInput = (e) => {
		setBlinking(false);
		setValues({
			userInput: e.target.value.toLowerCase(),
		});
	};

	const handleClickInput = (e) => {
		e.preventDefault();
		setShowComponent(true);
		setDisabled(true);
	};

	return {
		values,
		setValues,
		disabled,
		setDisabled,
		blinking,
		setBlinking,
		errorHandling,
		handleChangeInput,
		handleClickInput,
		showComponent,
	};
}
