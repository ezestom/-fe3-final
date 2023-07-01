import React from "react";
import Card from "../Components/Card";
import "./index.css";
import { LuActivity } from "react-icons/lu";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const theme = "light";




export const Home = () => {
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
				<Card />
			</div>
		</main>
	);
};
