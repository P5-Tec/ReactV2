import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import "../styles/TermsAndPricavy.css";

const Privacy = () => {
	return (
		<div className="sectionMain">
			<div className="section">
				<h1 className="mainHeading">
					<FormattedMessage id="PrivacyPage.mainHeading" />
				</h1>
				<p className="updatedP">
					<FormattedMessage id="PrivacyPage.date" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.p1" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.p2" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="PrivacyPage.firstSection.h1" />
				</h1>
				<h2>
					<FormattedMessage id="PrivacyPage.firstSection.h2_1" />
				</h2>
				<p>
					<FormattedMessage id="PrivacyPage.firstSection.p1" />
				</p>
				<h2>
					<FormattedMessage id="PrivacyPage.firstSection.h2_2" />
				</h2>
				<p>
					<FormattedMessage id="PrivacyPage.firstSection.p2" />:
				</p>
				<ul>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList1"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList2"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList3"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList4"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList5"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList6"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList7"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList8"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList9"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList10"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList11"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList12"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList13"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.firstSection.pList14"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
				</ul>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="PrivacyPage.secondSection.h1" />
				</h1>
				<h2>
					<FormattedMessage id="PrivacyPage.secondSection.h2_1" />
				</h2>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_1" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p1" />
				</p>
				<ul>
					<li>
						<p>
							<FormattedMessage id="PrivacyPage.secondSection.pList1" />
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage id="PrivacyPage.secondSection.pList2" />
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage id="PrivacyPage.secondSection.pList3" />
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage id="PrivacyPage.secondSection.pList4" />
						</p>
					</li>
				</ul>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_2" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p2" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p3" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p4" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p5" />
				</p>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_3" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p6" />
				</p>
				<ul>
					<li>
						<FormattedMessage id="PrivacyPage.secondSection.p7" />
					</li>
				</ul>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p8" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p9" />
				</p>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_4" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p10" />
				</p>
				<ul>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList5"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList6"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList7"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
				</ul>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p11" />
				</p>
				<h2>
					<FormattedMessage id="PrivacyPage.secondSection.h2_2" />
				</h2>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p12" />
				</p>
				<ul>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList8"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList9"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList10"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList11"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList12"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList13"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList14"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="PrivacyPage.secondSection.pList15"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
				</ul>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p13" />
				</p>
				<ul>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList16"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList17"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList18"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList19"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList20"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
					<li>
						<FormattedMessage
							id="PrivacyPage.secondSection.pList21"
							values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
						/>
					</li>
				</ul>
				<h2>
					<FormattedMessage id="PrivacyPage.secondSection.h2_3" />
				</h2>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p14" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p15" />
				</p>
				<h2>
					<FormattedMessage id="PrivacyPage.secondSection.h2_4" />
				</h2>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p16" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p17" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p18" />
				</p>
				<h2>
					<FormattedMessage id="PrivacyPage.secondSection.h2_5" />
				</h2>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_5" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p19" />
				</p>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_6" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p20" />
				</p>
				<h3>
					<FormattedMessage id="PrivacyPage.secondSection.h3_7" />
				</h3>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p21" />
				</p>
				<ul>
					<li>
						<FormattedMessage id="PrivacyPage.secondSection.pList22" />{" "}
					</li>
					<li>
						<FormattedMessage id="PrivacyPage.secondSection.pList23" />
					</li>
					<li>
						<FormattedMessage id="PrivacyPage.secondSection.pList24" />
					</li>
					<li>
						<FormattedMessage id="PrivacyPage.secondSection.pList25" />
					</li>
					<li>
						<FormattedMessage id="PrivacyPage.secondSection.pList26" />
					</li>
				</ul>
				<h2>
					<FormattedMessage id="PrivacyPage.secondSection.h2_6" />
				</h2>
				<p>
					<FormattedMessage id="PrivacyPage.secondSection.p22" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="PrivacyPage.thirdSection.h1" />
				</h1>
				<p>
					<FormattedMessage id="PrivacyPage.thirdSection.p1" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.thirdSection.p2" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="PrivacyPage.fourthSection.h1" />
				</h1>
				<p>
					<FormattedMessage id="PrivacyPage.fourthSection.p1" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.fourthSection.p2" />
				</p>
				<p>
					<FormattedMessage id="PrivacyPage.fourthSection.p3" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="PrivacyPage.fifthSection.h1" />
				</h1>
				<p>
					<FormattedMessage id="PrivacyPage.fifthSection.p1" />
				</p>
				<ul>
					<li>
						<p>
							<FormattedMessage id="PrivacyPage.fifthSection.p2" />
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default injectIntl(Privacy);
