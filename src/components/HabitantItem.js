import React from "react";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import LazyLoad from "react-lazyload";

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
		<>
			<span className='d-inline-block m-4' key={id}>
				<Media>
					<LazyLoad once>
						<Image
							className='d-inline-block mx-4'
							src={thumbnail}
							alt={name}
							rounded
							style={{ height: "10rem", width: "10rem" }}
						/>
					</LazyLoad>
					<Media.Body style={{ width: "100%" }}>
						<h5>{name}</h5>
						<hr />
						<div className='container'>
							<small>
								<div className='row'>
									<div className='col-lg-4'>
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
									</div>
									<div className='col-lg-4'>
										{professions && professions.length > 0 ? (
											<>
												<b>Professions </b> <br />
												{professions.map((profession, index, professions) => (
													<span key={profession}>
														{profession}
														{professions.length - 1 > index ? ", " : ""}
													</span>
												))}
											</>
										) : (
											<span></span>
										)}
									</div>
									<div className='col-lg-4'>
										{friends && friends.length > 0 ? (
											<>
												<b>Friends </b> <br />
												{friends.map((friend, index, friends) => (
													<span key={friend}>
														{friend}
														{friends.length - 1 > index ? ", " : ""}
													</span>
												))}
											</>
										) : (
											<span></span>
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

export default HabitantItem;
