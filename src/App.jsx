import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
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
import { TournamentPage } from './pages/TournamentPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { BlogPage } from './pages/BlogPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { MarketAreaPage } from './pages/MarketAreaPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Preloader } from './components/Preloader'
import { ChessPuzzleWidget } from './components/ChessPuzzleWidget'
import './App.css'

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return null
}

function App() {
  return (
    <>
      <AnnouncementBar />
      <ScrollToTop />
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
        <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/market-area" element={<MarketAreaPage />} />
        <Route path="/nepzo" element={<ExternalRedirect to="https://nepzo.in/" />} />
        <Route path="/nepzo-program" element={<ExternalRedirect to="https://nepzo.in/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      </Routes>
      <Preloader />
      <ChessPuzzleWidget />
    </>
  )
}

export default App
