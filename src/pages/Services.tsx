import { motion } from 'motion/react';
import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      id: 'couples',
      title: 'Семейная терапия',
      forWhom: 'Для пар в официальном или гражданском браке, на любом этапе отношений.',
      pains: ['Частые ссоры по кругу', 'Ощущение одиночества вдвоем', 'Отсутствие секса и нежности', 'Разные взгляды на воспитание детей', 'Вмешательство родственников'],
      outcome: 'Восстановление эмоциональной связи, умение договариваться без криков и обид, возвращение тепла в отношения.',
      price: '7 000 ₽ / 90 мин'
    },
    {
      id: 'infidelity',
      title: 'Помощь после измены',
      forWhom: 'Для пар, столкнувшихся с неверностью, которые хотят попробовать сохранить отношения.',
      pains: ['Острая боль и потеря доверия', 'Навязчивые мысли о случившемся', 'Чувство вины', 'Непонимание, как жить дальше', 'Эмоциональные качели'],
      outcome: 'Проживание кризиса в безопасной обстановке, понимание причин случившегося, осознанное решение о будущем пары.',
      price: '7 000 ₽ / 90 мин'
    },
    {
      id: 'divorce',
      title: 'Сопровождение развода',
      forWhom: 'Для пар, принявших решение расстаться, или тех, кто находится в процессе.',
      pains: ['Много гнева и обид', 'Страх за будущее детей', 'Сложности с разделением границ', 'Невозможность спокойно общаться'],
      outcome: 'Экологичное завершение отношений, снижение уровня конфликта, выстраивание новых ролей "родители, но не супруги".',
      price: '7 000 ₽ / 90 мин'
    },
    {
      id: 'individual',
      title: 'Индивидуальные консультации',
      forWhom: 'Для взрослых людей, испытывающих трудности в отношениях с собой и другими.',
      pains: ['Неуверенность в себе', 'Сложности с выбором партнера', 'Тревога и депрессивные состояния', 'Проблемы с личными границами'],
      outcome: 'Лучшее понимание себя, обретение внутренней опоры, улучшение качества жизни и отношений.',
      price: '5 000 ₽ / 60 мин'
    },
    {
      id: 'codependency',
      title: 'Работа с созависимостью',
      forWhom: 'Для тех, кто склонен растворяться в партнере или спасать его.',
      pains: ['Страх отвержения', 'Постоянный контроль партнера', 'Ощущение, что без него/нее нет жизни', 'Выбор эмоционально недоступных партнеров'],
      outcome: 'Формирование здоровой автономии, умение опираться на себя, построение отношений на основе выбора, а не нужды.',
      price: '5 000 ₽ / 60 мин'
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
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">Услуги и направления работы</h1>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Я работаю в подходе Эмоционально-фокусированной терапии (ЭФТ), который признан одним из самых эффективных методов помощи парам.
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-sand-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-sage-900">{service.title}</h2>
                <div className="bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap self-start">
                  {service.price}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sage-500 mb-3">Для кого</h3>
                  <p className="text-sage-800 mb-6">{service.forWhom}</p>
                  
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sage-500 mb-3">С чем работаем</h3>
                  <ul className="space-y-2">
                    {service.pains.map((pain, i) => (
                      <li key={i} className="flex items-start text-sage-800">
                        <span className="text-sage-400 mr-2 mt-1">•</span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-sand-50 p-6 rounded-2xl">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sage-500 mb-3">Результат терапии</h3>
                  <p className="text-sage-800 leading-relaxed">{service.outcome}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-sand-200">
                <Button to="/contact" variant="outline" className="w-full sm:w-auto">
                  Записаться на консультацию
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
