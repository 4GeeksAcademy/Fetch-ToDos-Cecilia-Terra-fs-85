import React, { useState } from "react";



const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTarea, setListatarea] = useState([]);

	function agregarTarea(e) {
		// let arraynuevo = listaTarea.concat(tarea)
		// setListatarea(arraynuevo)
		if (e.key == "Enter") {
			let arraynuevo = listaTarea.concat(tarea)
			setListatarea(arraynuevo)
			setTarea('')
			return
		}

	}

	return (
		<div className="text-center">
			<h1>ToDos</h1>

			<input type="text" onChange={(e) => setTarea(e.target.value)} value={tarea}
				onKeyDown={agregarTarea} />

			<ul>
				{listaTarea.map((tareas, index) => (
					<li key={index}>{tareas}
					</li>

				))}
			</ul>
		</div>
	);
};

export default Home;
