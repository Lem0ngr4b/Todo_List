import React, { useState } from 'react';
import { useTaskList } from './useTaskList';
import {
  Box,
  Heading,
  Input,
  Stack,
  Button,
  Text,
  Flex,
  List,
  ListItem,
} from '@chakra-ui/react';

export const TodoList = () => {
  const { tasks, addTask, removeTask, toggleTaskComplete, updateTask } =
    useTaskList();
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTask, setEditTask] = useState('');
  const [editTaskDescription, setEditTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTask.trim().length >= 3) {
      addTask(newTask, newTaskDescription);
      setNewTask('');
      setNewTaskDescription('');
    }
  };

  const handleRemoveTask = (id) => {
    removeTask(id);
  };

  const handleToggleTaskComplete = (id) => {
    toggleTaskComplete(id);
  };

  const handleUpdateTask = (id) => {
    updateTask(id, editTask, editTaskDescription);
    setEditTaskId(null);
    setEditTask('');
    setEditTaskDescription('');
  };

  const handleCancelUpdate = () => {
    setEditTaskId(null);
    setEditTask('');
    setEditTaskDescription('');
  };

  const handleEditTask = (id, task, description) => {
    setEditTaskId(id);
    setEditTask(task);
    setEditTaskDescription(description);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Lista de Tareas
      </Heading>

      <Stack direction="column" spacing={3} mb={4}>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ingrese una tarea (mínimo 3 caracteres)"
        />
        <Input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Ingrese una descripción (opcional)"
        />
        <Button
          onClick={handleAddTask}
          colorScheme="teal"
          isDisabled={newTask.trim().length < 3}
        >
          Agregar tarea
        </Button>
      </Stack>

      <List spacing={2}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg={task.completed ? 'gray.100' : 'transparent'}
            p={2}
            borderRadius="md"
          >
            {editTaskId === task.id ? (
              <>
                <Input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <Input
                  type="text"
                  value={editTaskDescription}
                  onChange={(e) => setEditTaskDescription(e.target.value)}
                />
              </>
            ) : (
              <Stack direction="row" spacing={2} flex={1}>
                <Text>{task.task}</Text>
                <Text>{task.description}</Text>
              </Stack>
            )}

            <Flex>
              {editTaskId === task.id ? (
                <>
                  <Button
                    onClick={() => handleUpdateTask(task.id)}
                    colorScheme="teal"
                    size="sm"
                    mr={2}
                  >
                    Guardar
                  </Button>
                  <Button
                    onClick={handleCancelUpdate}
                    colorScheme="gray"
                    size="sm"
                  >
                    Cancelar
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() =>
                      handleEditTask(task.id, task.task, task.description)
                    }
                    colorScheme="teal"
                    size="sm"
                    mr={2}
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleToggleTaskComplete(task.id)}
                    colorScheme="teal"
                    size="sm"
                  >
                    {task.completed ? 'Pendiente' : 'Completada'}
                  </Button>
                  <Button
                    onClick={() => handleRemoveTask(task.id)}
                    colorScheme="red"
                    size="sm"
                  >
                    Eliminar
                  </Button>
                </>
              )}
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
