import { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Display = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      w={{ base: '100%', md: '80%', lg: '60%' }}
      mx="auto"
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      rounded="md"
      shadow="md"
    >
      {children}
    </Box>
  );
};

export default Display;
