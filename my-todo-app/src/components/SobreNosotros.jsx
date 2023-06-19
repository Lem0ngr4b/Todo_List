import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export const SobreNosotros = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
      padding="4"
    >
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Sobre Nosotros
        </Heading>
        <Text fontSize="xl">
          Nuestra aplicación de tareas está diseñada para ayudarte a gestionar
          tus actividades diarias de manera eficiente y organizada.
        </Text>
        <Text fontSize="xl" mt={4}>
          Hemos utilizado las siguientes tecnologías en su desarrollo:
        </Text>
        <Text fontSize="lg" fontWeight="bold" mt={2}>
          - React
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          - Chakra UI
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          - React Router
        </Text>
      </Box>
    </Box>
  );
};

