import React from "react";

const LandingPage = () => (
	<div>
		<h1>Landing Page</h1>
		<p>
			Provide the username as "foo" and hit the Login button. It will make a
			fake async login request. While requesting, you will see a spinner for 1
			second. Usernames other then "foo" will fire an alert.
		</p>
		What is being used here:
		<ul>
			<li>React, obviously! </li>
			<li>
				Redux for state management. redux-thunk for async action creators.
			</li>
			<li>React Router for routing with a PrivateRoute example.</li>
		</ul>
		<hr />
		<div>
			If you haven't seen{" "}
			<a
				href='https://codesandbox.io/embed/authentication-with-react-context-d3x0r'
				target='_blank'
				rel='noopener noreferrer'>
				this
			</a>{" "}
			yet, just check it out. Without Redux, using React Context you can write a
			simpler authentication.
		</div>
	</div>
);

export default LandingPage;
