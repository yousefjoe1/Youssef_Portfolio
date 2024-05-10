import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Navbar from './comp/Nav/Navbar';
import Certificates from './comp/pages/certificates/Certificates';
import Home from './comp/pages/Home';
import Projects from './comp/pages/projects/Projects';
import Skills from './comp/pages/skills/Skills';

const App:React.FC = () => {

  return (

    <div className='app'>
       <Navbar />
       <Routes>
          <Route path='/about' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/skills' element={<Skills />} />
       </Routes>
    </div>
  );
}

export default App;
