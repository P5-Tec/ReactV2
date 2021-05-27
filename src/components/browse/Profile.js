import React, { useState, useRef } from "react";

import { FormattedMessage, injectIntl } from "react-intl";
import * as moment from "moment";
import DatePicker from "react-date-picker";

import { motion } from "framer-motion";
import { bigBtnVariants } from "../helpers/Variants";

import bcrypt from "bcryptjs";
import ReactPasswordStrength from "react-password-strength";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCookies } from "react-cookie";

import "../../styles/Profile.css";

// Variants (Animation) for div element:
// Makes div fly in from right (with little spring bounce)
const profileBoxVariants = {
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

const Profile = ({ userData }) => {
	//Ref
	const PassStrength = useRef(null);
	//Cookie state
	const [cookies] = useCookies(["login"]);
	//Boolean value state
	const [editing, setEditing] = useState(false);
	const [oldPass, setOldPass] = useState("");
	//State hook for user password
	const [pass, setPass] = useState({});
	const [confPass, setConfPass] = useState("");
	//User info state object
	const [profileData, setProfileData] = useState({
		fullName: "",
		phone: "",
		address: "",
		email: "",
		birthday: "",
	});

	//Method used to handle edit button click to set data to state hook
	const handleEditClick = () => {
		setProfileData({
			fullName: userData.fullName,
			phone: userData.phone,
			address: userData.address,
			email: userData.email,
			birthday: userData.birthday,
		});
		//Settind editing to true
		setEditing(true);
	};

	//Method to update user birthday on change and set it with wanted format
	const updateBirthday = (value) => {
		setProfileData({
			...profileData,
			birthday: moment(value, "dd-MM-yyyy").format(),
		});
	};

	//Method used to send PATCH request to API to update user information
	const updateInfo = async () => {
		await fetch(
			"http://api.saxproduction.dk/api/Customers/" + cookies.CustomerID,
			{
				method: "PATCH",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fullName: profileData.fullName,
					phone: profileData.phone,
					address: profileData.address,
					birthday: profileData.birthday.split("+")[0],
					email: profileData.email,
				}),
			}
		)
			.then((response) => {
				//Check if response status is OK
				if (response.ok) {
					//Show toast message
					toast.info(<FormattedMessage id="ProfilePage.section1.msg1" />, {
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
						// history.push("/browse/profile");
						window.location.reload();
					}, 1000);
				} else {
					//Show toast message
					toast.error(<FormattedMessage id="ProfilePage.section1.msg2" />, {
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

	//Method which takes harshed password in as parameter and fires fetch PATCH request to update user password
	const changePass = async (hashedPass) => {
		await fetch(
			"http://api.saxproduction.dk/api/Customers/" + cookies.CustomerID,
			{
				method: "PATCH",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					password: hashedPass,
				}),
			}
		)
			.then((response) => {
				//Check if response status is OK
				if (response.ok) {
					//Show toast message
					toast.info(<FormattedMessage id="ProfilePage.section2.msg1" />, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});

					//Resetting password input fields
					setOldPass("");
					setConfPass("");
					PassStrength.current.clear();
				} else {
					//Show toast message
					toast.error(<FormattedMessage id="ProfilePage.section2.msg2" />, {
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

	//Method to handle change pass button click event
	const handleChangePass = async () => {
		//Generates salt and hashed password
		const salt = await bcrypt.genSalt(7);
		const hashed = await bcrypt.hash(pass.password, salt);

		//Comparing users input old pass with it from api (hashed)
		bcrypt.compare(oldPass, userData.password, function (err, res) {
			//If error occured then log it and show error toastify message
			if (err) {
				console.log(err);
				toast.error(<FormattedMessage id="ProfilePage.section2.msg2" />, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			//If response is true
			if (res) {
				//Check if new password matches confirmation password
				if (confPass.match(pass.password)) {
					//If true then call changePass method and set hashed pass in as param
					changePass(hashed);
				} else {
					//If false then show warning toastify message
					toast.warn(<FormattedMessage id="ProfilePage.section2.msg4" />, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			}
			//If response is false
			else {
				//Show error toastify message
				toast.error(<FormattedMessage id="ProfilePage.section2.msg3" />, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		});
	};

	return (
		<div className="profileMainDiv">
			{editing ? (
				<motion.div
					className="container-fluid section"
					variants={profileBoxVariants}
					initial="hidden"
					animate="visible"
				>
					<h1 className="headerTxt">
						<FormattedMessage id="ProfilePage.section1.headerEdit" />
					</h1>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label1" />
						</p>
						<input
							className="col-sm-6 secData"
							value={profileData.fullName}
							onChange={(e) =>
								setProfileData({ ...profileData, fullName: e.target.value })
							}
						/>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label2" />
						</p>
						<input
							className="col-sm-6 secData"
							value={profileData.phone}
							onChange={(e) =>
								setProfileData({ ...profileData, phone: e.target.value })
							}
						/>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label3" />
						</p>
						<input
							className="col-sm-6 secData"
							value={profileData.address}
							onChange={(e) =>
								setProfileData({ ...profileData, address: e.target.value })
							}
						/>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label4" />
						</p>
						<input
							className="col-sm-6 secData"
							value={profileData.email}
							onChange={(e) =>
								setProfileData({ ...profileData, email: e.target.value })
							}
						/>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label5" />
						</p>

						<DatePicker
							id="birthdayPickerProfile"
							ref={PassStrength}
							onChange={(value) => updateBirthday(value)}
							value={moment(
								profileData.birthday,
								moment.defaultFormat
							).toDate()}
							format={"dd-MM-yyyy"}
							maxDate={new Date()}
							minDate={new Date("1901-01-01")}
							clearIcon={null}
						/>
					</span>

					<span className="row secRowBtnEdit">
						<button className="btnCancel" onClick={() => setEditing(false)}>
							<FormattedMessage id="ProfilePage.section1.btn2" />
						</button>

						<motion.button
							className="btnSave"
							onClick={updateInfo}
							variants={bigBtnVariants}
							whileHover="hover"
							disabled={
								!profileData.fullName.match(/^([\w]{2,})+\s+([\w\s]{2,})+$/i) ||
								!profileData.email.match(
									/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
								) ||
								!profileData.phone.match(
									/^[\+]?[(]?[0-9]{3}[-\s\.]?[0-9]{5,8}$/
								) ||
								!profileData.address.match(/^([\w^\W_]{2,})+,+([\w^\W_]{4,})+$/)
							}
						>
							<FormattedMessage id="ProfilePage.section1.btn1" />
						</motion.button>
					</span>
				</motion.div>
			) : (
				<div className="container-fluid section">
					<h1 className="headerTxt">
						<FormattedMessage id="ProfilePage.section1.header" />
					</h1>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label1" />
						</p>
						<p className="col-sm-6 secData">{userData.fullName}</p>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label2" />
						</p>
						<p className="col-sm-6 secData">{userData.phone}</p>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label3" />
						</p>
						<p className="col-sm-6 secData">{userData.address}</p>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label4" />
						</p>
						<p className="col-sm-6 secData">{userData.email}</p>
					</span>

					<span className="row secRow">
						<p className="col-sm-6 secLabel">
							<FormattedMessage id="ProfilePage.section1.label5" />
						</p>
						<p className="col-sm-6 secData">
							{moment(userData.birthday).format("DD-MM-YYYY")}
						</p>
					</span>

					<span className="row secRowBtn">
						<motion.button
							className="btnEdit"
							onClick={handleEditClick}
							variants={bigBtnVariants}
							whileHover="hover"
						>
							<FormattedMessage id="ProfilePage.section1.btn0" />
						</motion.button>
					</span>
				</div>
			)}

			<span className="row divider"></span>

			<div className="container-fluid section">
				<h1 className="headerTxt">
					<FormattedMessage id="ProfilePage.section2.header" />
				</h1>

				<span className="row secRow">
					<label className="col-sm-6 secLabel">
						<FormattedMessage id="ProfilePage.section2.label1" />
					</label>
					<input
						className="col-sm-6 secDataPass"
						type="password"
						value={oldPass}
						onChange={(e) => setOldPass(e.target.value)}
					/>
				</span>

				<span className="row secRow">
					<label className="col-sm-6 secLabel">
						<FormattedMessage id="ProfilePage.section2.label2" />
					</label>
					<ReactPasswordStrength
						ref={PassStrength}
						className="col-sm-6 secPassInput"
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

				<span className="row secRow">
					<label className="col-sm-6 secLabel">
						<FormattedMessage id="ProfilePage.section2.label3" />
					</label>
					<input
						className="col-sm-6 secDataPass"
						type="password"
						value={confPass}
						onChange={(e) => setConfPass(e.target.value)}
					/>
				</span>

				<span className="row secRowBtnEdit">
					<motion.button
						className="btnChange"
						onClick={handleChangePass}
						variants={bigBtnVariants}
						whileHover="hover"
						disabled={
							oldPass === "" ||
							!pass.score ||
							!pass.score === 1 ||
							confPass === ""
						}
					>
						<FormattedMessage id="ProfilePage.section2.btn" />
					</motion.button>
				</span>
			</div>

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
		</div>
	);
};

export default injectIntl(Profile);
