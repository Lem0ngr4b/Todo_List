import React, { useState } from 'react';
import { useTaskList } from './useTaskList';

export const TodoList = () => {
  const { tasks, addTask, removeTask, updateTask } = useTaskList();
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask, newTaskDescription);
      setNewTask('');
      setNewTaskDescription('');
    }
  };

  const handleRemoveTask = (id) => {
    removeTask(id);
  };

  const handleUpdateTask = (id) => {
    updateTask(id, newTask, newTaskDescription);
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
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.task}</span>
            <span>{task.description}</span>
            <div>
              <button onClick={() => handleUpdateTask(task.id, task.task, task.description)}>
                Actualizar
              </button>
              <button onClick={() => handleRemoveTask(task.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

