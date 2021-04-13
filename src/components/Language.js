import React, { useState } from "react";
import "../styles/Language.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flagUK from "../images/flag-uk.png";
import flagDK from "../images/flag-dk.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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

const Language = ({ language, setLanguage }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(language);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedOption(value.value);
		setLanguage(value.value);
		setIsOpen(false);
	};

	return (
		<div className="Main">
			<div className="DropDownContainer">
				<div className="DropDownHeader" onClick={toggling}>
					{selectedOption === "en-US" ? (
						<div className="">
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
					<div>
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
