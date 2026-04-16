import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles = [
    {
      id: 1,
      category: 'Конфликты',
      title: 'Почему мы ссоримся из-за невымытой посуды?',
      excerpt: 'Бытовые конфликты редко бывают связаны с самим бытом. Разбираем, какие неудовлетворенные потребности скрываются за претензиями к разбросанным вещам.',
      date: '12 Октября 2023',
      readTime: '5 мин'
    },
    {
      id: 2,
      category: 'Близость',
      title: 'Как вернуть эмоциональную близость в отношения',
      excerpt: 'Когда партнеры отдаляются, кажется, что любовь прошла. Но часто это лишь защитная реакция. Практические шаги к восстановлению контакта.',
      date: '28 Сентября 2023',
      readTime: '7 мин'
    },
    {
      id: 3,
      category: 'Измена',
      title: 'Жизнь после измены: можно ли простить и сохранить семью?',
      excerpt: 'Измена — это тяжелая травма для отношений. Рассказываю о стадиях проживания этого кризиса и о том, что нужно для восстановления доверия.',
      date: '15 Сентября 2023',
      readTime: '10 мин'
    },
    {
      id: 4,
      category: 'Созависимость',
      title: 'Любовь или зависимость: как отличить',
      excerpt: 'Где проходит грань между здоровой привязанностью и растворением в партнере? Признаки созависимых отношений и пути выхода из них.',
      date: '02 Сентября 2023',
      readTime: '6 мин'
    }
  ];

  return (
    <div className="w-full pt-10 pb-24 bg-sand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">Блог</h1>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Статьи о психологии отношений, конфликтах, близости и способах сделать вашу связь крепче.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-sand-200 flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-sage-500">
                <span className="bg-sand-100 text-sage-700 px-3 py-1 rounded-full">{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              
              <h2 className="text-xl font-serif text-sage-900 mb-3 leading-snug">
                <Link to="#" className="hover:text-sage-600 transition-colors">
                  {article.title}
                </Link>
              </h2>
              
              <p className="text-sage-700 text-sm leading-relaxed mb-6 flex-grow">
                {article.excerpt}
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-sand-100 mt-auto">
                <span className="text-xs text-sage-400">{article.date}</span>
                <Link to="#" className="text-sage-800 hover:text-sage-600 flex items-center text-sm font-medium transition-colors">
                  Читать <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
