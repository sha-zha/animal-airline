import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Dashbord from './pages/dashbord/page';
import Annonces from './pages/dashbord/annonces/page';
import Demandes from './pages/dashbord/demandes/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/dashbord/annonces'element={<Annonces/>}/>
        <Route path='/dashbord/demandes'element={<Demandes/>}/>
        <Route path="*" element={<h1>Page non trouvée (404)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
