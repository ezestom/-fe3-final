import React from "react";
import { LuActivity } from "react-icons/lu";
import { useDoctorStates } from "../Components/utils/DoctorContext";
import "./index.css";
import avatar from "../Components/assets/images/doctor.jpg";

export const Favs = () => {
	const { doctorState } = useDoctorStates();

	// Lógica para determinar el tema actual
	const theme = doctorState.theme === "dark" ? "dark" : "light";

	return (
		<>
			<h1 className={theme}>
				<LuActivity />
				Doctor Favs
			</h1>

			<div className={`card-grid ${theme}`}>
				{doctorState.favs &&
					doctorState.favs.map((doctor) => (
						<div
							className="card"
							key={doctor.id}
							style={{ maxWidth: "250px" }}>
							<img className="avatar" src={avatar} alt="" />
							<h3 className="name">Name: {doctor.name}</h3>
							<h4 className="username">
								User: {doctor.username}
							</h4>
							<h5 className="id">Id: {doctor.id}</h5>
						</div>
					))}
			</div>
		</>
	);
};
