import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/Home.css";

import MoneyImg from "../images/money.png";
import MobileBankImg from "../images/mobileBank.png";
import CreditCardImg from "../images/CreditCards.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const svgVariants = {
	hidden: { rotate: -360 },
	visible: {
		rotate: 0,
		transition: {
			duration: 1,
		},
	},
};

const buttonVarians = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255, 255, 255)",
		boxShadow: "0px 0px 8px #30d95d",
		transition: {
			duration: 0.3,
			yoyo: Infinity,
		},
	},
};

const Home = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

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
					<motion.button variants={buttonVarians} whileHover="hover">
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
				<span className="col-lg-6 linkBox">
					<div>
						<h3>
							<FormattedMessage id="homePage.fifthSection.leftBox.heading" />
						</h3>
						<p>
							<FormattedMessage id="homePage.fifthSection.leftBox.p" />
						</p>
						<Link to="/contact">
							<motion.button variants={buttonVarians} whileHover="hover">
								<FormattedMessage id="homePage.fifthSection.leftBox.btn" />
							</motion.button>
						</Link>
					</div>
				</span>

				<span className="col-lg-6 linkBox">
					<div>
						<h3>
							<FormattedMessage id="homePage.fifthSection.rightBox.heading" />
						</h3>
						<p>
							<FormattedMessage id="homePage.fifthSection.rightBox.p" />
						</p>
						<Link to="/help">
							<motion.button variants={buttonVarians} whileHover="hover">
								<FormattedMessage id="homePage.fifthSection.rightBox.btn" />
							</motion.button>
						</Link>
					</div>
				</span>
			</div>
		</motion.div>
	);
};

export default injectIntl(Home);
