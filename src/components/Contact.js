import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCommentDots,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
	return (
		<div>
			<div>
				<h3>
					<FormattedMessage id="contactPage.firstSection.heading" />
				</h3>
				<p>
					<FormattedMessage id="contactPage.firstSection.p1" />
				</p>
				<p>
					<FormattedMessage id="contactPage.firstSection.p2" />
				</p>
				<Link to="/help">
					<button>
						<FormattedMessage id="contactPage.firstSection.btn" />
					</button>
				</Link>
			</div>

			<div>
				<div>
					<FontAwesomeIcon
						icon={faCommentDots}
						size="5x"
						color={"green"}
						style={{
							borderRadius: "30px",
							border: "green solid 5px",
							padding: "10px",
						}}
					/>
					<h2>
						<FormattedMessage id="contactPage.secondSection.firstBox.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.secondSection.firstBox.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.firstBox.p2" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.firstBox.p3" />
					</p>
				</div>

				<div>
					<FontAwesomeIcon
						icon={faPhone}
						size="5x"
						color={"green"}
						style={{
							borderRadius: "30px",
							border: "green solid 5px",
							padding: "10px",
						}}
					/>
					<h2>
						<FormattedMessage id="contactPage.secondSection.secondBox.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.secondSection.secondBox.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.secondBox.p2" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.secondBox.p3" />
					</p>
				</div>

				<div>
					<FontAwesomeIcon
						icon={faEnvelope}
						size="5x"
						color={"green"}
						style={{
							borderRadius: "30px",
							border: "green solid 5px",
							padding: "10px",
						}}
					/>
					<h2>
						<FormattedMessage id="contactPage.secondSection.thirdBox.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.secondSection.thirdBox.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.thirdBox.p2" />
					</p>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(Contact);
