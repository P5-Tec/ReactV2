import React, { useState } from "react";

import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

import { bigBtnVariants, headingVariants } from "./helpers/Variants";

import "../styles/Login.css";

const Login = (props) => {
	//State hooks
	const [pass, setPass] = useState("");
	const [email, setEmail] = useState("");
	//Cookie state
	const [cookies, setCookies] = useCookies(["login"]);

	//Method to handle form submit - send API call to log user in
	const handleSubmit = async (e) => {
		e.preventDefault();

		//Fetch POST call with body (email & password)
		await fetch("http://api.saxproduction.dk/api/Login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: pass,
			}),
		})
			.then((response) => {
				//If response is ok then
				if (response.ok) {
					//Parse response to json
					response.json().then(function (data) {
						//Create cookies with customerId and full name
						setCookies("CustomerID", data.customerId, {
							path: "/",
							sameSite: "strict",
						});
						setCookies("CustomerName", data.fullName, {
							path: "/",
							sameSite: "strict",
						});
					});
					//Redirect user after 2 sec
					setTimeout(() => {
						props.history.push("/");
						window.location.reload();
					}, 1000);
				}
				// If response  401
				else if (response.status === 401) {
					// Show error notification message / toast
					toast.error(<FormattedMessage id="LoginPage.error.err1" />, {
						position: "top-center",
						autoClose: 3000,
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
		<div className="container-fluid loginDiv">
			<motion.h1
				className="loginHeader"
				variants={headingVariants}
				animate="animate"
			>
				<FormattedMessage id="LoginPage.heading" />
			</motion.h1>

			<form className="login-form lgnForm" onSubmit={handleSubmit}>
				<div className="form-group formGrp">
					<label className="control-label">
						<FormattedMessage id="LoginPage.label1" />
					</label>
					<input
						className="form-control"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						type="email"
					/>
				</div>
				<div className="form-group formGrp">
					<label className="control-label">
						<FormattedMessage id="LoginPage.label2" />
					</label>
					<input
						className="form-control"
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						name="password"
						type="password"
					/>
				</div>
				<div id="btnDivLogin" className="form-group">
					<motion.button
						className="btn-signup"
						variants={bigBtnVariants}
						whileHover="hover"
						disabled={
							!email ||
							!pass ||
							!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
						}
					>
						<FormattedMessage id="LoginPage.btn1" />
					</motion.button>
				</div>
			</form>

			<div className="row regLink">
				<p>
					<FormattedMessage id="LoginPage.link.p1" />
				</p>
				<Link to="/register">
					<FormattedMessage id="LoginPage.link.p2" />
				</Link>
			</div>

			{/* Toaster Container to show a toast (alert / popup) */}
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default injectIntl(Login);
