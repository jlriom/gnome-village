import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import LoginPage from "../containers/auth/LoginPage";

const LoginLinkPopup = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<Nav.Link onClick={() => setShow(true)}>Login</Nav.Link>
			<LoginPage show={show} handleClose={() => setShow(false)}></LoginPage>
		</>
	);
};

export default LoginLinkPopup;
