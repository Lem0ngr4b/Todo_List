import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useTaskList } from './useTaskList';
import {TodoList} from './TodoList';

export const Tareas = () => {
  const { tasks } = useTaskList();

  return (
    <Box p={4}>
      <Heading as="h1" mb={4} textAlign="center">
        Lista de Tareas
      </Heading>
      <TodoList tasks={tasks} />
    </Box>
  );
};


