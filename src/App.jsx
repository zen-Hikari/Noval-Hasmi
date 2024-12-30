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
import BlogPages from './pages/Blog/BlogHome';
import BlogKeyboard from './pages/BlogCompt/Blog1';
import BlogUnreal from './pages/BlogCompt/Blog2';
import BlogRCE from './pages/BlogCompt/Blog3';
import Framework from './pages/BlogCompt/Blog4';
import Api from './pages/BlogCompt/Blog5';
import BlogLinux from './pages/BlogCompt/Blog6';
import { Analytics } from '@vercel/analytics';



function App() {
  return (
        <>
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
        <Route path="/Blog/Royal-klude-review" element={<BlogKeyboard/>} />
        <Route path="/Blog/Unreal-powerfull-engine" element={<BlogUnreal/>} />
        <Route path="/Blog/Bug-Remote-Code-Execution-(RCE)" element={<BlogRCE/>} />
        <Route path="/Blog/Memilih-Framework-Front-End-untuk-Proyek-Web" element={<Framework/>} />
        <Route path="/Blog/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web" element={<Api/>} />
        <Route path="/Blog/5-Distribusi-Linux-Terbaik-untuk-Pengguna-Baru-di-2024" element={<BlogLinux/>} />
      </Routes>
    </Router>
    <Analytics/>
    </>
  );
}

export default App;
