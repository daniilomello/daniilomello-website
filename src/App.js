import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/home.page';
import { Contact } from './Pages/Contact/contact.page.jsx';
import { Process } from './Pages/Process/process.page.jsx';
import { Resume } from './Pages/Resume/page.resume';
import { Projects } from './Pages/Projects/projects.page';
import { NotFound } from './Pages/404/404.page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="process" element={<Process />}></Route>
        <Route path="resume" element={<Resume />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
