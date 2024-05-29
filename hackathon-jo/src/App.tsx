import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Display from './components/Display';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Navbar />
      <Display>
        <Box p={4}>Contenu</Box>
      </Display>
    </ChakraBaseProvider>
  );
}

export default App;
