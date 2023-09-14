import './App.css'

import ComplexNavbarComponent from './components/ComplexNavbar/ComplexNavbar.Component'
import FooterWithSocialLinksComponent from './components/FooterWithSocialLinks/FooterWithSocialLinks.Component'
import HomePage from './pages/Home/Home.Page'
import PortfolioPage from './pages/Portfolio/Portofio.Page'
import ProjectsPage from './pages/Projects/Projects.Page'
import ReviewsPage from './pages/Reviews/Reviews.Page'
import ContactsPage from './pages/Contacts/Contacts.Page'
import HouseDetailPage from './pages/HouseDetail/HouseDetail.Page'
import ProjectDetailPage from './pages/ProjectDetail/ProjectDetail.Page'
import AdminPanel from './pages/AdminPanel/AdminPanel.Page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  const isAdminRoute = window.location.pathname.startsWith('/admin');

  return (
    <Router>
      {!isAdminRoute && <ComplexNavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/portfolio/house/:id" element={<HouseDetailPage />} />
        <Route path="/projects/house/:id" element={<ProjectDetailPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      {!isAdminRoute && <FooterWithSocialLinksComponent />}
    </Router>
  );
}

export default App