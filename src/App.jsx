import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CoachesPage } from './pages/CoachesPage'
import { CoursesPage } from './pages/CoursesPage'
import { HomePage } from './pages/HomePage'
import { PartnerSchoolsPage } from './pages/PartnerSchoolsPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/partnered-schools" element={<PartnerSchoolsPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/courses-offered" element={<CoursesPage />} />
      </Route>
    </Routes>
  )
}

export default App
