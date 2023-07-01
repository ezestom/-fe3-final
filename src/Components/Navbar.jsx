import { Link } from "react-router-dom";
import "../Routes/index.css";
import imgHeader from "./assets/images/DH.ico";
import { VscArrowSmallRight } from "react-icons/vsc";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//hacer el cambio de theme con el button

const changeTheme = () => {
	const theme = localStorage.getItem("theme");
	if (theme === "light") {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
};

const Navbar = () => {
	return (
		<header>
			<nav>
				{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
				<div>
					<Link to="/">
						<h1 style={{ display: "flex", alignItems: "center" }}>
							<img src={imgHeader} alt="logo-dh" />
							Doctor
						</h1>
					</Link>
				</div>
				<ul>
					<li>
						<Link to="/">
							<VscArrowSmallRight />
							Home
						</Link>
					</li>

					<li>
						<Link to="/contact">
							<VscArrowSmallRight />
							Contact
						</Link>
					</li>

					<li>
						<Link to="/favs">
							<VscArrowSmallRight />
							Favs
						</Link>
					</li>

					{/* <li>
						<Link to="/detail">Detail</Link>
					</li> */}
				</ul>

				{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

				<button>Change theme</button>
			</nav>
		</header>
	);
};

export default Navbar;
