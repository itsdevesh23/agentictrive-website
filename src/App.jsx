import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BusinessSystems from './pages/BusinessSystems'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import RefundPolicy from './pages/RefundPolicy'
import CookiePolicy from './pages/CookiePolicy'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="systems" element={<BusinessSystems />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
