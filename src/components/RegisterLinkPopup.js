import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import RegisterPage from "../containers/user/RegisterPage";

const RegisterLinkPopup = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<Nav.Link onClick={() => setShow(true)}>Register</Nav.Link>
			<RegisterPage
				show={show}
				handleClose={() => setShow(false)}></RegisterPage>
		</>
	);
};

export default RegisterLinkPopup;
