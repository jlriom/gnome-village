import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchHabitants } from "../../store/actions/searchActions";
import {
	loadFriends,
	addFriend,
	removeFriend
} from "../../store/actions/userActions";
import PageLayout from "../../components/layout/PageLayout";
import HabitantItem from "../../components/HabitantItem";

import {
	InputGroup,
	Form,
	FormControl,
	Button,
	Pagination
} from "react-bootstrap";

const SearchPage = ({
	id,
	isGuest,
	searchCriteria,
	habitantList,
	total,
	friends,
	searchHabitants,
	loadFriends,
	addFriend,
	removeFriend
}) => {
	const [searchByName, setSearchByName] = useState("");
	const [reloadFriends, setReloadFriends] = useState(true);
	useEffect(() => {
		const search = {
			...searchCriteria,
			name: searchByName,
			page: 1
		};
		searchHabitants(search);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (reloadFriends && !isGuest) {
			loadFriends(id);
			setReloadFriends(false);
		}
	}, [reloadFriends, setReloadFriends, loadFriends, id, isGuest]);

	const handleChange = e => {
		setSearchByName(e.target.value);
	};

	const handleSearch = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			const search = {
				...searchCriteria,
				name: searchByName
			};
			searchHabitants(search);
		}
	};

	const numPages = (searchCriteria, total) => {
		const numPages = Math.trunc(total / searchCriteria.limit);
		return numPages * searchCriteria.limit === total ? numPages : numPages + 1;
	};

	const handlePageChanged = page => {
		const lastPage = numPages(searchCriteria, total);
		if (page < 0) page = 1;
		if (page > lastPage) page = lastPage;
		const search = {
			...searchCriteria,
			page
		};
		searchHabitants(search);
	};

	return (
		<PageLayout>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-3'></div>
					<div className='col-sm-6'>
						<Form onSubmit={handleSearch}>
							<InputGroup>
								<FormControl
									placeholder="Search Brastlewark's habitant"
									aria-label="Search Brastlewark's habitant"
									aria-describedby="Search Brastlewark's habitant"
									value={searchByName}
									onChange={handleChange}
								/>
								<InputGroup.Append>
									<Button variant='secondary' type='submit'>
										Search
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
					</div>
					<div className='col-sm-3'></div>
				</div>
				<div className='row mt-5'>
					<div className='col center-block'>
						<div
							className='flexBox'
							style={{
								display: "flex",
								flexFlow: "row wrap",
								justifyContent: "center"
							}}>
							{habitantList && (
								<Pagination>
									<Pagination.First onClick={() => handlePageChanged(1)} />
									<Pagination.Prev
										onClick={() => handlePageChanged(searchCriteria.page - 1)}
									/>
									<Pagination.Item>
										{searchCriteria.page} of {numPages(searchCriteria, total)} (
										{total} habitants found)
									</Pagination.Item>
									<Pagination.Next
										onClick={() => handlePageChanged(searchCriteria.page + 1)}
									/>
									<Pagination.Last
										onClick={() =>
											handlePageChanged(numPages(searchCriteria, total))
										}
									/>
								</Pagination>
							)}
						</div>
					</div>
				</div>
			</div>
			{habitantList && (
				<ul>
					{habitantList.map(habitant => (
						<HabitantItem
							key={habitant.id}
							habitant={habitant}
							manageFriends={!isGuest}
							myId={id}
							myfriends={friends}
							addFriend={addFriend}
							removeFriend={removeFriend}
							addRemoveFriend={() => {
								setReloadFriends(true);
							}}></HabitantItem>
					))}
				</ul>
			)}
		</PageLayout>
	);
};

SearchPage.propTypes = {
	searchCriteria: PropTypes.object.isRequired,
	habitantList: PropTypes.array.isRequired,
	total: PropTypes.number,
	id: PropTypes.number,
	isGuest: PropTypes.bool,
	friends: PropTypes.array.isRequired,
	searchHabitants: PropTypes.func.isRequired,
	loadFriends: PropTypes.func.isRequired,
	addFriend: PropTypes.func.isRequired,
	removeFriend: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	id: state.auth.id,
	isGuest: state.auth.isGuest,
	searchCriteria: state.search.searchCriteria,
	habitantList: state.search.list,
	total: state.search.total,
	friends: state.user.friends
});

export default connect(
	mapStateToProps,
	{ searchHabitants, loadFriends, addFriend, removeFriend }
)(SearchPage);
