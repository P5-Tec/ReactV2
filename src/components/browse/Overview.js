import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import { motion } from "framer-motion";

import { btnVariants } from "../helpers/Variants";

import "../../styles/Overview.css";

import masterCard from "../../images/mastercardIcon.png";
import visa from "../../images/visaIcon.png";
import virtual from "../../images/virtualCard.png";

const loaderVariants = {
	animationOne: {
		x: [-40, 40],
		y: [20, -50],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: "easeOut",
			},
		},
	},
};

const Overview = ({ userAccount }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [showTransaction, setShowTransaction] = useState(false);
	const [userTransactions, setUserTransactions] = useState([{}]);

	//Method used for getting user account info (transactions)
	const getTransactions = async (accID) => {
		await fetch("http://api.saxproduction.dk/api/Accounts/" + accID, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				response.json().then(function (data) {
					setUserTransactions(data.transactions);
					setShowTransaction(true);
				});
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			{isLoading ? (
				<div className="loader-div">
					<motion.div
						className="loader"
						variants={loaderVariants}
						animate="animationOne"
					></motion.div>
					<p className="loader-text">Loading</p>
				</div>
			) : (
				<div className="overviewMain">
					{userAccount.map((acc) => (
						<div className="accDiv" key={acc.accountId}>
							<h3>
								<FormattedMessage id="OverviewPage.section1.header" />
							</h3>
							<div className="container-fluid">
								<span className="row">
									<p className="col-sm-9 accNr">{acc.accountNumber}</p>
									<p className="col-sm-3 accType">
										<b>
											<FormattedMessage id="OverviewPage.section1.txt1" />
										</b>
										{": "}
										{acc.accountType === 0 ? (
											<FormattedMessage id="OverviewPage.section1.type1" />
										) : (
											<FormattedMessage id="OverviewPage.section1.type2" />
										)}
									</p>
								</span>
								<span className="row">
									<p className="col-sm-12 accBal">
										<b>
											<FormattedMessage id="OverviewPage.section1.txt2" />
										</b>
										{": "} {acc.balance}
									</p>
								</span>
							</div>

							{acc.cards
								? acc.cards.map((card) => (
										<div className="cardDiv" key={card.cardId}>
											<h3>
												<FormattedMessage id="OverviewPage.section2.header" />
											</h3>
											<div className="container-fluid">
												<span className="row">
													<p className="col-sm-12">
														{card.cardnNumber
															.toString()
															.replace(/[^\d0-9]/g, "")
															.replace(/(.{4})/g, "$1 ")
															.trim()}
													</p>
												</span>
												<span className="row">
													<span className="col-sm-9">
														<p>
															<b>
																<FormattedMessage id="OverviewPage.section2.txt1" />
															</b>
															{": "} {card.ccv}
														</p>
														<p>
															<b>
																<FormattedMessage id="OverviewPage.section2.txt2" />
															</b>
															{": "}
															{card.expirationDate.split("-")[1].trim(2)}
															{"/"}
															{card.expirationDate.split("-")[0].trim("-")}
														</p>
													</span>
													<span className="col-sm-3">
														{card.cardStatus === 0 ? (
															<span className="row cardInfo">
																<b>
																	<FormattedMessage id="OverviewPage.section2.txt3" />
																</b>
																{": "}
																<FormattedMessage id="OverviewPage.section2.status1" />
																<p id="activeStatus"></p>
															</span>
														) : card.cardStatus === 1 ? (
															<span className="row cardInfo">
																<b>
																	<FormattedMessage id="OverviewPage.section2.txt3" />
																</b>
																{": "}
																<FormattedMessage id="OverviewPage.section2.status2" />
																<p id="frozenStatus"></p>
															</span>
														) : (
															<span className="row cardInfo">
																<b>
																	<FormattedMessage id="OverviewPage.section2.txt3" />
																</b>
																{": "}
																<FormattedMessage id="OverviewPage.section2.status3" />
																<p id="inactiveStatus"></p>
															</span>
														)}

														{card.cardType === 0 ? (
															<span className="row cardInfo">
																<b>
																	<FormattedMessage id="OverviewPage.section2.txt4" />
																</b>
																{": "}
																<FormattedMessage id="OverviewPage.section2.type1" />

																<img className="typeImg" src={masterCard} />
															</span>
														) : card.cardType === 1 ? (
															<span className="row cardInfo">
																<b>
																	<FormattedMessage id="OverviewPage.section2.txt4" />
																</b>
																{": "}
																<FormattedMessage id="OverviewPage.section2.type2" />
																<img className="typeImg" src={visa} />
															</span>
														) : (
															<span className="row cardInfo">
																<b>
																	<FormattedMessage id="OverviewPage.section2.txt4" />
																</b>
																{": "}
																<FormattedMessage id="OverviewPage.section2.type3" />
																<img className="typeImg" src={virtual} />
															</span>
														)}
													</span>
												</span>
											</div>
										</div>
								  ))
								: null}

							{showTransaction ? (
								<motion.button
									className="transaccBtn"
									variants={btnVariants}
									whileHover="hover"
									onClick={() => setShowTransaction(false)}
								>
									<FormattedMessage id="OverviewPage.section3.btn2" />
								</motion.button>
							) : (
								<motion.button
									className="transaccBtn"
									variants={btnVariants}
									whileHover="hover"
									onClick={() => getTransactions(acc.accountId)}
								>
									<FormattedMessage id="OverviewPage.section3.btn1" />
								</motion.button>
							)}

							{showTransaction ? (
								<div>
									<h3>
										<FormattedMessage id="OverviewPage.section3.header" />
									</h3>

									{userTransactions.map((t) => (
										<div className="transaccDiv" key={t.transactionId}>
											<div className="container-fluid singleTransacc">
												<p>Transaction Id: {t.transactionId}</p>
												<p>Transaction status: {t.status}</p>
												<p>Transaction ammount: {t.transactionAmount}</p>
											</div>
										</div>
									))}
								</div>
							) : null}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default injectIntl(Overview);
