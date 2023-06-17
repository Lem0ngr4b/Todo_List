import { useState, useEffect } from 'react';

export const useTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask, newTaskDescription) => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        task: newTask,
        description: newTaskDescription,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
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

  const toggleTaskComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return {
    tasks,
    addTask,
    removeTask,
    updateTask,
    toggleTaskComplete,
  };
};
