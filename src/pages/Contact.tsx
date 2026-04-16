import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Как проходит первая консультация?',
      a: 'На первой встрече мы знакомимся, я слушаю вашу историю и то, с чем вы хотели бы разобраться. Мы формулируем цели терапии и обсуждаем формат работы. Это также возможность для вас понять, комфортно ли вам работать со мной.'
    },
    {
      q: 'Можно ли прийти одному, если партнер не хочет?',
      a: 'Да. Вы можете начать индивидуальную терапию. Изменения в одном партнере неизбежно влияют на всю семейную систему. Часто бывает так, что позже второй партнер тоже присоединяется к работе.'
    },
    {
      q: 'Сколько сессий обычно нужно?',
      a: 'Все индивидуально. Для решения локальной проблемы может хватить 5-10 встреч. Для глубокой работы с затяжным кризисом или после измены обычно требуется от 20 сессий. Мы регулярно сверяемся с вашими целями в процессе работы.'
    },
    {
      q: 'Вы работаете онлайн?',
      a: 'Да, я провожу консультации онлайн (Zoom, Skype, Telegram) для клиентов по всему миру. Для парной терапии важно, чтобы оба партнера находились в одном помещении перед одним экраном, либо каждый с отдельного устройства в тихом месте.'
    },
    {
      q: 'Гарантируете ли вы конфиденциальность?',
      a: 'Абсолютно. Конфиденциальность — базовый принцип работы психолога. Исключения составляют только случаи угрозы жизни и здоровью (вашему или других людей), что оговорено в этическом кодексе.'
    }
  ];

  return (
    <div className="w-full pt-10 pb-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">Контакты и запись</h1>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Самый быстрый способ связаться со мной — написать в мессенджер. 
            Я отвечаю в течение дня с 10:00 до 20:00 по Москве.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-sage-900 text-sand-50 rounded-[32px] p-8 sm:p-12"
          >
            <h2 className="text-3xl font-serif mb-8">Написать мне</h2>
            
            <div className="space-y-6 mb-12">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-2xl bg-sage-800 hover:bg-sage-700 transition-colors border border-sage-700"
              >
                <div className="w-12 h-12 bg-sage-700 rounded-full flex items-center justify-center mr-4">
                  WA
                </div>
                <div>
                  <div className="font-medium text-lg">WhatsApp</div>
                  <div className="text-sage-300 text-sm">+7 (999) 000-00-00</div>
                </div>
              </a>

              <a 
                href="https://t.me/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-2xl bg-sage-800 hover:bg-sage-700 transition-colors border border-sage-700"
              >
                <div className="w-12 h-12 bg-sage-700 rounded-full flex items-center justify-center mr-4">
                  TG
                </div>
                <div>
                  <div className="font-medium text-lg">Telegram</div>
                  <div className="text-sage-300 text-sm">@username</div>
                </div>
              </a>
            </div>

            <div className="space-y-4 text-sage-300 text-sm">
              <p><strong>Формат работы:</strong> Онлайн по всему миру / Очно в Москве (м. Чистые пруды)</p>
              <p><strong>Стоимость:</strong> Индивидуально — 5000₽ (60 мин), Парно — 7000₽ (90 мин)</p>
              <p><strong>Оплата:</strong> Переводом на карту (РФ) или через международные системы оплаты.</p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-serif mb-8 text-sage-900">Частые вопросы</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-sand-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-medium text-sage-900 pr-4">{faq.q}</span>
                    <span className="text-sage-400 flex-shrink-0">
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-sage-700 text-sm leading-relaxed border-t border-sand-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
