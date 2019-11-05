import React from "react";
import Card from "react-bootstrap/Card";
import LazyLoad from "react-lazyload";

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

	if (!habitant) return <></>;
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<LazyLoad once>
					<Card.Img variant='top' src={thumbnail} alt={name} />
				</LazyLoad>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						<div className='container'>
							<dl className='row'>
								<dt className='col-sm-5'>Age:</dt>
								<dd className='col-sm-7'> {age}</dd>
								<dt className='col-sm-5'>Hair Color:</dt>
								<dd className='col-sm-7'> {hair_color}</dd>
								<dt className='col-sm-5'>Weight:</dt>
								<dd className='col-sm-7'> {weight.toFixed(3)}</dd>
								<dt className='col-sm-5'>Height:</dt>
								<dd className='col-sm-7'> {height.toFixed(3)}</dd>
							</dl>
							<hr></hr>
							<div className='row'>
								{professions && professions.length > 0 ? (
									<>
										<dt className='col-sm-12'> Professions: </dt>{" "}
										{professions.map((profession, index, professions) => (
											<>
												<dt className='col-sm-5'> </dt>
												<dd className='col-sm-7' key={profession}>
													{profession}
												</dd>
												<br />
											</>
										))}
									</>
								) : (
									<span></span>
								)}
							</div>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default HabitantCard;
