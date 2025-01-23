import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navigation from './Navigation';
import Contact from './pages/contact/Contact';
import Experience from './pages/experience/Experience';
import HomePage from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element='' />
          </Route>
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
