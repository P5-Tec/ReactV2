import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MoneyImg from "../images/money.png";
import MobileBankImg from "../images/mobileBank.png";
import CreditCardImg from "../images/CreditCards.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	return (
		<div>
			<div>
				<img src={MoneyImg} alt="Money" />
				<span>
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
					<button>
						<FormattedMessage id="homePage.firstSection.btn" />
					</button>
				</span>
			</div>

			<div>
				<span>
					<FontAwesomeIcon
						icon={faCheck}
						color={"green"}
						size="2x"
						style={{
							borderRadius: "50px",
							border: "green solid 5px",
							padding: "5px",
						}}
					/>
					<p>
						<FormattedMessage id="homePage.secondSection.first" />
					</p>
				</span>

				<span>
					<FontAwesomeIcon
						icon={faCheck}
						color={"green"}
						size="2x"
						style={{
							borderRadius: "50px",
							border: "green solid 5px",
							padding: "5px",
						}}
					/>
					<p>
						<FormattedMessage id="homePage.secondSection.second" />
					</p>
				</span>

				<span>
					<FontAwesomeIcon
						icon={faCheck}
						color={"green"}
						size="2x"
						style={{
							borderRadius: "50px",
							border: "green solid 5px",
							padding: "5px",
						}}
					/>
					<p>
						<FormattedMessage id="homePage.secondSection.third" />
					</p>
				</span>
			</div>

			<div>
				<img src={MobileBankImg} alt="Bank app" />
				<span>
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

			<div>
				<img src={CreditCardImg} alt="Credit card" />
				<span>
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

			<div>
				<div>
					<h3>
						<FormattedMessage id="homePage.fifthSection.leftBox.heading" />
					</h3>
					<p>
						<FormattedMessage id="homePage.fifthSection.leftBox.p" />
					</p>
					<Link to="/contact">
						<button>
							<FormattedMessage id="homePage.fifthSection.leftBox.btn" />
						</button>
					</Link>
				</div>
				<div>
					<h3>
						<FormattedMessage id="homePage.fifthSection.rightBox.heading" />
					</h3>
					<p>
						<FormattedMessage id="homePage.fifthSection.rightBox.p" />
					</p>
					<Link to="/help">
						<button>
							<FormattedMessage id="homePage.fifthSection.rightBox.btn" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(Home);
