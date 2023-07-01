import React from "react";
import { LuActivity } from "react-icons/lu";
import { useDoctorStates } from "../Components/utils/DoctorContext";
import "./index.css";
import avatar from "../Components/assets/images/doctor.jpg";

export const Favs = () => {
	const { doctorState } = useDoctorStates();

	console.log(doctorState);
	// Lógica para determinar el tema actual

	return (
		<main className="home">
			<div>
				<h1>
					<LuActivity />
					<strong>Search your fav Doctor</strong>
				</h1>
			</div>
			<div className="card-grid">
				{/* Aqui deberias renderizar las cards */}
				{doctorState.favs &&
					doctorState.favs.map((doctor) => (
						<div
							className="card2"
							key={doctor.id}
							style={{ maxWidth: "250px" }}>
							<img src={avatar} alt="" />
							<h3>Name: {doctorState.favs.name}</h3>
							<h4>User: {doctor.username}</h4>
							<h5>Id: {doctor.id}</h5>
						</div>
					))}
			</div>
		</main>
	);
};
