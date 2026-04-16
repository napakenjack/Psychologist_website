import { motion } from 'motion/react';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="w-full pt-10 pb-24 bg-sand-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-t-full rounded-b-[40px] overflow-hidden border-8 border-white shadow-lg sticky top-32">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                alt="Анна Смирнова" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl font-serif mb-6 text-sage-900">Обо мне</h1>
            
            <div className="prose prose-sage max-w-none text-sage-800 space-y-6 leading-relaxed">
              <p className="text-lg font-medium">
                Здравствуйте! Меня зовут Анна Смирнова. Я практикующий психолог, сертифицированный семейный терапевт.
              </p>
              <p>
                Уже более 8 лет я помогаю парам и индивидуальным клиентам проходить через кризисы, восстанавливать доверие и строить отношения, в которых безопасно и тепло.
              </p>
              <p>
                Мой основной метод работы — Эмоционально-фокусированная терапия (ЭФТ). Это научно доказанный подход, который помогает не просто "научиться договариваться", а изменить саму эмоциональную реакцию партнеров друг на друга. Мы работаем не с симптомами (ссорами из-за быта), а с корнем проблемы — нарушенной привязанностью.
              </p>

              <h2 className="text-2xl font-serif text-sage-900 mt-10 mb-4">Мое образование</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="block text-sage-900">Московский Государственный Университет (МГУ)</strong>
                    <span className="text-sage-600 text-sm">Факультет психологии, специальность «Клиническая психология» (2010-2015)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="block text-sage-900">ICEEFT (Международный центр ЭФТ, Канада)</strong>
                    <span className="text-sage-600 text-sm">Базовый и продвинутый курсы по Эмоционально-фокусированной терапии пар (2017-2019)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="block text-sage-900">Институт Интегративной Семейной Терапии</strong>
                    <span className="text-sage-600 text-sm">Системная семейная психотерапия (2016-2018)</span>
                  </div>
                </li>
              </ul>

              <h2 className="text-2xl font-serif text-sage-900 mt-10 mb-4">Принципы моей работы</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-sand-200">
                  <h3 className="font-bold text-sage-900 mb-2">Безопасность</h3>
                  <p className="text-sm text-sage-700">Я не ищу виноватых и не принимаю чью-либо сторону. Мой клиент — это ваши отношения.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200">
                  <h3 className="font-bold text-sage-900 mb-2">Конфиденциальность</h3>
                  <p className="text-sm text-sage-700">Всё, что обсуждается на сессиях, остается строго между нами в соответствии с этическим кодексом.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200">
                  <h3 className="font-bold text-sage-900 mb-2">Бережность</h3>
                  <p className="text-sm text-sage-700">Мы идем в вашем темпе. Я не заставляю делать то, к чему вы пока не готовы.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200">
                  <h3 className="font-bold text-sage-900 mb-2">Прозрачность</h3>
                  <p className="text-sm text-sage-700">Я объясняю, что и зачем мы делаем, как работает психика и почему возникают те или иные реакции.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-sand-200">
              <Button to="/contact" variant="primary">Связаться со мной</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
