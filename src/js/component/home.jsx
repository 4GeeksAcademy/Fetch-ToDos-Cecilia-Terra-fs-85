import { func } from "prop-types";
import React, { useState } from "react";



const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTarea, setListatarea] = useState([]);

	function agregarTarea(e) {

		if (e.key == "Enter") {
			let arraynuevo = listaTarea.concat(tarea)
			setListatarea(arraynuevo)
			setTarea('')
			return
		}

	}

	function borrarTarea(borrarItem) {
		setListatarea(listaTarea.filter((item) => item !== borrarItem))

	}

	return (
		<div className="text-center">
			<h1>ToDos</h1>

			<input type="text" placeholder="wath do you need to do?" onChange={(e) => setTarea(e.target.value)} value={tarea}
				onKeyDown={agregarTarea} />

			<ul>
				{listaTarea.map((item, index) =>
					<li key={index}>{item}  <i class="fa-solid fa-trash" onClick={() => borrarTarea(item)}></i>

					</li>

				)}
			</ul>

			<div>Total task {listaTarea.length}</div>
		</div>
	);
};


export default Home;
