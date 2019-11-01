import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import LogoutPage from "../containers/auth/LogoutPage";

const LogoutLinkPopup = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<Nav.Link onClick={() => setShow(true)}>Logout</Nav.Link>
			<LogoutPage show={show} handleClose={() => setShow(false)}></LogoutPage>
		</>
	);
};

export default LogoutLinkPopup;
