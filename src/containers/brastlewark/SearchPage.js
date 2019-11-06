import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchHabitants } from "../../store/actions/searchActions";
import PageLayout from "../../components/layout/PageLayout";
import HabitantItem from "../../components/HabitantItem";

import { InputGroup, Form, FormControl, Button } from "react-bootstrap";

const SearchPage = ({
	searchCriteria,
	habitantList,
	total,
	error,
	searchHabitants
}) => {
	const [searchByName, setSearchByName] = useState("");
	useEffect(() => {
		const search = {
			...searchCriteria,
			name: searchByName
		};
		searchHabitants(search);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = e => {
		setSearchByName(e.target.value);
	};

	const handleSearch = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			console.log("searchCriteria", searchCriteria);
			const search = {
				...searchCriteria,
				name: searchByName
			};
			searchHabitants(search);
		}
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
				<div className='row'>
					<div className='col-sm-9'></div>
					<div className='col-sm-3  d-flex flex-row-reverse'>
						<span className='m-4'>{total + " habitants found"}</span>
					</div>
				</div>
			</div>
			<br />
			{habitantList && (
				<ul>
					{habitantList.map(habitant => (
						<HabitantItem key={habitant.id} habitant={habitant}></HabitantItem>
					))}
				</ul>
			)}
		</PageLayout>
	);
};

const mapStateToProps = state => ({
	searchCriteria: state.search.searchCriteria,
	habitantList: state.search.list,
	total: state.search.total,
	error: state.search.error
});

export default connect(
	mapStateToProps,
	{ searchHabitants }
)(SearchPage);
