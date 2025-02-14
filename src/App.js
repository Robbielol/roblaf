import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navigation from './Navigation';
import Contact from './pages/contact/Contact';
import Experience from './pages/experience/Experience';
import HomePage from './pages/home/Home';
import Knowledgebase from './pages/knowledgebase/Skills';
function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="knowledgebase" element={<Knowledgebase />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
