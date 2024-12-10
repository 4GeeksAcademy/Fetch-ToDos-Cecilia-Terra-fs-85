import { func } from "prop-types";
import React, { useState, useEffect } from "react";



const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTarea, setListatarea] = useState([]);


	useEffect(() => {
		createUser()
		getTasks()
	}, [])

	function getTasks() {//get
		fetch('https://playground.4geeks.com/todo/users/cecilia')

			.then(resp => {
				return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
			})

			.then(data => {
				setListatarea(data.todos)
				// console.log(data);
			})
			.catch(error => {
				// Manejo de errores
				console.log(error);
			});

	}

	function createUser() {

		fetch('https://playground.4geeks.com/todo/users/cecilia', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify()
		})
			.then(response => {
				return response.json()
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.error(error);
			});
	}


	function creatNewtask() {

		fetch('https://playground.4geeks.com/todo/todos/cecilia', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				label: tarea,
				is_done: false
			})
		})
			.then(response => {
				if (response.ok) {
					getTasks()
				}
				return response.json()
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.error(error);
			});
	}

	function deleteTask(id) {
		// Simple DELETE request with fetch
		fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json"
			}
		})

			.then((resp) => {
				if (resp.ok) {
					getTasks()
				}
				resp.json()
			})
			.then((data) => console.log(data))
			.catch(error => console.log(error))

	}


	function agregarTarea(e) {
		if (e.key == "Enter") {
			creatNewtask()
			let arraynuevo = listaTarea.concat(tarea)
			setListatarea(arraynuevo)
			setTarea('')
			return
		}

	}



	return (
		<div className="text-center">
			<h1>ToDos</h1>
			<input type="text" placeholder="wath do you need to do?" onChange={(e) => setTarea(e.target.value)} value={tarea}
				onKeyDown={agregarTarea} />
			<ul>
				{listaTarea.map((item, index) => (// el .map es =>()
					<li key={index}>{item.label}  <i className="fa-solid fa-trash" onClick={() => deleteTask(item.id)}></i>
					</li>
				))}

			</ul>

			<div>Total task {listaTarea.length}</div>
		</div>
	);
}


export default Home; 
