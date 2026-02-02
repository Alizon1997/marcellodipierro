import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../../constants';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const t = TRANSLATIONS[language];
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // CRITICAL: Prevent default browser anchor behavior which causes reloads
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      if (isHome) {
        // Smooth scroll if already on home
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL silently
          window.history.pushState({}, '', href);
        }
      } else {
        // Navigate to home with hash object if elsewhere
        navigate({ pathname: '/', hash: href });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'glass-nav py-3 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {t.NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/blog"
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${location.pathname.startsWith('/blog') ? 'text-brand-accent' : 'text-brand-muted'}`}
            >
              Blog
            </Link>

            <div className="flex items-center space-x-3 ml-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 p-2 rounded-full text-brand-muted hover:text-brand-accent hover:bg-brand-surfaceHighlight transition-all font-mono text-xs font-bold"
                aria-label="Switch Language"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              <Button
                variant="primary"
                size="sm"
                onClick={openModal}
                className="group shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
              >
                {t.UI.bookPilot}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button & Lang Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-brand-muted hover:text-brand-accent transition-all font-mono text-xs font-bold flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-accent p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-surface border-b border-brand-border p-4 shadow-xl animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            {t.NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-base font-medium text-brand-muted hover:text-brand-accent block px-2 py-1"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium hover:text-brand-accent block px-2 py-1 ${location.pathname.startsWith('/blog') ? 'text-brand-accent' : 'text-brand-muted'}`}
            >
              Blog
            </Link>
            <Button
              fullWidth
              variant="primary"
              size="md"
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
            >
              {t.UI.bookPilot}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;