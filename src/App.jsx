import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BusinessSystems from './pages/BusinessSystems'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import AIBuilderHero from './components/AIBuilderHero'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ai-builder" element={<AIBuilderHero />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="systems" element={<BusinessSystems />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
