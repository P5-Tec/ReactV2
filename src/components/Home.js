import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/Home.css";

import MoneyImg from "../images/money.png";
import MobileBankImg from "../images/mobileBank.png";
import CreditCardImg from "../images/CreditCards.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { svgVariants, boxVariants, bigBtnVariants } from "./helpers/Variants";

const Home = () => {
	const controls = useAnimation();
	const controls1 = useAnimation();
	const [ref, inView] = useInView();
	const [ref1, inView1] = useInView({ triggerOnce: true });

	//Checking if element is in view and then starting or stopping animation
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
		if (inView1) {
			controls1.start("visible");
		}
		if (!inView1) {
			controls1.start("hidden");
		}
	}, [controls, controls1, inView, inView1]);

	return (
		<motion.div
			className="container-fluid mainDiv"
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="row sectionDiv">
				<img
					className="col-lg-6 order-lg-2 sectionImg"
					src={MoneyImg}
					alt="Money"
				/>
				<span className="col-lg-6 order-lg-1">
					<h2>
						<FormattedMessage id="homePage.firstSection.heading" />
					</h2>
					<p>
						<FormattedMessage id="homePage.firstSection.p1" />
					</p>
					<p>
						<FormattedMessage id="homePage.firstSection.p2" />
					</p>
					<p>
						<FormattedMessage id="homePage.firstSection.p3" />
					</p>
					<motion.button
						variants={bigBtnVariants}
						whileHover="hover"
						whileTap="hover"
					>
						<FormattedMessage id="homePage.firstSection.btn" />
					</motion.button>
				</span>
			</div>

			<div className="row sectionDiv infoDiv">
				<span className="col-lg-4 infoBox">
					<motion.section
						ref={ref}
						variants={svgVariants}
						initial="hidden"
						animate={controls}
					>
						<FontAwesomeIcon
							className="infoBoxIcon"
							icon={faCheck}
							color={"green"}
							size="4x"
							style={{
								borderRadius: "50px",
								border: "green solid 5px",
								padding: "5px",
							}}
						/>
					</motion.section>
					<p>
						<FormattedMessage id="homePage.secondSection.first" />
					</p>
				</span>

				<span className="col-lg-4 infoBox">
					<motion.section
						ref={ref}
						variants={svgVariants}
						initial="hidden"
						animate={controls}
					>
						<FontAwesomeIcon
							className="infoBoxIcon"
							icon={faCheck}
							color={"green"}
							size="4x"
							style={{
								borderRadius: "50px",
								border: "green solid 5px",
								padding: "5px",
							}}
						/>
					</motion.section>
					<p>
						<FormattedMessage id="homePage.secondSection.second" />
					</p>
				</span>

				<span className="col-lg-4 infoBox">
					<motion.section
						ref={ref}
						variants={svgVariants}
						initial="hidden"
						animate={controls}
					>
						<FontAwesomeIcon
							className="infoBoxIcon"
							icon={faCheck}
							color={"green"}
							size="4x"
							style={{
								borderRadius: "50px",
								border: "green solid 5px",
								padding: "5px",
							}}
						/>
					</motion.section>
					<p>
						<FormattedMessage id="homePage.secondSection.third" />
					</p>
				</span>
			</div>

			<div className="row sectionDiv">
				<img
					className="col-lg-6 sectionImg"
					src={MobileBankImg}
					alt="Bank app"
				/>
				<span className="col-lg-6">
					<h2>
						<FormattedMessage id="homePage.thirdSection.heading" />
					</h2>
					<p>
						<FormattedMessage id="homePage.thirdSection.p1" />
					</p>
					<p>
						<FormattedMessage id="homePage.thirdSection.p2" />
					</p>
					<p>
						<FormattedMessage id="homePage.thirdSection.p3" />
					</p>
				</span>
			</div>

			<div className="row sectionDiv">
				<img
					className="col-lg-6 order-lg-2 sectionImg"
					src={CreditCardImg}
					alt="Credit card"
				/>
				<span className="col-lg-6 order-lg-1">
					<h2>
						<FormattedMessage id="homePage.fourthSection.heading" />
					</h2>
					<p>
						<FormattedMessage id="homePage.fourthSection.p1" />
					</p>
					<p>
						<FormattedMessage id="homePage.fourthSection.p2" />
					</p>
					<p>
						<FormattedMessage id="homePage.fourthSection.p3" />
					</p>
				</span>
			</div>

			<div className="row sectionDiv">
				<motion.span
					className="col-lg-6 linkBox"
					ref={ref1}
					variants={boxVariants}
					initial="hidden"
					animate={controls1}
				>
					<div>
						<h3>
							<FormattedMessage id="homePage.fifthSection.leftBox.heading" />
						</h3>
						<p>
							<FormattedMessage id="homePage.fifthSection.leftBox.p" />
						</p>
						<Link to="/contact">
							<motion.button
								variants={bigBtnVariants}
								whileHover="hover"
								whileTap="hover"
							>
								<FormattedMessage id="homePage.fifthSection.leftBox.btn" />
							</motion.button>
						</Link>
					</div>
				</motion.span>

				<motion.span
					className="col-lg-6 linkBox"
					ref={ref1}
					variants={boxVariants}
					initial="hidden"
					animate={controls1}
				>
					<div>
						<h3>
							<FormattedMessage id="homePage.fifthSection.rightBox.heading" />
						</h3>
						<p>
							<FormattedMessage id="homePage.fifthSection.rightBox.p" />
						</p>
						<Link to="/help">
							<motion.button
								variants={bigBtnVariants}
								whileHover="hover"
								whileTap="hover"
							>
								<FormattedMessage id="homePage.fifthSection.rightBox.btn" />
							</motion.button>
						</Link>
					</div>
				</motion.span>
			</div>
		</motion.div>
	);
};

export default injectIntl(Home);
