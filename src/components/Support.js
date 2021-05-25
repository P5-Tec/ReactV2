import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { motion } from "framer-motion";

import FaqImage from "../images/faq.png";
import "../styles/Support.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowCircleDown,
	faCreditCard,
	faMobileAlt,
	faUniversity,
	faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import { bigBtnVariants } from "./helpers/Variants";

// Variants (Animation) for qa div:
// Makes them appear on screen - opacity from 0 to 1 in duration of 1 second
const qaBoxVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const Support = () => {
	//State hooks for 5 sections to toggle them
	const [section1, setSection1] = useState(false);
	const [section2, setSection2] = useState(false);
	const [section3, setSection3] = useState(false);
	const [section4, setSection4] = useState(false);
	const [section5, setSection5] = useState(false);

	//Method used to toggle section boolean by the section on which user clicked (using switch)
	const toggleOpened = (index) => {
		switch (index) {
			case 1:
				setSection1(!section1);
				break;
			case 2:
				setSection2(!section2);
				break;
			case 3:
				setSection3(!section3);
				break;
			case 4:
				setSection4(!section4);
				break;
			case 5:
				setSection5(!section5);
				break;
			default:
				break;
		}
	};

	return (
		<motion.div
			className="container-fluid mainDiv"
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="row supportMainSection">
				<img
					src={FaqImage}
					alt="FAQ"
					className="col-lg-6 order-lg-2 sectionImg"
				/>
				<span className="col-lg-6 order-lg-1">
					<h2>
						<FormattedMessage id="SupportPage.mainSection.heading" />
					</h2>
					<p>
						<FormattedMessage id="SupportPage.mainSection.p1" />
					</p>
					<p>
						<FormattedMessage id="SupportPage.mainSection.p2" />
						<motion.section
							className="yoyoIcon"
							animate={{
								y: 10,
								transition: {
									duration: 1,
									repeat: Infinity,
									repeatType: "mirror",
								},
							}}
						>
							<FontAwesomeIcon
								icon={faArrowCircleDown}
								size="1x"
								color={"#30d95d"}
								style={{ margin: "auto 1rem" }}
							/>
						</motion.section>
					</p>

					<p>
						<FormattedMessage id="SupportPage.mainSection.p3" />
					</p>
					<Link to="/contact">
						<motion.button variants={bigBtnVariants} whileHover="hover">
							<FormattedMessage id="SupportPage.mainSection.btn" />
						</motion.button>
					</Link>
				</span>
			</div>

			<motion.div className="row supportSection">
				<span className="col-lg-12" onClick={() => toggleOpened(1)}>
					<h2>
						<FormattedMessage id="SupportPage.section1.h1" />
					</h2>
				</span>

				{section1 &&
					[...Array(5)].map((e, i) => (
						<motion.div
							key={i}
							className="col-lg-6 qaDiv"
							variants={qaBoxVariants}
							animate={section1 ? "visible" : "hidden"}
						>
							<p className="question">
								<FormattedMessage id={"SupportPage.section1.q" + i} />
							</p>
							<p className="answer">
								<FormattedMessage id={"SupportPage.section1.a" + i} />
							</p>
						</motion.div>
					))}
			</motion.div>

			<div className="row supportSection">
				<span className="col-lg-12" onClick={() => toggleOpened(2)}>
					<FontAwesomeIcon icon={faUserAlt} size="2x" color={"#30d95d"} />
					<h2>
						<FormattedMessage id="SupportPage.section2.h1" />
					</h2>
				</span>

				{section2 &&
					[...Array(2)].map((e, i) => (
						<motion.div
							key={i}
							className="col-lg-6 qaDiv"
							variants={qaBoxVariants}
							animate={section2 ? "visible" : "hidden"}
						>
							<p className="question">
								<FormattedMessage id={"SupportPage.section2.q" + i} />
							</p>
							<p className="answer">
								<FormattedMessage id={"SupportPage.section2.a" + i} />
							</p>
						</motion.div>
					))}
			</div>

			<div className="row supportSection">
				<span className="col-lg-12" onClick={() => toggleOpened(3)}>
					<FontAwesomeIcon icon={faCreditCard} size="2x" color={"#30d95d"} />
					<h2>
						<FormattedMessage id="SupportPage.section3.h1" />
					</h2>
				</span>

				{section3 &&
					[...Array(6)].map((e, i) => (
						<motion.div
							key={i}
							className="col-lg-6 qaDiv"
							variants={qaBoxVariants}
							animate={section3 ? "visible" : "hidden"}
						>
							<p className="question">
								<FormattedMessage id={"SupportPage.section3.q" + i} />
							</p>
							<p className="answer">
								<FormattedMessage id={"SupportPage.section3.a" + i} />
							</p>
						</motion.div>
					))}
			</div>

			<div className="row supportSection">
				<span className="col-lg-12" onClick={() => toggleOpened(4)}>
					<FontAwesomeIcon icon={faMobileAlt} size="2x" color={"#30d95d"} />
					<h2>
						<FormattedMessage id="SupportPage.section4.h1" />
					</h2>
				</span>

				{section4 &&
					[...Array(3)].map((e, i) => (
						<motion.div
							key={i}
							className="col-lg-6 qaDiv"
							variants={qaBoxVariants}
							animate={section4 ? "visible" : "hidden"}
						>
							<p className="question">
								<FormattedMessage id={"SupportPage.section4.q" + i} />
							</p>
							<p className="answer">
								<FormattedMessage id={"SupportPage.section4.a" + i} />
							</p>
						</motion.div>
					))}
			</div>

			<div className="row supportSection">
				<span className="col-lg-12" onClick={() => toggleOpened(5)}>
					<FontAwesomeIcon icon={faUniversity} size="2x" color={"#30d95d"} />
					<h2>
						<FormattedMessage id="SupportPage.section5.h1" />
					</h2>
				</span>

				{section5 &&
					[...Array(4)].map((e, i) => (
						<motion.div
							key={i}
							className="col-lg-6 qaDiv"
							variants={qaBoxVariants}
							animate={section5 ? "visible" : "hidden"}
						>
							<p className="question">
								<FormattedMessage id={"SupportPage.section5.q" + i} />
							</p>
							<p className="answer">
								<FormattedMessage id={"SupportPage.section5.a" + i} />
							</p>
						</motion.div>
					))}
			</div>
		</motion.div>
	);
};

export default injectIntl(Support);
