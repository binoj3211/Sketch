import { useState } from 'react'

import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import  Navbar  from './component/Navbar';
import FurnitureShowcase from './component/FurnitureShowcase';
import Desktop2 from './component/Desktop2';
import { Footer } from './component/Footer';
import TrustedSection from './component/TrustedSection';
import { SocialSection } from './component/SocialSection';
import  HeroSection  from './component/HeroSection';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
    <Navbar />
    <HeroSection />
        <Desktop2 />

 <FurnitureShowcase />
 
 <TrustedSection />
 <SocialSection />
<Footer />
       
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>

      
    </Router>
  )
}

function Home() {
  return <h2></h2>;
}

function About() {
  return <h2></h2>;
}

function Users() {
  return <h2></h2>;
}

export default App;
