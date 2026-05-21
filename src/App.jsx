import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { CoachesPage } from './pages/CoachesPage'
import { ContactPage } from './pages/ContactPage'
import { CoursesPage } from './pages/CoursesPage'
import { CareerPage } from './pages/CareerPage'
import { CurriculumPage } from './pages/CurriculumPage'
import { HomePage } from './pages/HomePage'
import { PartnerSchoolsPage } from './pages/PartnerSchoolsPage'
import { BookClassPage } from './pages/BookClassPage'
import { AchievementPage } from './pages/AchievementPage'
import { AnnouncementBar } from './components/AnnouncementBar'
import './App.css'

function App() {
  return (
    <>
      <AnnouncementBar />
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/partners" element={<PartnerSchoolsPage />} />
        <Route path="/partnered-schools" element={<PartnerSchoolsPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/courses-offered" element={<CoursesPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/book-class" element={<BookClassPage />} />
        <Route path="/achievements" element={<AchievementPage />} />
      </Route>
      </Routes>
    </>
  )
}

export default App
