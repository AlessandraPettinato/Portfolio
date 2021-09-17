// import { useState } from "react";

// export default function HandleInput() {
// 	const [values, setValues] = useState({
// 		userInput: "",
// 	});

// 	const [disabled, setDisabled] = useState(false);

// 	const [blinking, setBlinking] = useState(false);

// 	const [showComponent, setShowComponent] = useState(false);

// 	const [showError, setShowError] = useState(false);

// 	const [newInput, setNewInput] = useState(false);

// 	const [errorHandling] = useState({
// 		message: "Command not found",
// 	});

// 	const [clear, setClear] = useState(false);

// 	const handleChangeInput = (e) => {
// 		setBlinking(true);
// 		setValues({
// 			userInput: e.target.value.toLowerCase(),
// 		});
// 	};

// 	const manageInput = () => {
// 		switch (values.userInput) {
// 			case "cheatsheet":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "cheatsheet ":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano bio":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano bio ":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano bio.txt":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano space-coachella":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano space-coachella ":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano space-coachella.txt":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano dravo":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano dravo ":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano dravo.txt":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano bright-flash":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano bright-flash ":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "nano bright-flash.txt":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "ls":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "ls ":
// 				setShowComponent(true);
// 				setShowError(false);
// 				break;
// 			case "clear":
// 				setShowComponent(false);
// 				setShowError(false);
// 				setClear(true);
// 			default:
// 				setShowComponent(false);
// 				setShowError(true);
// 		}
// 	};

// 	const handleClickInput = (e) => {
// 		e.preventDefault();
// 		setDisabled(true);
// 		setNewInput(true);
// 		manageInput();
// 	};

// 	return {
// 		values,
// 		setValues,
// 		disabled,
// 		setDisabled,
// 		blinking,
// 		setBlinking,
// 		errorHandling,
// 		handleChangeInput,
// 		handleClickInput,
// 		showComponent,
// 		setShowComponent,
// 		newInput,
// 		showError,
// 		setShowError,
// 		clear,
// 		setClear,
// 	};
// }
