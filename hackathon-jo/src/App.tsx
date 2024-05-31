import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Predictions from './components/Predictions';
import Analyse from './components/Analyse'; 

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/news" element={<News />} />
          <Route path="/analyse" element={<Analyse />} /> {/* Nouvelle route */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
