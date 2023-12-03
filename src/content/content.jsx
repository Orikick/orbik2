import classes from './content.module.css'
import RolesTable from '../tables/RolesTable'
import ApostilesTable from '../tables/ApostilesTable'
import Paperwork1Table from '../tables/Paperwork1Table'
import Paperwork2Table from '../tables/Paperwork2Table'
export const Content = ({ searchTerm, highlightText, highlightedApostiles1, highlightedApostiles2, highlightedApostiles3, highlightedApostiles4, highlightedRoles, highlightedPaperwork1, highlightedPaperwork2 }) => {

  return (
    <div className={classes.content}>
      <div className={classes.block} id="block1" style={{ display: searchTerm && !document.getElementById('block1').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>1.	ЦІЛІ ТА ЦІННОСТІ </div>
        <div className={classes.text}>
          <b>{highlightText(' Наша ціль: ')}</b>{highlightText("усувати бар'єри спілкування")}<br />
          <b>{highlightText(' Наша місія: ')}</b>{highlightText("сприяти взаєморозумінню між людьми та компаніями.")}
          <dl><b><dt>{highlightText(" Наші цінності:")}</dt> </b><dd>{highlightText("- якість — професіонали в команді, якісні товари/послуги")}</dd> <dd>{highlightText("- клієнтоорієнтованість - гнучкий підхід до клієнта")}</dd> <dd>{highlightText("- дотримання слова - конфіденційність інформації-, пунктуальність")}</dd> <dd>{highlightText("- HR -оптимізація - молоді, неординарні люди, які хочуть добитися великого в житті")}</dd></dl>
        <hr/>
        <hr/>
        </div>

      </div>
      <div className={classes.block} id="block2" style={{ display: searchTerm && !document.getElementById('block2').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>2.	РОЛІ ТА ОБОВ'ЯЗКИ</div>
        <RolesTable data={highlightedRoles} />
        <hr/>
        <hr/>
      </div>
      <div className={classes.block} id="block3" style={{ display: searchTerm && !document.getElementById('block3').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>3. ЗАГАЛЬНЕ</div>
        <div className={classes.text}>
          <b>{highlightText("1.	Спілкування: ")}</b>
          <p>{highlightText(" - Цей розділ стосується усіх видів спілкування: усного, письмового, електронного, по телефону чи відеодзвінків")}</p>
          <p>{highlightText(" - До Замовників чи відвідувачів завжди звертатися на «Ви» так само як і до працівників (особливо в присутності відвідувачів).")}</p>
          <p>{highlightText(" - Заборонено в спілкуванні вживати вульгаризми, сленг, суржики.")}</p>
          <p>{highlightText(" - Електронні листи розпочинати завжди з привітання і в кінці проставляти підпис:")}</p>
          <i>{highlightText("З повагою,")}</i><br />
          <i>{highlightText("(посада)")}</i><br />
          <i>{highlightText("(прізвище та ім'я)")}</i>
          <p>{highlightText(" - Заборонено видаляти переписки (окрім рекламних розсилок) без письмової згоди керівника (в тому числі через месенджери).")}</p>
          <p>{highlightText(" - Заборонено відкривати листи, які в своїй шапці/темі адресуються на ім'я керівника за винятком тих, на які керівник дав письмову згоду (в тому числі через месенджери).")}</p>
          <p>{highlightText(" - У спілкуванні з відвідувачами завжди бути привітним і щирим.")}</p>
          <p>{highlightText(" - Завжди дякувати за дзвінок тому, хто телефонував.")}</p>
          <p>{highlightText(" - У конфліктних ситуаціях зберігати спокій та врівноваженість, а також не зменшувати ввічливого тону. При загостренні ситуації повідомити, що ми перетелефонуємо, коли особа прийде в себе, та ввічливо попрощатися.")}</p>
          <p>{highlightText(" - При запиті на контактні дані/зустріч з керівником діяти наступним чином: а) дізнатися хто питає; б) дізнатися мету; в) дізнатися контактні дані; г) повідомити, що керівник перетелефонує у вільний час, якщо його це зацікавить. Електронної пошти та номера керівника не надавати.")}</p>
          <p>{highlightText(" - При спілкуванні з відвідувачами та за межами офісу завжди пам'ятати про правила комерційної таємниці.")}</p>
          <p>{highlightText(" - Непередбачені ситуації. Коли ви зіткнулися з проблемою, для якої у вас немає скрипту діалогу, краще мати поруч алгоритм спілкування з клієнтом у складних ситуаціях і знати, до кого і як можна звернутися, якщо ви не можете вирішити проблему.")}</p>
          <p>{highlightText(" - Позитивний настрій. Прибирайте негативні формулювання: все, що з 'не', замініть ствердженням. Наприклад: 'Цього товару в нас не буде ще два тижні' → 'Ця позиція зараз у процесі, надходження буде протягом найближчих двох тижнів. Ми відправимо ваше замовлення одразу після отримання партії'. Ви не відмовляєте клієнтові, а інформуєте про терміни доставки і мотивуєте до купівлі.")}</p>
          <b>{highlightText(" - Деякі агресивні слова краще взагалі прибрати:")}</b>
          <p>{highlightText(" - 'проблема' — успішні компанії не мають проблем, у них є завдання, які треба вирішувати;")}</p>
          <p>{highlightText(" - 'ви повинні', 'вам доведеться' — ніхто нікому нічого не винен. Замініть ці формулювання проханнями, дайте людині вибір: 'Надішліть, будь ласка, повернення поштою або віднесіть його до найближчого офлайн-магазину', 'Ви можете заповнити анкету в особистому профілі на сайті або підкажіть свої контактні дані зараз у телефонному режимі;")}</p>
          <p>{highlightText(" - 'дорого', 'дешево' — багато інтернет-магазинів досі використовують ці слова в умовах сортування товарів. Вони є недоречними і виглядають ще більш дивно, якщо компанія продає дорогі продукти. Краще підходить формулювання 'ціна за збільшенням/зниженням'. Коли ви спілкуєтеся з клієнтом, некоректно також вказувати, що для нього дорого, а що дешево. Замініть фразами: 'товар із середнього цінового сегмента', 'більш бюджетний варіант', 'флагманський', 'преміум', 'останнього покоління' та ін.")}</p>
          <b>{highlightText("Робоче місце")}</b>
          <p>{highlightText(" - Працівник повинен прибути на робоче місце за 5 хвилин до початку робочого часу, привести себе в порядок, ввімкнути апаратуру та розпочати робочий процес. Робочий час встановлюється для кожної посади окремо.")}</p>
          <p>{highlightText(" - Всі домашні чи не робочі обов'язки, проблеми і таке інше працівник залишає вдома, на роботу ж приходить з хорошим настроєм і протягом робочого часу займається робочими питаннями (аж ніяк не власними особистими).")}</p>
          <p>{highlightText(" - Робоче місце повинно бути завжди прибране, чисте. Всі речі на робочому місці повинні бути впорядковані та акуратно поскладані.")}</p>
          <p>{highlightText(" - Забороняється надавати відвідувачу будь-яку інформацію, яка не в межах Вашої компетенції, не стосується робочого процесу чи передавати документацію не належну йому (окрім випадків, коли відвідувач отримує документацію за дорученням, в тому числі й усним). Можна надавати довідкову інформацію не довше 3 хвилин.")}</p>
          <p>{highlightText(" - Забороняється приводити чи запрошувати на офіс друзів/знайомих/родичів без поважної на то причини.")}</p>
          <b>{highlightText("Непередбачувані обставини")}</b>
          <p>{highlightText(" - У разі виникнення будь-якої непередбачуваної ситуації перш за все потрібно НЕ панікувати, заспокоїти себе і першочергово зважати на своє життя/здоров'я, другочергово - на життя/здоров'я співпрацівників, третьочергово - на майно підприємства.")}</p>
          <p>{highlightText(" - До непередбачуваних обставин належать ті обставини, які описані в цьому розділі або форс-мажор.")}</p>
          <p>{highlightText(" - У разі виникнення стихійного лиха (ураган, землетрус, пожежа І т. д.) необхідно вжити заходів вказаних у пункті 1, а також сповістити про подію інших співпрацівників, які можуть цього ще не знати. Під час пожежі працівник відіграє роль добровільної пожежної дружини та по своїй фізичній можливості допомагає погасити пожежу. Крім того працівник сповіщає службу порятунку про подію.")}</p>
          <p>{highlightText(" - У разі виникнення на підприємстві дій сторонніх осіб (не працівників компанії), які можуть зашкодити компанії або такі дії тягнуть за собою кримінальну відповідальність, то працівник повинен в першу чергу повідомити про це керівника або, за відсутності зв'язку з ним, правоохоронні органи.")}</p>
          <p>{highlightText("- Пам'ятати про статтю Кримінального кодексу України 206 «Про протидію законній господарській діяльності».")}</p>
          <p>{highlightText("- У разі приходу будь-якого державного органу, який хоче провести перевірку - першочергово попросити представитися та надати на перевірку посвідчення і документ, який підтверджує таку перевірку. Працівник в обов'язковому порядку уважно вичитує документи та виявляє чи вони дійсні. Також викликає керівника чи повідомляє по подію. У разі відсутності керівника на офісі, просить почекати його приїзду.")}</p>
        
        </div>
        <hr/>
        <hr/>
      </div>
      <div className={classes.block} id="block4" style={{ display: searchTerm && !document.getElementById('block4').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>4.	Прийом</div>
        <div className={classes.text}><b>{highlightText("A) ВІДВІДУВАЧА")}</b>
          <ol>
            <li>{highlightText("Привітатися")}</li>
            <li>{highlightText("Запитати чи людина хоче забрати чи замовити переклад або можливо, прийшла по іншій справі?")}</li>
            <li>{highlightText("Якщо забрати – уточнити прізвище та ім'я чи з якої компанії.")}</li>
            <li>{highlightText("Тим часом попросити присісти зачекати і одночасно вияснити у CRM системі статус замовлення та оплати.")}</li>
            <li>{highlightText("Якщо замовлення повністю оплачено – видати готовий переклад. Якщо потрібно доплатити – запитати клієнта яким способом йому/їй буде зручніше доплатити. Отримати підтвердження оплати (показує статус переказу, дає готівку чи іншим способом), а після цього видати переклад.")}</li>
            <li>{highlightText("Якщо людина хоче замовити переклад – діяти відповідно до пункту Б.")}</li>
            <li>{highlightText("Якщо людина прийшла в інших справах: спершу уточнити до кого або з якою метою, тоді повідомити про це керівника через телефонний дзвінок. Не маючи даних про відвідувача, не рекомендовано залишати робоче місце без нагляду при таких особах.")}</li>
          </ol>
          <b>{highlightText("Б) ЗАМОВЛЕННЯ")}</b> <br />
          <u><i>{highlightText("При отриманні замовлення (потрібно дізнатися наступне):")}</i></u>
          <ol>
            <li>{highlightText("Як до Вас можна звертатися?")}</li>
            <li>{highlightText("З якої на яку мову потрібен переклад?")}</li>
            <li>{highlightText("Який happy-line (максимально кінцевий термін здачі)?")}</li>
            <li>{highlightText("Чи потрібне засвідчення, яке якщо так?")}</li>
            <li>{highlightText("Визначити і проконсультувати (за потреби) чи відповідає документ нотаріальному засвідченні (наявність апостилю/консульської легалізації)?")}</li>
            <li>{highlightText("Уточнити написання прізвищ та імен, важливих адрес, абревіатур, назв компаній, сталих слів")}</li>
            <li>{highlightText("Хто буде забирати замовлення?")}</li>
            <li>{highlightText("Який спосіб оплати?")}</li>
            <li>{highlightText("Взяти контактні дані замовника")}</li>
            <li>{highlightText("Якщо вартість була погоджена тільки по телефону/усно – обов'язково написати повідомлення для отримання додаткового письмового підтвердження.")}</li>
            <li>{highlightText("Всі дані (про клієнта і замовлення) потрібно вносити у CRM.")}</li>
            <li>{highlightText("Надавати максимально чітку, розгорнуту та зрозумілу відповідь клієнту при запиті ціни. Намагатися одразу визначити вартість роботи та врахувати (або повідомити) оплати за засвідчення, щоб при оплаті клієнту не видавалося, що у нас є приховані платежі чи оплата за не поінформовану послугу.")}</li>
          </ol>
          міні чатик
        </div>
        <hr/>
        <hr/>
      </div>
      <div className={classes.block} id="block5" style={{ display: searchTerm && !document.getElementById('block5').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>5. Апостилі</div>
        <div id='section2' style={{ display: searchTerm && !document.getElementById('section2').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
          <ApostilesTable data={highlightedApostiles1} />
          <ApostilesTable data={highlightedApostiles2} />
          <ApostilesTable data={highlightedApostiles3} />
          <ApostilesTable data={highlightedApostiles4} />
        </div>
        <hr/>
        <hr/>
      </div>

      <div className={classes.block} id="block6" style={{ display: searchTerm && !document.getElementById('block6').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>6. ПРОЦЕС ПІДГОТОВКИ ДО ЗДАЧІ ВИКОНАНОЇ РОБОТИ</div>
        <div className={classes.text}>Ми прагнемо бути № 1
          для цього потрібно надавати якісні послуги, дотримуючись таких правил:
          1). Узгодження з самого початку:
          Узгоджувати всі питання з клієнтом:
          <b>{highlightText("1) Узгодження з самого початку:")}</b>
          <ul>
            <li>{highlightText("ПІБ згідно закордонних чи українських документів (відповідно до мови перекладу);")}</li>
            <li>{highlightText("тип засвідчення (узгоджуємо, чи важливо для клієнта якщо прошиваємо оригінал документу до перекладу, чи краще копію – особливо для нотаріальних).")}</li>
          </ul>
          <p>{highlightText("Результат особа, яка спілкується з клієнтом, обов'язково записує в CRM")}</p>
          <b>{highlightText("2) Машинна перевірка:")}</b>
          <ul>
            <li>{highlightText("Виділити весь текст файлу (CTRL+A) та обрати в розділі Орфографії мову (Рецензування – Правопис і граматика), якою написаний текст. Переконатися чи всі підкреслені слова/фрази правильні.")}</li>
          </ul>
          <b>{highlightText("3) Вичитка тексту:")}</b>
          <ul>
            <li>{highlightText("спершу звіряємо на цілісність (чи є всі абзаци, елементи таблиць, малюнки, і т. д.)")}</li>
            <li>{highlightText("далі перевіряємо всі цифри (формати дат в Україні, США, Європі – різні)")}</li>
            <li>{highlightText("звіряємо написання імен згідно наданих клієнтом")}</li>
            <li>{highlightText("при внесенні дати засвідчення невідомою мовою – обов'язково перевіряти в пошуковику після перекладу машинним способом")}</li>
          </ul>
          <b>{highlightText("4) Дописи від перекладача:")}</b>
          <ul>
            <li>{highlightText("Печатки, дописи, підписи робимо в одному стилі: коса риска, курсивом.")}</li>
          </ul>
          <b>{highlightText("5). Хто виконує:")}</b>
          <ul>
            <li>{highlightText("не може виконувати вичитку той, хто перекладав (хіба якщо у наступний день)")}</li>
          </ul>

          <b>{highlightText("6). Уникаємо відволікання:")}</b>

          <ul>
            <li>{highlightText("НЕ розмовляти по телефону під час перевірок")}</li>
            <li>{highlightText("якщо розмови неможливо уникнути (телефонує клієнт) – ставимо курсор у місце, де зараз перевіряєте чи виділяємо жовтим і відвертаємося від комп'ютера/встаємо відійти, щоб не зробити автоматичних помилок/натискань")}</li>
            <li>{highlightText("в межах перевірки одного завдання намагатися організувати свій час таким способом, щоб не відволікатися на інші завдання, а якщо вже виникло таке відволікання – записати деталі справи, яка відволікає на пізніше і продовжити перевірку (щоб не тримати відволікання в голові).")}</li>
          </ul></div>
          <hr/>
        <hr/>
      </div>
      <div className={classes.block} id="block7" style={{ display: searchTerm && !document.getElementById('block7').innerText.toLowerCase().includes(searchTerm) ? 'none' : 'block' }}>
        <div className={classes.title}>7.	ОФОРМЛЕННЯ ПЕРЕКЛАДІВ</div>
        <Paperwork1Table data={highlightedPaperwork1} />
        <Paperwork2Table data={highlightedPaperwork2} />
        <div className={classes.text}> <b>{highlightText("Також, просимо звернути увагу на наступні моменти:")}</b>
        <p>{highlightText("Всі незрозумілі перекладачу моменти чи ті, в яких він сумнівається – просимо виділяти")}<b>{highlightText(' жовтим кольором')}</b>{highlightText(", щоб нашому редактору було зрозуміло, на що потрібно звернути особливу увагу при відсутності вичитки/перевірки перекладу.")}</p>
          <p>{highlightText("Зберігати ")}<b>{highlightText("оформлення джерела даних ")}</b>{highlightText("– наприклад, все, що було жирним шрифтом – залишати жирним, все що підкреслено/виділено курсивом– виконувати так і в перекладі.")}</p>
          <p><b>{highlightText("Колонтитули ")}</b>{highlightText("також завжди потрібно перекладати. Для цього потрібно подвійним кліком натискати на колонтитул. Коли перекладете один, всі інші на других сторінках самі автоматично обновляться. Після перекладу подвійним кліком нажати в будь-якій області за межами колонтитула.")}</p>
          <p>{highlightText("Необхідно ")}<b>{highlightText("дотримуватись єдиного стилю ")}</b>{highlightText("в перекладі, це означає, що якщо Ви вже переклали потрібне слово, фразу, скорочення, то далі по тексту повинен зустрітися тільки такий же варіант перекладу даного слова, фрази, терміну.")}</p>
          <p>{highlightText("Не допускається пропуск слів, фраз, ")}<b>{highlightText("перекладати/транслітерувати потрібно все, що бочимо! ")}</b>{highlightText(" Переклад повинен бути ")}<b>{highlightText("повним ")}</b>{highlightText("у відповідності з джерелом.")}</p>
          <p>{highlightText("Необхідно перекладати і при необхідності розшифрувати всі скорочення (абревіатури) по тексту. Розшифровки можна писати поряд в дужках або створювати посилання на розшифровку.")}</p>
          <p>{highlightText("При перекладі ")}<b>{highlightText("скорочення, ")}</b>{highlightText("якщо не знаєте, як це перекладається, потрібно звернутись до інтернету, пошукати через пошукові служби. І в принципі, якщо час дозволяє, радимо провіряти правильність перекладу через провірені сайти. Наприклад, часто переклад реквізитів і назв відомих банків, ВНЗ, державних закладів вже присутнє на сайтах цих самих закладів, необхідно просто приділити час пошуку.")}</p>
          <p>{highlightText("Перекладати ")}<b>{highlightText("одиниці вимірювання, ")}</b>{highlightText("і не залишати їх на іноземній мові (Мбіт/с, ГГц і тд.)")}</p>
          <p>{highlightText("Для англійських ")}<b>{highlightText("позначень грошових сум ")}</b>{highlightText("характерний зворотній порядок: $100, £10M. Перекладаєм по-українськи: 100 доларів, 10 мільйонів фунтів стерлінгів і т.д.")}</p>
          <p>{highlightText("Необхідно дотримуватися єдиних правил ")}<b>{highlightText("транслітерації українського алфавіту,")}{highlightText(" які будуть подані нижче")}</b></p><br/>
          <p>{highlightText("Також пропонуємо Вашій увазі посилання, які можуть бути корисними для перекладачів:")}</p>
         
          <p className={classes.link}><a target='blank' href='http://www.multitran.ru/c/m.exe?a=1&SHL=2'>{highlightText("http://www.multitran.ru/c/m.exe?a=1&SHL=2")}</a>{highlightText(" – допомога в пошуку варіантів перекладу окремих слів/фраз")}</p>
          <p className={classes.link}><a target='blank' href='http://mymemory.translated.net/s.php?q=%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80&sl=ru-RU&tl=en-GB&sj=all&of=all'>{highlightText("http://mymemory.translated.net/s.php")}</a>{highlightText(" – допомога в пошуку варіантів перекладу окремих слів/фраз")}</p>
          <p className={classes.link}><a target='blank' href='http://dictionary.reference.com/browse/public%20utility'>{highlightText("http://dictionary.reference.com/browse/public%20utility")}</a>{highlightText(" – допомога в пошуку варіантів перекладу окремих слів/фраз")}</p>
          <p className={classes.link}><a target='blank' href='http://www.reverso.net/spell-checker/english-spelling-grammar/'>{highlightText("http://www.reverso.net/spell-checker/english-spelling-grammar/")}</a>{highlightText(" - перевірка на граматичні помилки в англійській мові")}</p>
          <p className={classes.link}><a target='blank' href='http://www.duden.de/rechtschreibpruefung-online'>{highlightText("http://www.duden.de/rechtschreibpruefung-online")}</a>{highlightText(" - перевірка на граматичні помилки в німецькій мові")}</p>
         
        </div>
        <hr/>
        <hr/>
      </div>

      <div className={classes.block} id="block8">
        <div className={classes.title}>8.	НАЙМЕНУВАННЯ ФАЙЛІВ (ПАПОК)</div>
        <div className={classes.text}>
          <ol>
            <li>{highlightText("Назви файлів готових перекладів зберігати у наступному форматі:")}<br/><b>{highlightText("Прізвище_Коротка_назва_документу_ЗЯкоїМови-НаЯкуМову")}<br/></b>{highlightText("Напр.:")}<br/><b>{highlightText("Петренко_Довіреність_DE-UA")}</b></li>
            <li>{highlightText("У випадку наявності у файлі декількох документів (або якщо клієнт замовляє для іншої особи) з різними прізвищами, потрібно вказати ці прізвища у назві. ")}<br/>{highlightText("Напр.:")}<br/><b>{highlightText("Петренко_Іваненко_Довіреність_DE-UA")}</b></li>
            <li>{highlightText("Прізвища та документи у назвах файлів слід прописувати українською мовою, за винятком ситуацій, коли мова йде про іноземців, які внесені в базу латиницею або не мають офіційного перекладу імені.")}</li>
            <li>{highlightText("В CRM потрібно вносити імена Покупців/Замовників українською, за винятком тих, хто не має офіційного перекладу імені і не замовляє його.")}</li>
            <li>{highlightText("Назви файлів готових перекладів, які не є особистими документами, зберігати у наступному форматі:")}<br/><b>{highlightText("Назва_файлу_від_клієнта_ЗЯкоїМови-НаЯкуМову")}</b><br/>{highlightText("Напр.:")}<br/><b>{highlightText("Контракт2023_DE-UA")}</b><br/>{highlightText("Напр.:")}<br/><b>{highlightText("WebHomePage_DE-UA")}</b></li>
            <li>{highlightText("Не забувати прописувати в назвах дефіс чи нижнє підкреслення.")}</li>
            <li>{highlightText("Нові папки слід створювати на назвою компанії чи ФОПа або по прізвищу та імені клієнтів.")}</li>
          </ol>

          
        </div>
        <hr/>
        <hr/>
      </div>

      <div className={classes.block} id="block9">
        <div className={classes.title}>9.	ЗБЕРЕЖЕННЯ КОНТАКТІВ</div>
        <div className={classes.text}>
          
          <ol>
          <li>{highlightText("Всі контакти потрібно зберігати через Вайбер вказавши повне ім'я та прізвище українською мовою. При збереженні через Вайбер обраною поштою синхронізації маю бути вказано: online.lviv@gmail.com")}</li>
          <li>{highlightText("Вносити імена Покупців/Замовників українською, за винятком тих, хто не має офіційного перекладу імені і не замовляє його.")}</li>
          <li>{highlightText("За відсутності повного імені потрібно дізнатися його у клієнтів або ж не зберігати до отримання повної інформації.")}</li>
          </ol>
        </div>
        <hr/>
        <hr/>
      </div>

      <div className={classes.block} id="block10">
        <div className={classes.title}>10. РОБОТА З ВИКОНАВЦЯМИ</div>
        <div className={classes.text}>
          <ol>
          <li>{highlightText("Прийняті від клієнтів замовлення потрібно передати в роботу на виконання відповідним виконавцям.")}</li>
          <li>{highlightText("Для виконавців, які працюють віддалено, всі запити на виконання робіт здійснюються через електронну пошту online.lviv@gmail.com")}</li>
          <li>{highlightText("При надсиланні запиту на виконання роботи слід чітко вказати основні параметри:")}<ul>
            
          <li>{highlightText("Номер замовлення (в темі листа)")}</li>
          <li>{highlightText("Напрям перекладу (з якої на яку мову)")}</li>
          <li>{highlightText("Термін виконання")}</li>
          <li>{highlightText("Будь-які інші додаткові побажання")}</li>
            </ul>
            <div className={classes.mailexample}>
            <b>{highlightText("Зразок:")}</b><br/>
            <i>{highlightText("Добрий день!")}</i><br/>
            <i>{highlightText("Надсилаємо Вам документ на переклад. Чи зможете?")}</i><br/><br/>
            <i>{highlightText("Мова: на словацьку мову з української")}</i><br/>
            <i>{highlightText("Кінцевий термін здачі: на понеділок (27.03.23) до 10:00 год.")}</i><br/>
            <i>{highlightText("Примітки: другий абзац не потрібно перекладати")}</i><br/><br/>
            <i>{highlightText("Очікуємо відповіді.")}</i><br/><br/>
            </div>
            </li>
            
          <li>{highlightText("Для виконавців, які працюють в офісі, всі запити на виконання робіт здійснюються через CRM систему шляхом їх завантаження у відповідне замовлення (іменні папки віддаленого доступу). Менеджер завантажує у відповідні папки файли, які потрібно перекласти. Для покращення диференціації файлів між собою, менеджер ставить на початку назви файлу номер замовлення.")}</li>
          <li>{highlightText("На кожне замовлення менеджер повинен отримати чітку ствердну відповідь від виконавця про готовність виконати роботу (незалежно чи виконавець працює віддалено чи на офісі). І в разі погодження завдання замовником, підтвердити також його виконавцю.")}</li>
          <li>{highlightText("В разі відсутності відповіді виконавця на електронній пошті протягом пів години, йому слід зателефонувати.")}</li>
          <li>{highlightText("Менеджер вносить у CRM систему інформацію про виконавця замовлення а також змінює відповідні статуси замовлення.")}</li>
          <li>{highlightText("Після отримання від виконавця готового замовлення слід акуратно дотриматися побажань замовника щодо типу засвідчення/способу здачі готового замовлення у відповідності до пунктів викладених у розділі 4. Прийом замовлення.")}</li>
          </ol>
       
        </div>
        <hr/>
        <hr/>
      </div>
      <div className={classes.block} id="block11">
        <div className={classes.title}>11. </div>
        <div className={classes.text}>
        
        <div>Ше одна пуста табличка</div>
        </div>
      </div>

    </div>
  )
}