import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import LazyLoad from "react-lazyload";
import "./HabitantItem.css";
import HabitantProperties from "./HabitantProperties";

const HabitantItem = ({
	habitant,
	manageFriends,
	myId,
	myfriends,
	addFriend,
	removeFriend,
	addRemoveFriend
}) => {
	const { id, name, thumbnail, professions, friends } = habitant;

	const [isFriend, setIsFriend] = useState(
		manageFriends && myfriends.map(f => f.name).includes(name)
	);

	const AddRemoveButton = () => (
		<Button
			variant='outline-info'
			size='sm'
			onClick={() => {
				if (isFriend) {
					removeFriend(myId, name);
					setIsFriend(false);
				} else {
					addFriend(myId, name);
					setIsFriend(true);
				}
				addRemoveFriend();
			}}>
			{isFriend ? "Remove from my friend list" : "Add to my friend List"}
		</Button>
	);

	return (
		<>
			<span className='d-inline-block m-4 full-width' key={id}>
				<Media className='full-width'>
					<LazyLoad once>
						<Image
							className='d-inline-block mx-4 image-dimensions'
							src={thumbnail}
							alt={name}
							rounded
							style={{ height: "10rem", width: "10rem" }}
						/>
					</LazyLoad>
					<Media.Body className='full-width'>
						<h5 className='d-flex justify-content-between'>
							<span>{name}</span>
							{manageFriends ? <AddRemoveButton /> : <> </>}
						</h5>
						<hr />
						<div className='container'>
							<small>
								<div className='row'>
									<div className='col-lg-4'>
										<dl className='row full-width'>
											<HabitantProperties {...habitant} />
										</dl>
									</div>
									<div className='col-lg-4'>
										{professions && professions.length > 0 ? (
											<div className='row full-width'>
												<b>Professions: </b>&nbsp;
												{professions.map((profession, index) => (
													<span key={profession}>
														{profession}
														{professions.length - 1 > index ? ", " : ""}
													</span>
												))}
											</div>
										) : (
											<div className='row full-width'> &nbsp;</div>
										)}
									</div>
									<div className='col-lg-4'>
										{friends && friends.length > 0 ? (
											<div className='row full-width'>
												<b>Friends: </b> &nbsp;
												{friends.map((friend, index) => (
													<span key={friend}>
														<Link to={`/brastlewark/${friend}`}>{friend}</Link>
														{friends.length - 1 > index ? ", " : ""}
													</span>
												))}
											</div>
										) : (
											<div className='row full-width'> &nbsp;</div>
										)}
									</div>
								</div>
							</small>
						</div>
					</Media.Body>
				</Media>
			</span>
		</>
	);
};

HabitantItem.propTypes = {
	habitant: PropTypes.object.isRequired,
	manageFriends: PropTypes.bool.isRequired,
	myId: PropTypes.number,
	myfriends: PropTypes.array,
	addFriend: PropTypes.func,
	removeFriend: PropTypes.func,
	addRemoveFriend: PropTypes.func
};

export default HabitantItem;
