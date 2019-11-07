import React from "react";
import Card from "react-bootstrap/Card";
import LazyLoad from "react-lazyload";

const ProfessionItem = ({ profession }) => (
	<>
		<dt className='col-sm-6'>&nbsp;</dt>
		<dd className='col-sm-6 '>{profession}</dd>
	</>
);

const HabitantCard = ({ habitant }) => {
	const {
		name,
		thumbnail,
		age,
		weight,
		height,
		hair_color,
		professions
	} = habitant;

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
							<dt className='col-sm-6'>Age:</dt>
							<dd className='col-sm-6'> {age}</dd>
							<dt className='col-sm-6'>Hair Color:</dt>
							<dd className='col-sm-6'> {hair_color}</dd>
							<dt className='col-sm-6'>Weight:</dt>
							<dd className='col-sm-6'> {weight.toFixed(3)}</dd>
							<dt className='col-sm-6'>Height:</dt>
							<dd className='col-sm-6'> {height.toFixed(3)}</dd>
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

export default HabitantCard;
