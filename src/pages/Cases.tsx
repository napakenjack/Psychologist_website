import { motion } from 'motion/react';
import Button from '../components/Button';

export default function Cases() {
  const cases = [
    {
      title: '«Мы живем как соседи»',
      tags: ['Отдаление', 'Утрата близости', 'Кризис 7 лет'],
      before: 'Пара в браке 7 лет. Общение свелось к бытовым вопросам и обсуждению детей. Жена чувствовала одиночество и ненужность, часто критиковала мужа. Муж в ответ замыкался, уходил в работу или видеоигры, чувствуя постоянное недовольство с ее стороны.',
      process: 'На сессиях мы исследовали их негативный цикл: как критика жены была криком о помощи и желании близости, а отстранение мужа — попыткой защититься от ощущения "я плохой муж". Учились говорить о своих уязвимых чувствах (страхе отвержения, одиночестве) вместо взаимных обвинений.',
      after: 'Через 15 сессий пара смогла разорвать этот цикл. Вернулись теплые разговоры по вечерам. Партнеры научились замечать моменты отдаления и безопасно возвращать контакт, не проваливаясь в привычные ссоры.'
    },
    {
      title: '«После измены»',
      tags: ['Измена', 'Острый кризис', 'Восстановление доверия'],
      before: 'Острый кризис после раскрытия неверности мужа. Жена находилась в состоянии шока, испытывала много боли, гнева и растерянности, постоянно проверяла телефон мужа. Вопрос стоял о разводе, но оба хотели попробовать сохранить семью.',
      process: 'Первый этап был посвящен проживанию травмы предательства и стабилизации состояния. Мы создавали безопасное пространство, где жена могла выразить свою боль, а муж — выдержать ее, принять ответственность и показать искреннее раскаяние. Затем мы исследовали, что происходило в отношениях до измены.',
      after: 'Через 8 месяцев регулярной работы снизилась острота боли. Пара приняла осознанное решение остаться вместе. Отношения стали более честными и глубокими, партнеры научились открыто говорить о своих потребностях.'
    },
    {
      title: '«Постоянные ссоры из-за мелочей»',
      tags: ['Конфликты', 'Эмоциональная реактивность'],
      before: 'Молодая пара (3 года вместе). Любая бытовая мелочь (невымытая чашка, опоздание) перерастала в грандиозный скандал с криками и угрозами расставания. Оба чувствовали себя истощенными и не понимали, почему так происходит, ведь "мы же любим друг друга".',
      process: 'Мы замедляли их взаимодействие прямо на сессиях, чтобы увидеть, что скрывается за вспышками гнева. Выяснилось, что за злостью жены стоял страх, что она не важна партнеру, а за агрессией мужа — паника, что он не справляется и его бросят.',
      after: 'Спустя 10 сессий накал страстей значительно снизился. Партнеры научились распознавать свои истинные эмоции и говорить: "Мне сейчас страшно", вместо того чтобы нападать. Ссоры стали редкими и конструктивными.'
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
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">Истории изменений</h1>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto mb-4">
            Каждая пара уникальна, но многие проблемы и циклы конфликтов похожи. 
            Здесь собраны обобщенные истории, которые показывают, как работает терапия.
          </p>
          <p className="text-sm italic text-sage-500">
            *В целях конфиденциальности все имена, детали и обстоятельства изменены. Любые совпадения случайны.
          </p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-sand-200"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-sage-900 mb-4">{item.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sage-500 mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-sand-400 mr-2"></span>
                    С чем пришли
                  </h3>
                  <p className="text-sage-800 leading-relaxed">{item.before}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sage-500 mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-sage-400 mr-2"></span>
                    Над чем работали
                  </h3>
                  <p className="text-sage-800 leading-relaxed">{item.process}</p>
                </div>

                <div className="bg-sage-50 p-6 rounded-2xl border border-sage-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sage-700 mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-sage-600 mr-2"></span>
                    Результат
                  </h3>
                  <p className="text-sage-900 leading-relaxed font-medium">{item.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-sage-800 text-sand-50 rounded-[32px] p-10">
          <h2 className="text-2xl font-serif mb-4">Узнали себя в этих историях?</h2>
          <p className="text-sage-200 mb-8 max-w-xl mx-auto">
            Кризис — это не обязательно конец отношений. Часто это возможность перестроить их и сделать более крепкими.
          </p>
          <Button to="/contact" variant="secondary">Записаться на консультацию</Button>
        </div>
      </div>
    </div>
  );
}
