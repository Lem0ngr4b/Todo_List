import React from 'react';
import { useTaskList } from './useTaskList';

export const TodoList = () => {
  const { tasks, addTask, toggleComplete, deleteTask, updateTask } = useTaskList();

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrorMessage('');
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (name.trim().length < 3) {
      setErrorMessage('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    const task = {
      name: name,
      description: description,
      complete: false
    };

    addTask(task);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form>
        <label>
          Nombre de la Tarea:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Descripción de la Tarea:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </label>
        <button type="button" onClick={handleAddTask}>Agregar</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </div>
  );
};

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onUpdateTask }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedName, setEditedName] = React.useState(task.name);
  const [editedDescription, setEditedDescription] = React.useState(task.description);

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleUpdateTask = () => {
    if (editedName.trim() !== '' && editedDescription.trim() !== '') {
      const updatedTask = {
        ...task,
        name: editedName,
        description: editedDescription
      };
      onUpdateTask(updatedTask);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={editedName}
          onChange={handleNameChange}
        />
        <textarea
          value={editedDescription}
          onChange={handleDescriptionChange}
        ></textarea>
        <button onClick={handleUpdateTask}>Guardar</button>
      </li>
    );
  }

  return (
    <li>
      <span
        style={{
          textDecoration: task.complete ? 'line-through' : 'none'
        }}
      >
        {task.name} - {task.description}
      </span>
      <button onClick={onToggleComplete}>
        {task.complete ? 'Marcar como Pendiente' : 'Marcar como Completa'}
      </button>
      <button onClick={onDeleteTask}>Eliminar</button>
      <button onClick={() => setIsEditing(true)}>Editar</button>
    </li>
  );
};

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onUpdateTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggleComplete={() => onToggleComplete(index)}
          onDeleteTask={() => onDeleteTask(index)}
          onUpdateTask={(updatedTask) => onUpdateTask(index, updatedTask)}
        />
      ))}
    </ul>
  );
};

