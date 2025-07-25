import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

import { TarjetaContacto } from "../components/TarjetaContacto.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContactos } from "../services/ servicesAPI.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContactos(dispatch)


	}, [])

	return (
		<>

			<TarjetaContacto />
			


		</>
	);
}; 