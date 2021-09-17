// import React from "react";
// import { BsArrowRightShort } from "react-icons/bs";

// import HandleInput from "./HandleInput";

// import Resume from "../Resume";
// import BrightFlash from "../projects/BrightFlash";
// import SpaceCoachella from "../projects/SpaceCoachella";
// import Dravo from "../projects/Dravo";
// import Cheatsheet from "../Cheatsheet";
// import Terminal from "../Terminal";

// export default function UserInput() {
// 	const {
// 		values,
// 		disabled,
// 		blinking,
// 		errorHandling,
// 		handleChangeInput,
// 		handleClickInput,
// 		showComponent,
// 		showError,
// 		newInput,
// 		clear,
// 	} = HandleInput();

// 	return (
// 		<>
// 			<div className="form-container">
// 				<BsArrowRightShort className="arrow" />
// 				<p className="tilde"> ~ </p>
// 				<form onSubmit={(e) => handleClickInput(e)}>
// 					<input
// 						autoFocus
// 						className="caret-block"
// 						className={!blinking ? "blinking" : "stop-blinking"}
// 						value={values.userInput}
// 						onChange={handleChangeInput}
// 						disabled={!blinking ? disabled : disabled}
// 					/>
// 				</form>
// 				{showComponent &&
// 				(values.userInput === "cheatsheet" ||
// 					values.userInput === "cheatsheet ") ? (
// 					<Cheatsheet />
// 				) : null}
// 				{showComponent &&
// 				(values.userInput === "ls" || values.userInput === "ls ") ? (
// 					<>
// 						<p className="ls-resume">bio.txt</p>
// 						<p className="ls-bright">bright-flash</p>
// 						<p className="ls-dravo">dravo</p>
// 						<p className="ls-space">space-coachella.txt</p>
// 					</>
// 				) : null}
// 				{showComponent &&
// 				(values.userInput === "nano bio" ||
// 					values.userInput === "nano bio " ||
// 					values.userInput === "nano bio.txt") ? (
// 					<Resume />
// 				) : null}
// 				{showComponent &&
// 				(values.userInput === "nano bright-flash" ||
// 					values.userInput === "nano bright-flash " ||
// 					values.userInput === "nano bright-flash.txt") ? (
// 					<BrightFlash />
// 				) : null}
// 				{showComponent &&
// 				(values.userInput === "nano space-coachella" ||
// 					values.userInput === "nano space-coachella " ||
// 					values.userInput === "nano space-coachella.txt") ? (
// 					<SpaceCoachella />
// 				) : null}
// 				{showComponent &&
// 				(values.userInput === "nano dravo" ||
// 					values.userInput === "nano dravo " ||
// 					values.userInput === "nano dravo.txt") ? (
// 					<Dravo />
// 				) : null}
// 				{showError ? (
// 					<p className="err">
// 						{values.userInput}: {errorHandling.message}
// 					</p>
// 				) : null}
// 				{clear && values.userInput === "clear" ? (
// 					<Resume />
// 				) : //   !(<SpaceCoachella />) &&
// 				//   !(<Dravo />) &&
// 				//   !(<Resume />)
// 				null}
// 			</div>

// 			{newInput ? <UserInput /> : null}
// 		</>
// 	);
// }
