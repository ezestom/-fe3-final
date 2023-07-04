import React from "react";
import { Link } from "react-router-dom";
import { useDoctorStates } from "./utils/DoctorContext";
import "../Routes/index.css";
import avatar from "./assets/images/doctor.jpg";

const Card = () => {
	const { doctorState, doctorDispatch } = useDoctorStates();

	const addFav = (doctor) => {
		const isDoctorInFavorites = doctorState.favs
			.map((favDoctor) => favDoctor.id)
			.includes(doctor.id);

		if (isDoctorInFavorites) {
			alert("Ya está en favoritos");
		} else {
			doctorDispatch({
				type: "ADD_FAV",
				payload: doctor,
			});
		}
	};

	return (
		<div className="card-grid">
			{doctorState.doctorList.map((doctor) => (
				<div className="card" key={doctor.id}>
					<Link to={"/detail/" + doctor.id}>
						<img src={avatar} alt="" />
						<h3>Name: {doctor.name}</h3>
						<h4>User: {doctor.username}</h4>
						<h5>Id: {doctor.id}</h5>
					</Link>
					<button
						onClick={() => addFav(doctor)}
						className="favButton">
						Add fav
					</button>
				</div>
			))}
		</div>
	);
};

export default Card;
