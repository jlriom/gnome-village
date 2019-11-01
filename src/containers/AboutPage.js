import React from "react";
import PageLayout from "../components/layout/PageLayout";

const AboutPage = () => {
	return (
		<PageLayout headerText='About Brastlewark village application'>
			<h3 className='display-5'>Introduction</h3>
			<p>
				<a
					href='/frontend_assessment.pdf'
					target='_blank'
					rel='noopener noreferrer'>
					Front end assessment{" "}
				</a>
				developed in React.js{" "}
			</p>

			<h3 className='display-5'>Get started</h3>
			<p>
				See readme:
				<a
					className='mx-2'
					href='https://github.com/jlriom/gnome-village'
					target='_blank'
					rel='noopener noreferrer'>
					https://github.com/jlriom/gnome-village
				</a>
			</p>

			<h3 className='display-5'>Features</h3>
			<ul>
				<li>All users can:</li>
				<ul>
					<li>
						See the Dashboard that contains a summary of the habitants of the
						village
					</li>
					<li>Search for habitants given a criteria</li>
					<li>See an habitant details</li>
				</ul>
				<li>
					Non logged users can:
					<ul>
						<li>Register into the application</li>
					</ul>
				</li>
				<li>Logged users can:</li>
				<ul>
					<li>Update his profile</li>
					<li>Unregister into the application</li>
					<li>Link a friend</li>
					<li>Unlink a friend</li>
				</ul>
			</ul>

			<h3>Important note</h3>
			<ul>
				<li>
					The main goal is to practice the programming React.js framework.
				</li>
				<li>This is not a secure web application.</li>
				<li>
					A secure web application requires to protect Back end API. But this is
					out of the scope of the assessment.
				</li>
				<li>
					Login/Logout features are provided to show some functionalities based
					on registered vs anonymous users.
				</li>
			</ul>
			<div className='my-3'>&nbsp;</div>
		</PageLayout>
	);
};

export default AboutPage;
