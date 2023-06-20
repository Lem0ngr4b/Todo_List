import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Bienvenido a la Aplicación de Tareas
        </Heading>
        <Text fontSize="xl">
          ¡Organiza tus tareas de manera fácil y eficiente!
        </Text>
      </Box>
    </Box>
  );
};

