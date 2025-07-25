import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const {store,dispatch} = useGlobalReducer ()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					
					<Link to="/formulario">
						<button className="btn btn-primary">Añadir Contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};