import './App.css';
import Navbar from './Component/Navbar/Navbar';
import HeroPage from './Component/HeroPage/Hero';
import About from './Component/AboutPage/About';
import Portfolio from './Component/PortfolioPage/Portfolio';
import Client from './Component/ClientPage/Client';
import Blog from './Component/BLogPage/Blog';
import Contact from './Component/ContactPage/Contact';
import Footer from './Component/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import BlogPages from './pages/Blog/BlogPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroPage />
              <About />
              <Portfolio />
              <Client />
              <Blog />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/Blog" element={<BlogPages/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
