import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About_us from './components/AboutUs';
import Donar from './components/Donar';
import Voluntario from './components/Voluntario';
import Preguntas from './components/Preguntas';
import Contacto from './components/Contacto';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/voluntario" element={<Voluntario />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/testimonio" element={<Testimonio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

