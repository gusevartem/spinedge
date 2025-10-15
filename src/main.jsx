import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './Sections/NotFoundPage.jsx'
import PrivacyPolicy from './Sections/PrivacyPolicy.jsx'
import './global.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/thanks" element={<NotFoundPage isThanks={true} />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/blog/:post" element={<PrivacyPolicy isBlog={true} />} />
    </Routes>
  </BrowserRouter>,
)
