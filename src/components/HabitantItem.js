import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { string } from "postcss-selector-parser";

const HabitantItem = habitant => {
	const {
		id,
		name,
		thumbnail,
		age,
		weight,
		height,
		hair_color,
		professions,
		friends
	} = habitant.habitant;
	return (
		<span className='d-inline-block m-2'>
			<Card style={{ width: "15rem", height: "40rem" }}>
				<Image src={thumbnail} rounded style={{ height: "15rem" }} />
				<Card.Body>
					<Card.Title style={{ height: "3rem" }}>{name}</Card.Title>

					<small>
						<b>Age: </b> {age} <br />
						<b>Hair Color: </b> {hair_color}
						<br />
						<b>Weight: </b> {weight.toFixed(3)} <br />
						<b>Height: </b> {height.toFixed(3)} <br />
						{professions && (
							<>
								<b>Professions: </b>
								{professions.join(", ")}
							</>
						)}
						<br />
						{friends && (
							<>
								<b>Friends: </b>
								{friends.join(", ")}
							</>
						)}
						<br />
					</small>
					<Card.Link href='#'>Card Link</Card.Link>
					<Card.Link href='#'>Another Link</Card.Link>
				</Card.Body>
			</Card>
		</span>
	);
};

export default HabitantItem;
