import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'
export function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, [])

    if (data.length === 0) {
        return <h1>No hay tareas aun</h1>
    }

    return (
        <div>
            {data.map(task => (
                <div key = {task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))
            }
        </div>

    )
}

