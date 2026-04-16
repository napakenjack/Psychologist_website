import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sand-100 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide text-sand-50 mb-4 block">
              Анна Смирнова
            </Link>
            <p className="text-sage-200 text-sm leading-relaxed max-w-md mb-6">
              Помогаю парам преодолеть кризис, вернуть эмоциональную близость и научиться слышать друг друга. Безопасное пространство для ваших отношений.
            </p>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <a href="#" className="w-10 h-10 rounded-full border border-sage-700 flex items-center justify-center text-sage-300 hover:bg-sage-800 hover:text-sand-50 transition-colors">
                TG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-sage-700 flex items-center justify-center text-sage-300 hover:bg-sage-800 hover:text-sand-50 transition-colors">
                WA
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-sand-50 mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sage-300 hover:text-sand-50 text-sm transition-colors">Услуги</Link></li>
              <li><Link to="/cases" className="text-sage-300 hover:text-sand-50 text-sm transition-colors">Истории изменений</Link></li>
              <li><Link to="/blog" className="text-sage-300 hover:text-sand-50 text-sm transition-colors">Блог</Link></li>
              <li><Link to="/about" className="text-sage-300 hover:text-sand-50 text-sm transition-colors">Обо мне</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-sand-50 mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-sage-300">
              <li>Онлайн по всему миру</li>
              <li>Очно в Москве</li>
              <li className="pt-2">
                <a href="mailto:hello@example.com" className="hover:text-sand-50 transition-colors">hello@example.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sage-400">
          <p>&copy; {new Date().getFullYear()} Анна Смирнова. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-sage-200">Политика конфиденциальности</Link>
            <Link to="#" className="hover:text-sage-200">Договор оферты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
