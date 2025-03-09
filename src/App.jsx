import { useEffect, useState } from 'react';
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
import LixVMac from './pages/BlogCompt/Blog7';
import Distro from './pages/BlogCompt/Blog8';
import LoadingPage from './pages/LoadingPage';




function App() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasikan waktu loading selama 3 detik sebelum masuk ke halaman utama
    setTimeout(() => {
      setLoading(false);
    }, 16000);
  }, []);

  if (loading) {
    return <LoadingPage/>;  // Tampilkan halaman loading terlebih dahulu
  }

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
        <Route path="/Blog/Royal-klude-review" element={<BlogKeyboard/>} />
        <Route path="/Blog/Unreal-powerfull-engine" element={<BlogUnreal/>} />
        <Route path="/Blog/Bug-Remote-Code-Execution-(RCE)" element={<BlogRCE/>} />
        <Route path="/Blog/Memilih-Framework-Front-End-untuk-Proyek-Web" element={<Framework/>} />
        <Route path="/Blog/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web" element={<Api/>} />
        <Route path="/Blog/5-Distribusi-Linux-Terbaik-untuk-Pengguna-Baru-di-2024" element={<BlogLinux/>} />
        <Route path="/Blog/Linux-vs-macOS:-Mana-yang-Lebih-Baik-untuk-Pengguna-Kreatif?" element={<LixVMac/>} />
        <Route path="/Blog/Distro-Linux-Terbaik-untuk-Programmer" element={<Distro/>} />
      </Routes>
    </Router>
  );
}

export default App;
