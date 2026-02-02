import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import LandingPage from './components/pages/LandingPage';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import Footer from './components/Layout/Footer';
import DynamicMeta from './components/SEO/DynamicMeta';
import { ModalProvider } from './context/ModalContext';
import { LanguageProvider } from './context/LanguageContext';
import BookingModal from './components/forms/BookingModal';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ModalProvider>
        <Router>
          <div className="min-h-screen flex flex-col font-sans bg-brand-dark text-brand-text selection:bg-brand-accent selection:text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </main>
            <Footer />
            
            {/* Global Booking Modal */}
            <BookingModal />
          </div>
        </Router>
      </ModalProvider>
    </LanguageProvider>
  );
};

export default App;