import { useState } from 'react';
import Navbar from './pages/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import './App.scss';

function App() {
  const [activeLink, setActiveLink] = useState('homepage'); // Change the state variable name to activeLinks
  const handleNavbarTagClick = (link) => {
    console.warn('link', link);
    setActiveLink(link);
  };
  return (
    <div className="App">
      <Navbar onNavbarTagClick={handleNavbarTagClick} />
      <Homepage activeLink={activeLink} /> {/* Change prop name to activeLink */}
    </div>
  );
}

export default App;
