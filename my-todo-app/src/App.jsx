import React from "react";
import { TodoList } from './components/TodoList'
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <TodoList />
    </ChakraProvider>
  );
}
