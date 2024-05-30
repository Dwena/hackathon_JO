import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Team from './components/team/team';

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
        <Route path="/" element={<Team />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </Router>
    </ChakraBaseProvider>
  );
}

export default App;
