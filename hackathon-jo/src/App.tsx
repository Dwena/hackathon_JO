import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Predictions from './components/Predictions';
import Analyse from './components/Analyse';
import Team from './components/team/team';

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/analyse" element={<Analyse />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
