import { useState, useEffect } from "react";


export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: Date.now(),
        task: newTask,
        description: newTaskDescription,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
      setNewTaskDescription("");
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const updateTask = (id, updatedTask, updatedDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          task: updatedTask,
          description: updatedDescription,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ingrese una tarea"
        />
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Ingrese una descripción"
        />
        <button onClick={addTask}>Agregar tarea</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span>{task.task}</span>
            <span>{task.description}</span>
            <div>
              <button onClick={() => toggleTaskStatus(task.id)}>
                {task.completed
                  ? "pendiente"
                  : "completada"}
              </button>
              <button onClick={() => removeTask(task.id)}>Eliminar</button>
            </div>
            <div>
              <input type="text" defaultValue={task.task} />
              <input type="text" defaultValue={task.description} />
              <button
                onClick={() =>
                  updateTask(
                    task.id,
                    document.getElementById("task-" + task.id).value,
                    document.getElementById("description-" + task.id).value
                  )
                }
              >
                Actualizar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
