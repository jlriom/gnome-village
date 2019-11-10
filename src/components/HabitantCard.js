import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import LazyLoad from "react-lazyload";
import HabitantProperties from "./HabitantProperties";

const ProfessionItem = ({ profession }) => (
	<>
		<dt className='col-sm-6'>&nbsp;</dt>
		<dd className='col-sm-6 '>{profession}</dd>
	</>
);

const HabitantCard = ({ habitant }) => {
	const { name, thumbnail, professions } = habitant;

	return (
		<>
			<Card style={{ width: "18rem" }}>
				<LazyLoad once>
					<Card.Img variant='top' src={thumbnail} alt={name} />
				</LazyLoad>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<div className='container' style={{ weight: "100%" }}>
						<dl className='row'>
							<HabitantProperties {...habitant} />
						</dl>
						<hr></hr>
						<div className='row'>
							{professions && professions.length > 0 ? (
								<dl className='row'>
									<dt className='col-sm-6'>Professions:</dt>
									<dd className='col-sm-6'> &nbsp;</dd>
									{professions.map((profession, index) => (
										<ProfessionItem key={index} profession={profession} />
									))}
								</dl>
							) : (
								<span></span>
							)}
						</div>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

HabitantCard.propTypes = {
	habitant: PropTypes.object.isRequired
};

export default HabitantCard;
