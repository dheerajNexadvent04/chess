import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { CoachesPage } from './pages/CoachesPage'
import { ContactPage } from './pages/ContactPage'
import { CoursesPage } from './pages/CoursesPage'
import { HomePage } from './pages/HomePage'
import { PartnerSchoolsPage } from './pages/PartnerSchoolsPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/partners" element={<PartnerSchoolsPage />} />
        <Route path="/partnered-schools" element={<PartnerSchoolsPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/courses-offered" element={<CoursesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
