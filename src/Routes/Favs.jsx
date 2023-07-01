import React from "react";
import { LuActivity } from "react-icons/lu";
import { useDoctorStates } from "../Components/utils/DoctorContext";
import "./index.css";
import avatar from "../Components/assets/images/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Favs = () => {
	const { doctorState } = useDoctorStates();

	return (
		<>
			<h1>
				<LuActivity />
				Doctor Favs
			</h1>
			{/* este componente debe consumir los destacados del localStorage */}
			{/* Deberan renderizar una Card por cada uno de ellos */}

			<div className="card-grid">
				{doctorState.favs &&
					doctorState.favs.map((doctor) => (
						<div className="card" key={doctor.id}>
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
