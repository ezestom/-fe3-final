import { useDoctorStates } from "./utils/DoctorContext";
import { Link } from "react-router-dom";
import "../Routes/index.css";
import avatar from "./assets/images/doctor.jpg";

const Card = ({ name, username, id }) => {
	const { doctorState, doctorDispatch } = useDoctorStates();

	const addFav = () => {
		const findDoctor = doctorState.favs.find((doctor) => doctor.id === doctorState.doctorDetail.id);
		if (!findDoctor){
		doctorDispatch({
			type: "ADD_FAV",
			payload: doctorState.doctorList,
		})
	}else{
			alert("Ya esta en favoritos")
		}
	};

	// Aqui iria la logica para agregar la Card en el localStorage

	return (
		<div className="card-grid">
			{/* En cada card deberan mostrar en name - username y el id */}
			{doctorState.doctorList.map((doctor) => (
				<div className="card" key={doctor.id}>
					<Link to={"/detail/" + doctor.id}>
						<img src={avatar} alt="" />
						<h3>Name: {doctor.name}</h3>
						<h4>User: {doctor.username}</h4>
						<h5>Id: {doctor.id}</h5>
					</Link>
					<button onClick={addFav} className="favButton">
						Add fav
					</button>
				</div>
			))}

			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
		</div>
	);
};

export default Card;
