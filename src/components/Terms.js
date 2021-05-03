import React, { useEffect, useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import {
	motion,
	useViewportScroll,
	useSpring,
	useTransform,
} from "framer-motion";

import "../styles/TermsAndPrivacy.css";

const Terms = () => {
	//State hook check if scrolled to bottom - boolean
	const [isComplete, setIsComplete] = useState(false);
	//Using  useViewPortScroll to get scrolling progress
	const { scrollYProgress } = useViewportScroll();
	//Getting scroll progress values 0 to 1
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
	//Setting svg path to the same value as scrolled progress
	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

	//Used only once at the start for setting it back to deafult value on navigation from pages
	useEffect(() => {
		yRange.set(0);
	}, [yRange]);

	//Using effedt hook to dynamically check scroll progress while scrolling
	useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

	return (
		<div className="sectionMain">
			<svg className="progress-icon" viewBox="0 0 60 60">
				<motion.path
					fill="none"
					strokeWidth="5"
					stroke="#30d95d"
					strokeDasharray="0 1"
					d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
					style={{
						pathLength,
						rotate: 90,
						translateX: 5,
						translateY: 5,
						scaleX: -1,
					}}
				/>
				<motion.path
					fill="none"
					strokeWidth="5"
					stroke="#30d95d"
					d="M14,26 L 22,33 L 35,16"
					initial={false}
					strokeDasharray="0 1"
					animate={{ pathLength: isComplete ? 1 : 0 }}
				/>
			</svg>

			<div className="section">
				<h1 className="mainHeading">
					<FormattedMessage id="TermsPage.mainHeading" />
				</h1>
				<p className="updatedP">
					<FormattedMessage id="TermsPage.p1" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.p2" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section1.h1" />
				</h1>
				<h2>
					<FormattedMessage id="TermsPage.section1.h2_1" />
				</h2>
				<p>
					<FormattedMessage id="TermsPage.section1.p1" />
				</p>
				<h2>
					<FormattedMessage id="TermsPage.section1.h2_2" />
				</h2>
				<p>
					<FormattedMessage id="TermsPage.section1.p2" />
				</p>
				<ul>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList1"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList2"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList3"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList4"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList5"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList6"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList7"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList8"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
					<li>
						<p>
							<FormattedMessage
								id="TermsPage.section1.pList9"
								values={{ strong: (...chunks) => <strong>{chunks}</strong> }}
							/>
						</p>
					</li>
				</ul>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section2.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section2.p1" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section2.p2" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section2.p3" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section2.p4" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section2.p5" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section3.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section3.p1" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section3.p2" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section3.p3" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section4.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section4.p1" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section4.p2" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section5.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section5.p1" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section5.p2" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section5.p3" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section6.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section6.p1" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section7.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section7.p1" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section8.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section8.p1" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section9.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section9.p1" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section10.h1" />
				</h1>
				<h2>
					<FormattedMessage id="TermsPage.section10.h2_1" />
				</h2>
				<p>
					<FormattedMessage id="TermsPage.section10.p1" />
				</p>
				<h2>
					<FormattedMessage id="TermsPage.section10.h2_2" />
				</h2>
				<p>
					<FormattedMessage id="TermsPage.section10.p2" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section11.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section11.p1" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section12.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section12.p1" />
				</p>
				<p>
					<FormattedMessage id="TermsPage.section12.p2" />
				</p>
			</div>

			<div className="section">
				<h1>
					<FormattedMessage id="TermsPage.section13.h1" />
				</h1>
				<p>
					<FormattedMessage id="TermsPage.section13.p1" />
				</p>
				<ul>
					<li>
						<p>
							<FormattedMessage id="TermsPage.section13.p2" />
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default injectIntl(Terms);
