import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Team from './team/team.tsx';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Team" element={<Team />} />
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
