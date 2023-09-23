import './App.css';
import React from "react";
import{ BrowserRouter as Router,
Route,
Routes,
Navigate
}
from "react-router-dom";

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Skillset from './Pages/Skillset';


import Navigation from './components/Navbar/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skillset' element={<Skillset/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/project' element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
