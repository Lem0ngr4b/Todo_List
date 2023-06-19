import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

export const Menu = () => {
  return (
    <Box p={4} bg="gray.200">
      <Flex justify="center">
        <Link to="/" style={{ marginRight: '16px' }}>
          <Text fontSize="lg" fontWeight="bold">
            Home
          </Text>
        </Link>
        <Link to="/tareas" style={{ marginRight: '16px' }}>
          <Text fontSize="lg" fontWeight="bold">
            Tareas
          </Text>
        </Link>
        <Link to="/sobre-nosotros">
          <Text fontSize="lg" fontWeight="bold">
            Sobre Nosotros
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};


