import { useState } from "react";

export default function HandleInput() {
	const [values, setValues] = useState({
		userInput: "",
	});

	const [disabled, setDisabled] = useState(false);

	const [blinking, setBlinking] = useState(false);

	const [showComponent, setShowComponent] = useState(false);

	const [showError, setShowError] = useState(false);

	const [newInput, setNewInput] = useState(false);

	const [errorHandling] = useState({
		message: "Command not found",
	});

	const handleChangeInput = (e) => {
		setBlinking(true);
		setValues({
			userInput: e.target.value.toLowerCase(),
		});
	};

	const manageInput = () => {
		switch (values.userInput) {
			case "nano resume":
				setShowComponent(true);
				setNewInput(false);
				setShowError(false);
				break;
			case "nano space coachella":
				setShowComponent(true);
				setNewInput(false);
				setShowError(false);
				break;
			case "nano dravo":
				setShowComponent(true);
				setNewInput(false);
				setShowError(false);
				break;
			case "nano bright flash":
				setShowComponent(true);
				setNewInput(false);
				setShowError(false);
				break;
			default:
				setShowComponent(false);
				setNewInput(false);
				setShowError(true);
		}
	};

	const handleClickInput = (e) => {
		e.preventDefault();
		setDisabled(true);
		manageInput();
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
		setShowComponent,
		newInput,
		showError,
		setShowError,
	};
}
