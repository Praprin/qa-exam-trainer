window.PRACTICE = (function(){
const CATS = {
  fund:  {name:'QA Fundamentals', color:'#4dabf7'},
  design:{name:'Test Design',     color:'#00ff41'},
  cases: {name:'Test Cases & Docs',color:'#ffd600'},
  bug:   {name:'Bug Reporting',   color:'#ff2d2d'},
  api:   {name:'API Testing',     color:'#a78bfa'},
  auto:  {name:'Automation Basics',color:'#ff9f43'},
  edge:  {name:'Edge Cases',      color:'#ff6b9d'},
  agile: {name:'Agile / Process', color:'#22d3ee'},
  doc:    {name:'Documentation & Reporting', color:'#94a3b8'},
  browser:{name:'Cross-browser & DevTools', color:'#2dd4bf'},
  a11y:   {name:'Accessibility (WCAG)', color:'#c084fc'},
  audio:  {name:'TTS / Audio', color:'#f472b6'},
};

/* ============================================================
   QUESTION BANK
   type: 'single' | 'multi' | 'open'
============================================================ */
const BANK = [
/* ---------- QA FUNDAMENTALS ---------- */
{cat:'fund',type:'single',q:'What is the main goal of software testing?',
 options:['To prove the software has no bugs','To find defects and reduce the risk of failure','To write documentation','To replace developers'],
 answer:1,explain:'Цель тестирования — найти дефекты и снизить риск, а НЕ доказать отсутствие багов (доказать отсутствие всех багов невозможно).'},

{cat:'fund',type:'single',q:'Verification answers which question?',
 options:['Are we building the right product?','Are we building the product right?','Is the product fast enough?','Does the user like it?'],
 answer:1,explain:'Verification = "строим ли мы продукт правильно?" (соответствие спецификации: review, inspection). Validation = "тот ли это продукт?" (соответствие потребности пользователя: UAT).'},

{cat:'fund',type:'single',q:'Validation is typically confirmed by which activity?',
 options:['Code review','Static analysis','User Acceptance Testing (UAT)','Unit testing'],
 answer:2,explain:'Validation подтверждается на UAT — пользователь проверяет, что продукт решает его задачу.'},

{cat:'fund',type:'open',q:'Explain the difference between Verification and Validation.',
 model:'Verification — "are we building the product right?" — checking the product against specifications/requirements via reviews, inspections, walkthroughs (static). Validation — "are we building the right product?" — checking that the product meets the user\'s actual needs, usually via execution and UAT (dynamic).',
 keywords:['building the product right','right product','specification','requirement','uat','user','review','static','dynamic'],
 explain:'Ключевое: Verification — соответствие требованиям (правильно ли строим), Validation — соответствие реальной потребности (то ли строим).'},

{cat:'fund',type:'single',q:'Which testing level is performed by developers on a single function in isolation?',
 options:['System testing','Integration testing','Unit testing','Acceptance testing'],
 answer:2,explain:'Unit testing — изолированная проверка отдельной функции/метода, обычно делают разработчики.'},

{cat:'fund',type:'single',q:'Testing the interaction between two or more modules is called:',
 options:['Unit testing','Integration testing','Smoke testing','Regression testing'],
 answer:1,explain:'Integration testing проверяет взаимодействие модулей между собой.'},

{cat:'fund',type:'single',q:'What is the correct order of testing levels (bottom-up)?',
 options:['System → Unit → Integration → Acceptance','Unit → Integration → System → Acceptance','Integration → Unit → Acceptance → System','Acceptance → System → Integration → Unit'],
 answer:1,explain:'Снизу вверх: Unit → Integration → System → Acceptance (UAT).'},

{cat:'fund',type:'single',q:'Regression testing is performed to:',
 options:['Check the build is stable enough to test','Verify new features only','Ensure recent changes did not break existing functionality','Measure performance under load'],
 answer:2,explain:'Regression — убедиться, что новые изменения не сломали уже работавшую функциональность.'},

{cat:'fund',type:'single',q:'Smoke testing is best described as:',
 options:['A deep, exhaustive test of one feature','A broad, shallow check that the build is stable enough for further testing','Testing only the UI colors','Testing done after release'],
 answer:1,explain:'Smoke — широкая поверхностная проверка "жив ли билд", делается ДО полноценного тестирования.'},

{cat:'fund',type:'single',q:'Sanity testing differs from smoke testing because it is:',
 options:['Broader and shallower','Narrow and focused on a specific fix/feature','Always automated','Done before the build is deployed'],
 answer:1,explain:'Sanity — узкая проверка конкретного фикса/фичи после изменения. Smoke — широкая проверка всего билда.'},

{cat:'fund',type:'open',q:'What is the difference between Smoke and Sanity testing?',
 model:'Smoke testing is a broad, shallow check run on a new build to verify the critical paths work and the build is stable enough for deeper testing. Sanity testing is a narrow, deep check focused on a specific bug fix or feature to confirm it works as expected, usually skipping full regression.',
 keywords:['smoke','broad','shallow','build','stable','sanity','narrow','deep','specific','fix','feature'],
 explain:'Smoke = "жив ли билд вообще" (широко, поверхностно). Sanity = "этот фикс работает?" (узко, глубоко).'},

{cat:'fund',type:'single',q:'Re-testing means:',
 options:['Running the whole suite again','Testing a specific defect again after it was fixed','Testing on a new device','Testing without test cases'],
 answer:1,explain:'Re-testing (confirmation testing) — повторная проверка конкретного бага после фикса. Не путать с regression.'},

{cat:'fund',type:'single',q:'In black-box testing, the tester:',
 options:['Knows and tests the internal code paths','Tests based on requirements without knowledge of internal code','Only writes unit tests','Reviews the source code line by line'],
 answer:1,explain:'Black-box — тестирование по требованиям, без знания внутренней реализации. Это основной подход manual QA.'},

{cat:'fund',type:'single',q:'White-box testing requires:',
 options:['No technical knowledge','Knowledge of the internal code structure','Only a browser','A production environment'],
 answer:1,explain:'White-box требует знания внутренней структуры кода (пути выполнения, ветвления).'},

{cat:'fund',type:'open',q:'What is exploratory testing?',
 model:'Exploratory testing is simultaneous learning, test design and test execution. The tester explores the application without predefined scripted test cases, using experience, intuition and domain knowledge to find defects, often documenting findings as they go.',
 keywords:['simultaneous','learning','design','execution','without','predefined','script','experience','intuition','explore'],
 explain:'Exploratory — одновременно изучаем, проектируем и выполняем тесты без заранее написанных кейсов, опираясь на опыт и интуицию.'},

{cat:'fund',type:'single',q:'What does SDLC stand for?',
 options:['Software Defect Logging Cycle','Software Development Life Cycle','System Design Logic Chart','Standard Data Loading Component'],
 answer:1,explain:'SDLC = Software Development Life Cycle — полный цикл разработки ПО.'},

{cat:'fund',type:'single',q:'What does STLC stand for?',
 options:['Software Testing Life Cycle','System Test Load Calculation','Standard Test Language Compiler','Static Type Logic Check'],
 answer:0,explain:'STLC = Software Testing Life Cycle — цикл тестирования внутри SDLC.'},

{cat:'fund',type:'single',q:'Which is a NON-functional type of testing?',
 options:['Login validation testing','Performance testing','Checkout flow testing','CRUD operations testing'],
 answer:1,explain:'Performance — нефункциональное тестирование (скорость, нагрузка). Функциональное проверяет "что делает", нефункциональное — "как работает".'},

/* ---------- TEST DESIGN ---------- */
{cat:'design',type:'single',q:'For an age field accepting 18–65, Boundary Value Analysis would test:',
 options:['Only 18 and 65','17, 18, 19 and 64, 65, 66','Only 30','0 and 100 only'],
 answer:1,explain:'BVA проверяет границы и значения рядом: 17/18/19 и 64/65/66 — баги чаще всего на границах.'},

{cat:'design',type:'open',q:'Explain Equivalence Partitioning with a short example.',
 model:'Equivalence Partitioning divides input data into classes (partitions) where all values behave the same way, so you only need to test one representative per class. Example: a field accepting age 18–65 has three partitions: below 18 (invalid, e.g. 10), 18–65 (valid, e.g. 30), and above 65 (invalid, e.g. 80). Testing one value from each is enough.',
 keywords:['divide','class','partition','same','representative','valid','invalid','one value'],
 explain:'EP — делим входы на классы эквивалентности (внутри класса поведение одинаковое) и берём по одному представителю. Снижает число тестов без потери покрытия.'},

{cat:'design',type:'single',q:'Boundary Value Analysis is based on the idea that:',
 options:['All inputs are equally risky','Defects cluster around the edges of input ranges','Only the middle value matters','You must test every possible value'],
 answer:1,explain:'BVA исходит из того, что дефекты группируются на границах диапазонов.'},

{cat:'design',type:'single',q:'A Decision Table is most useful when:',
 options:['There is only one input','The output depends on combinations of several conditions','You test performance','You explore without a plan'],
 answer:1,explain:'Decision Table применяют, когда результат зависит от комбинаций нескольких условий.'},

{cat:'design',type:'single',q:'State Transition testing is appropriate for:',
 options:['A static text page','A system that moves between states (e.g. order: created → paid → shipped)','Testing colors','A single math function'],
 answer:1,explain:'State Transition — для систем с состояниями и переходами между ними (заказ, бронирование, авторизация).'},

{cat:'design',type:'open',q:'What is Error Guessing?',
 model:'Error guessing is an experience-based test design technique where the tester uses intuition and past experience to anticipate where defects are likely to occur, then designs tests for those cases — e.g. empty fields, null, special characters, very long strings, 0, -1, duplicate entries.',
 keywords:['experience','intuition','guess','likely','empty','null','special','long','0','negative'],
 explain:'Error Guessing — на основе опыта угадываем уязвимые места (пустые поля, null, спецсимволы, 0, -1, длинные строки) и пишем тесты под них.'},

{cat:'design',type:'single',q:'A positive test case verifies that the system:',
 options:['Rejects invalid input with an error','Accepts valid input and produces the expected success result','Crashes gracefully','Logs an exception'],
 answer:1,explain:'Positive — валидные данные дают ожидаемый успешный результат. Negative — невалидные данные дают корректную ошибку.'},

{cat:'design',type:'multi',q:'Which are valid test design techniques? (select all)',
 options:['Equivalence Partitioning','Boundary Value Analysis','Decision Table','Random crashing'],
 answer:[0,1,2],explain:'EP, BVA и Decision Table — техники тест-дизайна. "Random crashing" — нет.'},

/* ---------- TEST CASES & DOCS ---------- */
{cat:'cases',type:'single',q:'Which document defines scope, approach, resources and schedule of testing?',
 options:['Test case','Test plan','Bug report','Release note'],
 answer:1,explain:'Test plan — документ верхнего уровня: что/как/кто/когда тестируем, критерии входа и выхода.'},

{cat:'cases',type:'single',q:'A Test Suite is:',
 options:['A single test scenario','A logical collection of related test cases','A bug tracker','An environment'],
 answer:1,explain:'Test Suite — логически сгруппированный набор тест-кейсов (например, "Login Suite").'},

{cat:'cases',type:'open',q:'List the key fields a well-written test case should contain.',
 model:'A good test case includes: a unique ID, a clear title/summary, preconditions, test steps, test data, expected result, actual result, status (pass/fail), and priority. Often also: postconditions and a reference to the requirement.',
 keywords:['id','title','precondition','steps','data','expected','actual','status','priority'],
 explain:'ID, Title, Preconditions, Steps, Test Data, Expected Result, Actual Result, Status, Priority. Эталон — чёткие шаги и однозначный ожидаемый результат.'},

{cat:'cases',type:'single',q:'"Entry criteria" for testing means:',
 options:['Conditions that must be met before testing can start','Conditions to stop testing','The list of bugs found','The number of testers'],
 answer:0,explain:'Entry criteria — условия начала тестирования (билд готов, среда настроена, требования утверждены).'},

{cat:'cases',type:'single',q:'"Exit criteria" typically include:',
 options:['Build is deployed','X% of test cases passed and no open critical bugs','The team is tired','The sprint started'],
 answer:1,explain:'Exit criteria — условия завершения: нужный % пройденных кейсов, отсутствие открытых критичных багов, покрытие требований.'},

{cat:'cases',type:'single',q:'What makes "Expected Result" effective in a test case?',
 options:['It is vague so it covers more','It is specific and unambiguous','It lists the bug id','It is optional'],
 answer:1,explain:'Expected Result должен быть конкретным и однозначным — иначе непонятно, прошёл тест или нет.'},

{cat:'cases',type:'single',q:'Traceability matrix is used to:',
 options:['Track server uptime','Map requirements to test cases to ensure coverage','Store passwords','Measure code speed'],
 answer:1,explain:'Requirements Traceability Matrix (RTM) связывает требования с тест-кейсами — гарантирует, что всё покрыто тестами.'},

/* ---------- BUG REPORTING ---------- */
{cat:'bug',type:'single',q:'Severity describes:',
 options:['How urgently a bug must be fixed','How much the bug impacts the functionality','Who reported the bug','The bug color'],
 answer:1,explain:'Severity — степень влияния на функциональность (ставит QA). Priority — срочность фикса (ставит бизнес/PM).'},

{cat:'bug',type:'single',q:'Priority describes:',
 options:['Technical impact on the system','How soon the bug should be fixed (business urgency)','The number of steps to reproduce','The browser version'],
 answer:1,explain:'Priority — насколько срочно чинить с точки зрения бизнеса.'},

{cat:'bug',type:'single',q:'A typo in the company name on the homepage is usually:',
 options:['High Severity, Low Priority','Low Severity, High Priority','High Severity, High Priority','Low Severity, Low Priority'],
 answer:1,explain:'Опечатка не ломает функциональность (Low Severity), но видна всем и бьёт по имиджу — чинить срочно (High Priority).'},

{cat:'bug',type:'single',q:'App crashes on a rarely used admin screen. Likely classification:',
 options:['High Severity, possibly Low Priority','Low Severity, Low Priority','Low Severity, High Priority','No severity'],
 answer:0,explain:'Краш = High Severity, но если экран используется редко — Priority может быть ниже.'},

{cat:'bug',type:'open',q:'What are the essential elements of a good bug report?',
 model:'A good bug report has: a clear concise title, environment details (OS, browser, build/version), exact steps to reproduce, expected result, actual result, severity and priority, and supporting evidence such as screenshots, videos or logs. It should be reproducible and unambiguous.',
 keywords:['title','environment','steps','reproduce','expected','actual','severity','priority','screenshot','log','evidence'],
 explain:'Title, Environment, Steps to Reproduce, Expected vs Actual, Severity/Priority, доказательства (скриншоты/логи). Главное — воспроизводимость и однозначность.'},

{cat:'bug',type:'single',q:'The typical bug lifecycle starts with which status?',
 options:['Closed','New / Open','Fixed','Reopened'],
 answer:1,explain:'Жизненный цикл: New/Open → Assigned → In Progress → Fixed → Retest → Closed (или Rejected/Duplicate/Won\'t Fix).'},

{cat:'bug',type:'single',q:'A bug is marked "Cannot Reproduce". Best next action by QA?',
 options:['Delete it immediately','Provide more details: exact steps, environment, video/logs','Mark it Closed-Fixed','Reassign to CEO'],
 answer:1,explain:'Если разработчик не воспроизводит — QA добавляет точные шаги, окружение, видео/логи, чтобы помочь воспроизвести.'},

{cat:'bug',type:'single',q:'Which status means the developer decided NOT to fix the bug intentionally?',
 options:['Duplicate','Won\'t Fix','Reopened','Assigned'],
 answer:1,explain:'Won\'t Fix — сознательное решение не чинить (например, by design или слишком низкий приоритет).'},

{cat:'bug',type:'single',q:'Two testers report the same defect. The second report is marked:',
 options:['Critical','Duplicate','Reopened','Deferred'],
 answer:1,explain:'Повторный репорт того же дефекта закрывается как Duplicate.'},

{cat:'bug',type:'open',q:'Write the "Steps to Reproduce" for a login bug where the Login button does nothing when the password contains special characters. (3–5 numbered steps)',
 model:'1. Open the login page. 2. Enter a valid email (e.g. user@test.com). 3. Enter a password containing special characters (e.g. P@$$w0rd!). 4. Click the Login button. 5. Observe: nothing happens — no redirect and no error message (expected: successful login or a clear error).',
 keywords:['open','login','email','password','special','click','observe','expected'],
 explain:'Хорошие шаги: пронумерованы, с конкретными данными, заканчиваются наблюдаемым результатом и тем, что ожидалось.'},

/* ---------- API TESTING ---------- */
{cat:'api',type:'single',q:'Which HTTP method is used to retrieve data without changing server state?',
 options:['POST','GET','DELETE','PUT'],
 answer:1,explain:'GET — получение данных, идемпотентен и не меняет состояние.'},

{cat:'api',type:'single',q:'Which HTTP method is typically used to create a new resource?',
 options:['GET','POST','HEAD','OPTIONS'],
 answer:1,explain:'POST — создание нового ресурса (часто отвечает 201 Created).'},

{cat:'api',type:'single',q:'What is the difference between PUT and PATCH?',
 options:['PUT deletes, PATCH creates','PUT replaces the whole resource, PATCH updates it partially','They are identical','PATCH is only for GET requests'],
 answer:1,explain:'PUT заменяет ресурс целиком, PATCH обновляет частично.'},

{cat:'api',type:'single',q:'HTTP 200 means:',
 options:['Created','OK / success','Not Found','Server error'],
 answer:1,explain:'200 OK — запрос успешно выполнен.'},

{cat:'api',type:'single',q:'HTTP 201 typically means:',
 options:['Resource created successfully','Bad request','Unauthorized','Gateway timeout'],
 answer:0,explain:'201 Created — ресурс успешно создан (обычно ответ на POST).'},

{cat:'api',type:'single',q:'A request without a valid auth token should return:',
 options:['200','301','401 Unauthorized','500'],
 answer:2,explain:'401 Unauthorized — не аутентифицирован (нет/неверный токен).'},

{cat:'api',type:'open',q:'Explain the difference between HTTP 401 and 403.',
 model:'401 Unauthorized means the user is not authenticated — no valid credentials/token were provided, so the server does not know who you are. 403 Forbidden means the user IS authenticated but does not have permission to access this resource — the server knows who you are but denies access.',
 keywords:['401','authenticate','token','credential','who you are','403','forbidden','permission','authoriz','access'],
 explain:'401 = "кто ты?" (нет/неверный токен). 403 = "знаю кто ты, но тебе сюда нельзя" (нет прав).'},

{cat:'api',type:'single',q:'HTTP 404 means:',
 options:['Success','The requested resource was not found','Unauthorized','Server crashed'],
 answer:1,explain:'404 Not Found — запрашиваемый ресурс не существует.'},

{cat:'api',type:'single',q:'HTTP 500 indicates:',
 options:['Client sent bad data','The server encountered an internal error','Resource created','Redirect'],
 answer:1,explain:'500 Internal Server Error — ошибка на стороне сервера.'},

{cat:'api',type:'single',q:'A validation error (e.g. email format invalid) is best represented by:',
 options:['200','201','400 or 422','204'],
 answer:2,explain:'400 Bad Request или 422 Unprocessable Entity — невалидные данные/проваленная валидация.'},

{cat:'api',type:'single',q:'Creating a user with an email that already exists should return:',
 options:['200 OK','409 Conflict','404 Not Found','301 Moved'],
 answer:1,explain:'409 Conflict — конфликт состояния (email уже занят).'},

{cat:'api',type:'single',q:'204 No Content is commonly returned by:',
 options:['A successful GET with data','A successful DELETE with no body','A failed login','A redirect'],
 answer:1,explain:'204 No Content — успех без тела ответа (часто DELETE).'},

{cat:'api',type:'multi',q:'When testing an API endpoint, what should you verify? (select all)',
 options:['Status code','Response body and its schema/structure','Error handling for invalid input','Authorization behavior'],
 answer:[0,1,2,3],explain:'Проверяем статус-код, тело и его структуру, обработку ошибок, авторизацию, граничные значения, время ответа.'},

{cat:'api',type:'single',q:'Which header tells the server the request body is JSON?',
 options:['Accept-Language: en','Content-Type: application/json','Authorization: Bearer','Cache-Control: no-cache'],
 answer:1,explain:'Content-Type: application/json указывает формат тела запроса.'},

{cat:'api',type:'open',q:'You test "POST /api/users". Write 3 test cases (one positive, two negative) with expected status codes.',
 model:'TC1 (positive): valid name, email, password → 201 Created, response contains user id, password not returned. TC2 (negative): email already exists → 409 Conflict with an error message. TC3 (negative): missing required field (e.g. no email) → 400/422 validation error. (Also: no auth token → 401; invalid email format → 400/422.)',
 keywords:['201','valid','409','exist','400','422','missing','required','401','token','negative','positive'],
 explain:'Позитив: валидные данные → 201. Негатив: дубликат email → 409; отсутствует обязательное поле → 400/422; без токена → 401.'},

{cat:'api',type:'single',q:'Which tool is most associated with manual API testing?',
 options:['Selenium','Postman','Jenkins','Figma'],
 answer:1,explain:'Postman — стандартный инструмент ручного тестирования API (плюс Swagger для документации).'},

{cat:'api',type:'single',q:'A REST API is "stateless". This means:',
 options:['It never returns data','Each request contains all info needed; the server keeps no session state between requests','It cannot use HTTPS','It only works with GET'],
 answer:1,explain:'Stateless — каждый запрос самодостаточен, сервер не хранит состояние сессии между запросами.'},

/* ---------- AUTOMATION BASICS ---------- */
{cat:'auto',type:'single',q:'Which scenario is the BEST candidate for automation?',
 options:['A one-time exploratory session','Stable regression tests run every release','A UI that changes daily','A test run once a year'],
 answer:1,explain:'Автоматизируют стабильные, часто повторяющиеся тесты (регресс перед каждым релизом).'},

{cat:'auto',type:'single',q:'Which is generally a POOR candidate for automation?',
 options:['Smoke suite','Data-driven regression','Exploratory testing','API contract checks'],
 answer:2,explain:'Exploratory плохо автоматизируется — оно про живое исследование и интуицию.'},

{cat:'auto',type:'single',q:'In the Test Pyramid, which layer should have the MOST tests?',
 options:['UI / End-to-End','Integration','Unit','Manual'],
 answer:2,explain:'Пирамида: больше всего unit-тестов (быстрые, дешёвые), меньше всего UI/E2E (медленные, дорогие).'},

{cat:'auto',type:'multi',q:'Which tools are used for test automation? (select all)',
 options:['Selenium','Playwright','Cypress','Confluence'],
 answer:[0,1,2],explain:'Selenium, Playwright, Cypress — автоматизация UI. Confluence — это вики/документация, не автотесты.'},

{cat:'auto',type:'single',q:'CI/CD in the context of QA means:',
 options:['Tests are written only manually','Tests run automatically on each code push/merge in a pipeline','QA replaces developers','No testing is needed'],
 answer:1,explain:'CI/CD — тесты запускаются автоматически в пайплайне при каждом push/merge (GitHub Actions, Jenkins).'},

{cat:'auto',type:'open',q:'Why is the Test Pyramid shaped the way it is (wide bottom, narrow top)?',
 model:'Because unit tests at the bottom are fast, cheap, stable and isolated, so you want many of them. Integration tests in the middle are fewer. UI/end-to-end tests at the top are slow, expensive and brittle, so you want few of them. The shape optimizes for fast feedback and low maintenance.',
 keywords:['unit','fast','cheap','many','ui','e2e','slow','expensive','brittle','few','feedback','maintenance'],
 explain:'Внизу unit — быстрые, дешёвые, стабильные → их много. Вверху UI/E2E — медленные, дорогие, хрупкие → их мало. Так быстрее обратная связь и меньше поддержки.'},

/* ---------- EDGE CASES ---------- */
{cat:'edge',type:'multi',q:'For a required text input field, which edge cases should you test? (select all)',
 options:['Empty / only spaces','Very long string (e.g. 10000 chars)','Special characters and SQL/script injection','Unicode / emoji'],
 answer:[0,1,2,3],explain:'Все перечисленные: пусто/пробелы, очень длинно, спецсимволы и инъекции, юникод/эмодзи.'},

{cat:'edge',type:'single',q:'A classic edge case for a numeric "quantity" field is:',
 options:['Only the value 5','0, -1 and a non-numeric string like "abc"','Only positive integers','Nothing special'],
 answer:1,explain:'Для чисел: 0, -1, переполнение, дробное вместо целого, строка вместо числа.'},

{cat:'edge',type:'single',q:'Which date is a classic edge case to test?',
 options:['A random Tuesday','Feb 29 in a non-leap year','The 15th of a month','Any weekday'],
 answer:1,explain:'29 февраля в невисокосный год, конец месяца (31-е), прошлая дата где ждут будущую, таймзоны.'},

{cat:'edge',type:'open',q:'List edge cases you would test for an email input field.',
 model:'Empty field; missing @; missing domain; multiple @; leading/trailing spaces; very long address; special characters; unicode/emoji; SQL/script injection; valid but already-registered email; uppercase vs lowercase; plus-addressing (user+tag@mail.com); missing top-level domain.',
 keywords:['empty','@','domain','space','long','special','unicode','injection','exist','uppercase','invalid format'],
 explain:'Пусто, без @, без домена, два @, пробелы, очень длинный, спецсимволы, юникод, инъекции, уже зарегистрированный, регистр.'},

{cat:'edge',type:'single',q:'Testing what happens when a user submits a form twice quickly (double-click) checks for:',
 options:['Color contrast','Duplicate submission / race condition handling','Font size','Spelling'],
 answer:1,explain:'Двойная быстрая отправка — проверка на дубли/race condition (например, двойное бронирование или двойной платёж).'},

{cat:'edge',type:'single',q:'"Boundary" edge case for a field limited to 255 characters includes testing:',
 options:['Only 100 characters','254, 255 and 256 characters','Only 1 character','Only emojis'],
 answer:1,explain:'Границы лимита: 254, 255, 256 символов.'},

/* ---------- AGILE / PROCESS ---------- */
{cat:'agile',type:'single',q:'In Scrum, the short daily meeting is called:',
 options:['Retrospective','Daily standup','Sprint review','Backlog grooming'],
 answer:1,explain:'Daily standup — короткая ежедневная встреча: что сделал, что буду делать, что блокирует.'},

{cat:'agile',type:'single',q:'The purpose of a Sprint Retrospective is to:',
 options:['Demo the product to stakeholders','Reflect on the process and identify improvements','Assign new tasks','Fix production bugs'],
 answer:1,explain:'Retrospective — команда анализирует процесс и ищет, что улучшить в следующем спринте.'},

{cat:'agile',type:'single',q:'"Definition of Done" (DoD) is:',
 options:['A list of bugs','A shared checklist a feature must meet to be considered complete (incl. tested)','The sprint length','The release date'],
 answer:1,explain:'DoD — общий чек-лист готовности фичи (код написан, протестирован, отревьюен, задокументирован).'},

{cat:'agile',type:'single',q:'When should QA ideally get involved in the development cycle?',
 options:['Only after development is fully finished','As early as possible (requirements stage) — "shift-left"','Only in production','Never'],
 answer:1,explain:'Shift-left: QA подключается как можно раньше (на этапе требований) — раньше нашли дефект, дешевле фикс.'},

{cat:'agile',type:'single',q:'Which issue trackers are commonly used by QA?',
 options:['Photoshop and Figma','Jira, Linear, YouTrack','Excel only','None'],
 answer:1,explain:'Jira, Linear, YouTrack, Azure DevOps — трекеры задач и багов. (В вакансии Speechify упомянуты Jira/Linear.)'},

{cat:'agile',type:'open',q:'A startup gives you an ambiguous feature with unclear requirements to test. How do you approach it?',
 model:'First clarify: talk to product/engineering to understand the intended behavior and user goal. Review whatever docs/designs exist. Identify assumptions and risks. Start with exploratory testing to learn the feature, then derive test cases for core flows and edge cases. Document questions and surface gaps/ambiguities early. Prioritize by user impact and risk. Communicate findings continuously.',
 keywords:['clarify','ask','product','requirement','assumption','risk','exploratory','core','edge','prioritize','communicate','document'],
 explain:'Speechify прямо проверяет умение работать с неоднозначностью. Алгоритм: уточнить у продукта/инженеров → изучить что есть → выписать допущения и риски → exploratory → тест-кейсы на основные потоки и edge cases → приоритизировать по влиянию → постоянно коммуницировать.'},

{cat:'agile',type:'single',q:'For a text-to-speech (audio) product, an important QA check unique to the domain is:',
 options:['Button hover color','Audio naturalness, pronunciation, prosody and artifacts','Database indexing','CSS grid layout'],
 answer:1,explain:'Для TTS-продукта (Speechify) важно слуховое качество: естественность, произношение, просодия, артефакты, синхронизация текста и звука.'},

/* ---------- DOCUMENTATION & REPORTING ---------- */
{cat:'doc',type:'single',q:"What is a 'regression suite'?",
 options:["A document describing test scope and schedule","A collection of test cases run before each release to ensure existing functionality still works","A single test for one new feature","A bug tracking board"],
 answer:1,explain:"Regression suite — накопленный со временем набор тест-кейсов, который прогоняют перед каждым релизом, чтобы старое не сломалось. Нашли баг → добавили кейс в регресс."},
{cat:'doc',type:'single',q:"A release validation summary primarily records which decision?",
 options:["Which developer wrote the code","The go / no-go decision on shipping the release","The sprint velocity","The database schema"],
 answer:1,explain:"Release validation summary перед запуском фиксирует go/no-go: что протестировано, результаты, известные проблемы, выпускать ли релиз."},
{cat:'doc',type:'single',q:"How do a test plan and a test report differ in timing?",
 options:["They are the same document","Test plan is written before testing (scope/approach); test report after (results)","The test report always comes first","Neither is a real document"],
 answer:1,explain:"Test plan — ДО тестирования (scope, подход, расписание). Test report/summary — ПОСЛЕ (pass/fail, баги, риски, готовность)."},
{cat:'doc',type:'open',q:"Name the main QA documents you would maintain and what each is for.",
 model:"Test plan (scope, approach, schedule), test cases (concrete checks), regression suite (tests run before each release), test report / test summary (results: pass/fail, bugs, risks), and a release validation summary (go/no-go before launch).",
 keywords:["test plan","scope","test case","regression suite","release","test report","summary","results","go","no-go","validation"],
 explain:"Вакансия Speechify прямо перечисляет: test cases, regression suites, test reports, release validation summaries."},

/* ---------- CROSS-BROWSER & DEVTOOLS ---------- */
{cat:'browser',type:'single',q:"Quickest way to check how a site looks on mobile without a phone?",
 options:["Reinstall the browser","DevTools device toolbar (Ctrl+Shift+M) to emulate devices","Edit the production CSS","Clear cookies"],
 answer:1,explain:"DevTools device toolbar (Ctrl+Shift+M) эмулирует устройства и разрешения — быстрый responsive-чек."},
{cat:'browser',type:'multi',q:"Which issues are commonly found in cross-browser testing? (select all)",
 options:["Layout overlap / broken responsive design","Font and CSS rendering differences","JavaScript API support differences between engines","Database index corruption"],
 answer:[0,1,2],explain:"Кросс-браузерные баги: вёрстка/responsive, рендеринг CSS/шрифтов, разная поддержка JS API (Blink/Gecko/WebKit). БД ни при чём."},
{cat:'browser',type:'single',q:"A button does nothing when clicked. Which DevTools tab do you open first to find a JS error?",
 options:["Application","Console","Elements","Performance"],
 answer:1,explain:"Console — первым делом: красные JS-ошибки часто и есть причина «кнопка не работает»."},
{cat:'browser',type:'single',q:"A deleted item still appears in the UI although it is gone from the DB. Where in DevTools do you look first?",
 options:["Console for syntax errors","Application (cache / localStorage) and Network — is the list refetched or served from cache","Performance tab","Security tab"],
 answer:1,explain:"«Удалил, а показывается» = почти всегда КЭШ. Application → cache/storage; Network → перезапрашивается ли список или отдаётся из кэша (304 / from cache). Баг фронта, не сервера."},
{cat:'browser',type:'single',q:"In the Network tab a GET request returns 304. What does it mean?",
 options:["The server crashed","Not Modified — the resource is unchanged and served from cache","The request was unauthorized","The resource was created"],
 answer:1,explain:"304 Not Modified — ресурс не изменился, берётся из кэша. Может быть причиной «вижу старые данные»."},
{cat:'browser',type:'open',q:"A payment button works on Chrome but not on Safari. How do you isolate the cause with DevTools, and what key fields go in the bug report?",
 model:"Reproduce on Safari, confirm it works on Chrome (so it is browser-specific, likely front-end). In Safari Web Inspector: Console for JS errors (an unsupported JS API), Network to see if the click fires a request, Elements to check if another element overlaps the button (z-index/CSS). Record Safari and OS version. Bug report: clear title mentioning Safari, environment (Safari/OS/build), steps to reproduce, expected vs actual, severity/priority, evidence (video, console error, screenshot), and note that it works on Chrome.",
 keywords:["reproduce","safari","chrome","browser-specific","console","network","elements","overlap","z-index","version","title","environment","steps","expected","actual","severity","evidence","works on chrome"],
 explain:"Изоляция: Console (JS-ошибка) + Network (идёт ли запрос) + Elements (перекрытие/z-index). В репорте: окружение Safari/ОС, шаги, exp/act, severity, evidence, и «на Chrome работает» — ценная инфа для дева."},

/* ---------- AGILE CEREMONIES ---------- */
{cat:'agile',type:'single',q:"Which Agile ceremony is best for surfacing edge cases and requirement gaps early?",
 options:["Daily standup","Backlog grooming / refinement","Retrospective","Release party"],
 answer:1,explain:"Grooming/refinement: детально разбирают будущие задачи и требования — лучшее место поднять edge cases и вопросы тестируемости (shift-left)."},
{cat:'agile',type:'single',q:"What does 'shift-left' mean in testing?",
 options:["Move testers to another team","Perform testing and QA as early as possible in the SDLC","Test only at the very end","Automate everything"],
 answer:1,explain:"Shift-left — подключать тестирование/QA как можно раньше в жизненном цикле; раньше нашёл проблему — дешевле фикс."},
{cat:'agile',type:'single',q:"What is the purpose of sprint planning?",
 options:["Reflect on the past sprint","Select and estimate the work for the upcoming sprint","Demo to stakeholders","Fix production incidents"],
 answer:1,explain:"Sprint planning — выбрать и оценить задачи на предстоящий спринт (QA закладывает время на тестирование)."},
{cat:'agile',type:'single',q:"What is the purpose of a retrospective?",
 options:["Estimate story points","Reflect on the process and identify improvements","Write test cases","Deploy to production"],
 answer:1,explain:"Retrospective — команда анализирует процесс и ищет, что улучшить в следующем спринте."},

/* ---------- TRIAGE ---------- */
{cat:'bug',type:'multi',q:"Which factors define a bug's user impact (for prioritization)? (select all)",
 options:["Number of users affected","Whether it blocks a key user flow (payment/login)","Whether a workaround exists","The developer's favorite color"],
 answer:[0,1,2],explain:"User impact = сколько пользователей затронуто, блокирует ли ключевой флоу, есть ли workaround, частота сценария. По этому приоритизируют."},
{cat:'bug',type:'single',q:"Who typically takes part in bug triage?",
 options:["Only the CEO","QA, Product, Engineering and often Customer Support","Only developers","Only the tester alone"],
 answer:1,explain:"Триаж — совместный разбор багов: QA + Product + Engineering + Support (Support приносит реальную частоту жалоб для приоритизации)."},

/* ---------- ACCESSIBILITY (WCAG) ---------- */
{cat:'a11y',type:'single',q:"In WCAG, the four principles 'POUR' stand for:",
 options:["Perceivable, Operable, Understandable, Robust","Performance, Output, Usability, Reliability","Portable, Open, Usable, Responsive","Precise, Optimal, Unified, Rapid"],
 answer:0,explain:"POUR: Perceivable (воспринимаемо), Operable (управляемо), Understandable (понятно), Robust (надёжно)."},
{cat:'a11y',type:'multi',q:"What does accessibility testing typically check? (select all)",
 options:["Color contrast of text","Full keyboard navigation (Tab, no mouse)","Alt text for images and screen-reader support","Database query speed"],
 answer:[0,1,2],explain:"A11y-проверки: контраст, навигация с клавиатуры, alt-текст и screen reader, видимый фокус, подписанные формы."},
{cat:'a11y',type:'single',q:"Which WCAG conformance level is the common target for products?",
 options:["Level A","Level AA","Level AAA","Level Z"],
 answer:1,explain:"AA — стандартный целевой уровень соответствия WCAG (A — минимум, AAA — самый строгий)."},

/* ---------- TTS / AUDIO ---------- */
{cat:'audio',type:'multi',q:"What is specific to testing a TTS / audio product (vs ordinary web)? (select all)",
 options:["Naturalness and prosody (intonation, pauses)","Audible artifacts (clicks, cut-offs, distortion)","Latency to start of speech and text-audio sync","SQL index tuning"],
 answer:[0,1,2],explain:"Для TTS: естественность/просодия, артефакты, латентность (Speechify — sub-second), синхронизация текст↔звук, многоязычность."},
{cat:'audio',type:'single',q:"Speechify advertises 'sub-second latency'. As QA, what do you measure?",
 options:["The size of the database","The time from request until speech actually starts playing","The number of CSS files","The screen resolution"],
 answer:1,explain:"Латентность TTS — время от запроса до старта звучания речи; sub-second значит меньше 1 секунды."},

/* ---------- REINFORCE WEAK SPOTS ---------- */
{cat:'fund',type:'single',q:"Smoke testing is best described as:",
 options:["Checking that unchanged areas were not broken after a change","A broad, shallow check that the build is stable enough to test further","An exhaustive test of every input combination","Re-testing a single fixed defect"],
 answer:1,explain:"Smoke = широкая поверхностная проверка, что билд жив и критическое работает. «Не сломали старое после изменения» — это REGRESSION, не smoke!"},
{cat:'api',type:'single',q:"Login with a wrong password should return:",
 options:["200 OK","401 Unauthorized","403 Forbidden","404 Not Found"],
 answer:1,explain:"Неверные креды на логине → 401 Unauthorized (не аутентифицирован)."},
{cat:'api',type:'single',q:"A login attempt on a locked / disabled account should return:",
 options:["401 Unauthorized","403 Forbidden","201 Created","204 No Content"],
 answer:1,explain:"Заблокированный/отключённый аккаунт → 403 Forbidden (известен, но доступ запрещён). Неверный пароль → 401."},
{cat:'api',type:'single',q:"A successful DELETE that returns no response body uses which status code?",
 options:["200 OK","204 No Content","304 Not Modified","404 Not Found"],
 answer:1,explain:"Успешный DELETE с пустым телом → 204 No Content. (304 — это кэш, не путать.)"},
];
return {CATS, BANK};
})();
