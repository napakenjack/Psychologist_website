import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Кейсы', path: '/cases' },
    { name: 'Блог', path: '/blog' },
    { name: 'Обо мне', path: '/about' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl tracking-wide text-sage-800">
              Анна Смирнова
              <span className="block text-xs font-sans tracking-widest text-sage-500 uppercase mt-0.5">
                Семейный психолог
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-sage-900 font-medium' 
                    : 'text-sage-600 hover:text-sage-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-5 py-2.5 rounded-full bg-sage-800 text-sand-50 text-sm font-medium hover:bg-sage-700 transition-colors"
            >
              Записаться
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sage-800 hover:text-sage-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-sand-50 border-b border-sage-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-4 text-base font-medium border-b border-sage-100 ${
                  location.pathname === link.path 
                    ? 'text-sage-900' 
                    : 'text-sage-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-6 block text-center px-5 py-3 rounded-full bg-sage-800 text-sand-50 text-base font-medium hover:bg-sage-700 transition-colors"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
