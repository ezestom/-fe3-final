import React from "react";
import Card from "../Components/Card";
import "./index.css";
import { LuActivity } from "react-icons/lu";
import { changeTheme } from "../Components/Navbar";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//hacer el cambio de theme con el button

if (localStorage.getItem("theme") === null) {
	localStorage.setItem("theme", "light");
} else if (localStorage.getItem("theme") === "light") {
	document.body.classList.add("light");
} else if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("dark");
}

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
