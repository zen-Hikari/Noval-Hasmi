import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroPage from './Component/HeroPage/Hero'
import About from './Component/AboutPage/About'
import Portfolio from './Component/PortfolioPage/Portfolio'
import Client from './Component/ClientPage/Client'
import Blog from './Component/BLogPage/Blog'
import Contact from './Component/ContactPage/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  return (
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
  )
}

export default App
