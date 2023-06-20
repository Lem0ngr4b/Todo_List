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
  useColorMode,
} from '@chakra-ui/react';

export const TodoList = () => {
  const { tasks, addTask, removeTask, updateTask } = useTaskList();
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();

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

  const handleUpdateTask = (id, updatedTask, updatedDescription) => {
    updateTask(id, updatedTask, updatedDescription);
  };

  return (
    <Box p={4}>
      <Flex justify="flex-end">
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        </Button>
      </Flex>

      <Heading as="h1" mb={4}>
        Lista de Tareas
      </Heading>

      <Stack direction="column" spacing={3} mb={4}>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ingrese una tarea"
        />
        <Input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Ingrese una descripción"
        />
        <Button onClick={handleAddTask} colorScheme="teal">
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
            bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
            p={2}
            borderRadius="md"
          >
            <Text>{task.task}</Text>
            <Text>{task.description}</Text>
            <Flex>
              <Button
                onClick={() =>
                  handleUpdateTask(
                    task.id,
                    task.task,
                    task.description,
                    !task.completed
                  )
                }
                colorScheme="teal"
                size="sm"
                mr={2}
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
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
