import { useState } from "react"

export function TaskForm() {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea" onChange={
                (e) => setTitle(e.target.value)} />

            <button>Guardar</button>
        </form>
    )
}
