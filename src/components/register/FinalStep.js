import React, { useState } from "react";

import { motion } from "framer-motion";
import { FormattedMessage, injectIntl } from "react-intl";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import bcrypt from "bcryptjs";
import ReactPasswordStrength from "react-password-strength";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { containerVariants, bigBtnVariants } from "../helpers/Variants";

function FinalStep(props) {
	const history = useHistory();
	//State hook for user password
	const [pass, setPass] = useState({});
	//State hook for checkbox state
	const [checked, setChecked] = useState(false);

	const createUser = async () => {
		const salt = await bcrypt.genSalt(7);
		const hashed = await bcrypt.hash(pass.password, salt);

		await fetch("http://api.saxproduction.dk/api/customers", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				fullName: props.state.name,
				phone: props.state.phone,
				address: props.state.address,
				birthday: props.state.birthday,
				email: props.state.email,
				password: hashed,
			}),
		})
			.then((response) => {
				if (response.ok) {
					//Show toast message
					toast.info(<FormattedMessage id="RegisterPage.regMsgTrue" />, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					//Redirect user after 2 sec
					setTimeout(() => {
						history.push("/login");
					}, 2000);
				} else {
					//Show toast message
					toast.error(<FormattedMessage id="RegisterPage.regMsgFalse" />, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<motion.div
				className="container-fluid form"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<span className="row formRow">
					<p className="col-lg-4 label">
						<FormattedMessage id="RegisterPage.txt5" />
					</p>
					<input
						className="col-lg-8 formInput"
						placeholder="Fx. max07@gmail.com"
						name="email"
						type="email"
						value={props.getState("email", "")}
						onChange={props.handleChange}
					/>
				</span>

				<span className="row formRow">
					<p className="col-lg-4 label">
						<FormattedMessage id="RegisterPage.txt6" />
					</p>
					<ReactPasswordStrength
						className="col-lg-8 formInput"
						style={{
							padding: "0",
							height: "100%",
							width: "100%",
							border: "none",
						}}
						minLength={6}
						minScore={2}
						changeCallback={setPass}
						scoreWords={[
							<FormattedMessage id="RegisterPage.passErr.e1" />,
							<FormattedMessage id="RegisterPage.passErr.e2" />,
							<FormattedMessage id="RegisterPage.passErr.e3" />,
							<FormattedMessage id="RegisterPage.passErr.e4" />,
							<FormattedMessage id="RegisterPage.passErr.e5" />,
						]}
						tooShortWord={<FormattedMessage id="RegisterPage.passErr.e0" />}
						inputProps={{
							name: "password",
							autoComplete: "off",
							className: "formInput",
						}}
					/>
				</span>
				<span className="row formRow" id="checkSpan">
					<input
						type="checkbox"
						defaultChecked={checked}
						onChange={() => setChecked(!checked)}
					/>
					<p>
						<FormattedMessage id="RegisterPage.link.pt1" />{" "}
						<Link to="/terms-conditions" target="_blank">
							<FormattedMessage id="RegisterPage.link.pt2" />
						</Link>{" "}
						&{" "}
						<Link to="privacy-policy" target="_blank">
							<FormattedMessage id="RegisterPage.link.pt3" />
						</Link>
					</p>
				</span>
			</motion.div>

			<motion.div
				className="row btnRow"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div className="col-6">
					<button className="navBtn" onClick={props.prev}>
						<FormattedMessage id="RegisterPage.btn1" />
					</button>
				</div>
				<div className="col-6">
					<motion.button
						className="createBtn"
						variants={bigBtnVariants}
						whileHover="hover"
						whileTap="hover"
						disabled={
							!props.getState("email") ||
							!props
								.getState("email")
								.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/) ||
							!pass.score ||
							!pass.score === 1 ||
							!checked
						}
						onClick={createUser}
					>
						<FormattedMessage id="RegisterPage.btn3" />
					</motion.button>
				</div>
			</motion.div>
			{/* Toaster Container to show a toast (alert / popup) */}
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default injectIntl(FinalStep);
