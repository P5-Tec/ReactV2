import React, { useState } from "react";
import "../styles/Language.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flagUK from "../images/flag-uk.png";
import flagDK from "../images/flag-dk.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//Dropdown items used in dropdown
const options = [
	{
		value: "en-US",
		label: (
			<div className="flagItem">
				<img src={flagUK} height="30px" width="30px" alt="UK Flag" />{" "}
				<p>English</p>
			</div>
		),
	},
	{
		value: "da-DK",
		label: (
			<div className="flagItem">
				<img src={flagDK} height="30px" width="30px" alt="DK Flag" />{" "}
				<p>Dansk</p>
			</div>
		),
	},
];

const Language = ({ language, setLanguage, setCookies }) => {
	//State
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(language);

	//Toggle between isOpen state
	const toggling = () => setIsOpen(!isOpen);

	//On selected item in dropdown update date
	const onOptionClicked = (value) => () => {
		//Set selected option
		setSelectedOption(value.value);
		//Set language value
		setLanguage(value.value);
		//Set new cookie value for "language"
		setCookies("language", value.value.toString(), { path: "/" });
		setIsOpen(false);
	};

	return (
		<div className="Main">
			<div className="DropDownContainer">
				<div className="DropDownHeader" onClick={toggling}>
					{selectedOption === "en-US" ? (
						<div>
							<img src={flagUK} height="40px" width="40px" alt="UK Flag" />
							<FontAwesomeIcon
								icon={faChevronDown}
								size="lg"
								color={"white"}
								style={{ marginLeft: "30px", paddingBottom: "10px" }}
							/>
						</div>
					) : (
						<div>
							<img src={flagDK} height="40px" width="40px" alt="DK Flag" />
							<FontAwesomeIcon
								icon={faChevronDown}
								size="lg"
								color={"white"}
								style={{ marginLeft: "30px", paddingBottom: "10px" }}
							/>
						</div>
					)}
				</div>
				{isOpen && (
					<div className="DropDownBox">
						<ul className="DropDownList">
							{options.map((option) => (
								<li
									className="ListItem"
									onClick={onOptionClicked(option)}
									key={Math.random()}
								>
									{option.label}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Language;
