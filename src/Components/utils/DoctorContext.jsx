import React, { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";

const DoctorContext = createContext(undefined);

const initialDoctorState = {
	doctorList: [],
	doctorDetail: {},
	favs : [],
};

const doctorReducer = (state, action) => {
	switch (action.type) {
		case "GET_DOCTOR_LIST":
			return {
				...state,
				doctorList: action.payload,
			};
		case "GET_DOCTOR_DETAIL":
			return {
				...state,
				doctorDetail: action.payload,
			};
		case "ADD_FAV":
			return {
				...state,
				favs: [...state.favs, action.payload],
			};
		default:
			throw new Error(`Unknown action type ${action.type}`);
	}
};

const DoctorContextProvider = ({ children }) => {
	const [doctorState, doctorDispatch] = useReducer(
		doctorReducer,
		initialDoctorState
	);
	const urlDoctor = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		axios
			.get(urlDoctor)
			.then((res) =>
				doctorDispatch({ type: "GET_DOCTOR_LIST", payload: res.data })
			)
			.catch((err) => {
				console.error("Error fetching doctor list:", err);
				// Aquí puedes agregar la lógica para mostrar el error al usuario.
			});
	}, [urlDoctor]);
	console.log(doctorState.doctorList);
	console.log(doctorState.favs);

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(doctorState.favs));
	}, [doctorState.favs]);

	return (
		<DoctorContext.Provider value={{ doctorState, doctorDispatch }}>
			{children}
		</DoctorContext.Provider>
	);
};

export default DoctorContextProvider;

export const useDoctorStates = () => useContext(DoctorContext);
