import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sand-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-sage-600 font-medium tracking-wider text-sm uppercase mb-4 block">
                Семейный психолог
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-sage-900">
                Помогаю парам преодолеть кризис и вернуть эмоциональную близость
              </h1>
              <p className="text-lg text-sage-700 mb-10 leading-relaxed max-w-xl">
                Бережное пространство, где вы сможете услышать друг друга, разобраться в конфликтах и найти путь к теплым, надежным отношениям.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary">Записаться на консультацию</Button>
                <Button to="/services" variant="outline">Узнать больше</Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-t-full rounded-b-[40px] overflow-hidden border-8 border-sand-50 shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Психолог Анна Смирнова" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-sage-200 rounded-full -z-10 blur-2xl opacity-60"></div>
              <div className="absolute top-1/4 -right-8 w-32 h-32 bg-sand-300 rounded-full -z-10 blur-xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Intro */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Отношения могут быть безопасным местом</h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Часто за ссорами, молчанием и взаимными претензиями скрывается боль и потребность быть услышанным. 
            Моя задача — не искать виноватых, а помочь вам увидеть цикл, в который попала ваша пара, и найти из него выход. 
            Мы будем работать над восстановлением доверия, даже если сейчас кажется, что все разрушено.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-sage-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-sage-300 tracking-widest text-xs uppercase mb-3 block">Направления работы</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-sand-50">С чем я могу помочь</h2>
            </div>
            <Button to="/services" variant="secondary" className="hidden md:inline-flex">Все услуги</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Семейная терапия',
                desc: 'Помощь парам в кризисе, при частых конфликтах, отдалении, измене или на грани развода.',
                icon: '👥'
              },
              {
                title: 'Индивидуальные сессии',
                desc: 'Работа с личными границами, тревогой в отношениях, поиском себя и эмоциональным выгоранием.',
                icon: '👤'
              },
              {
                title: 'Работа с созависимостью',
                desc: 'Выход из разрушительных сценариев, обретение опоры на себя и построение здоровых привязанностей.',
                icon: '🌱'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-sage-800 p-8 rounded-3xl border border-sage-700 hover:border-sage-500 transition-colors">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-serif mb-4 text-sand-100">{service.title}</h3>
                <p className="text-sage-300 leading-relaxed mb-8">{service.desc}</p>
                <Button to="/services" variant="outline" className="w-full border-sage-600 text-sand-100 hover:bg-sage-700 hover:border-sage-500">
                  Подробнее
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10 md:hidden flex justify-center">
            <Button to="/services" variant="secondary">Все услуги</Button>
          </div>
        </div>
      </section>

      {/* Cases Preview */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">Истории изменений</h2>
            <p className="text-sage-700">
              Каждая пара уникальна, но многие проблемы похожи. Посмотрите, как другие люди справлялись с кризисами, похожими на ваш.
              <br/><span className="text-sm italic mt-2 block opacity-70">*Все истории публикуются с согласия клиентов, имена изменены.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-sm">
              <h3 className="text-xl font-serif mb-6 border-b border-sand-200 pb-4">«Мы живем как соседи»</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-sage-900 uppercase tracking-wider mb-2">С чем пришли</h4>
                  <p className="text-sage-700 text-sm leading-relaxed">Пара в браке 7 лет. Общение свелось к бытовым вопросам. Жена чувствовала одиночество, муж — постоянное недовольство с ее стороны.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-sage-900 uppercase tracking-wider mb-2">Над чем работали</h4>
                  <p className="text-sage-700 text-sm leading-relaxed">Исследовали цикл конфликта: как отстранение одного вызывает тревогу и критику у другого. Учились говорить о своих потребностях без обвинений.</p>
                </div>
                <div className="bg-sage-50 p-4 rounded-2xl">
                  <h4 className="text-sm font-bold text-sage-900 uppercase tracking-wider mb-2">Результат (через 15 сессий)</h4>
                  <p className="text-sage-800 text-sm leading-relaxed">Вернулись теплые разговоры по вечерам. Партнеры научились замечать моменты отдаления и безопасно возвращать контакт.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-sm">
              <h3 className="text-xl font-serif mb-6 border-b border-sand-200 pb-4">«После измены»</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-sage-900 uppercase tracking-wider mb-2">С чем пришли</h4>
                  <p className="text-sage-700 text-sm leading-relaxed">Острый кризис после раскрытия неверности. Много боли, гнева и растерянности. Вопрос стоял о разводе, но оба хотели попробовать сохранить семью.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-sage-900 uppercase tracking-wider mb-2">Над чем работали</h4>
                  <p className="text-sage-700 text-sm leading-relaxed">Проживание травмы предательства. Помощь пострадавшему партнеру в выражении боли, а изменившему — в принятии ответственности и восстановлении доверия.</p>
                </div>
                <div className="bg-sage-50 p-4 rounded-2xl">
                  <h4 className="text-sm font-bold text-sage-900 uppercase tracking-wider mb-2">Результат (через 8 месяцев)</h4>
                  <p className="text-sage-800 text-sm leading-relaxed">Снижение остроты боли. Принято осознанное решение остаться вместе. Отношения стали более честными и глубокими, чем до кризиса.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button to="/cases" variant="outline" className="bg-white">Читать больше историй</Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">Как проходит работа</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Запись', desc: 'Вы оставляете заявку, мы согласовываем удобное время и формат (онлайн или очно).' },
              { step: '02', title: 'Первая встреча', desc: 'Знакомство, прояснение вашей ситуации и формирование целей терапии.' },
              { step: '03', title: 'Регулярная работа', desc: 'Встречи раз в неделю. Мы исследуем ваши паттерны и учимся новым способам взаимодействия.' },
              { step: '04', title: 'Завершение', desc: 'Когда вы чувствуете, что достигли цели и можете справляться самостоятельно.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif text-sage-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sage-800 text-sand-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif mb-8">Сделайте первый шаг навстречу друг другу</h2>
          <p className="text-lg text-sage-200 mb-10 max-w-2xl mx-auto">
            Даже если сейчас ситуация кажется безвыходной, профессиональная помощь может дать вам шанс на восстановление отношений.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="https://wa.me/1234567890" variant="secondary" className="w-full sm:w-auto">
              Написать в WhatsApp
            </Button>
            <Button href="https://t.me/username" variant="outline" className="w-full sm:w-auto border-sage-500 text-sand-100 hover:bg-sage-700">
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
