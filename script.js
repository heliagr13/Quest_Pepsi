var scorm = null;
var startTime = null;
var maxScore = 10;

const questions = [
  {
    title: "NASA и история про «дюймы против сантиметров»",
    text: "Когда в 1999 году NASA запустила марсианский зонд Mars Climate Orbiter, все шло по плану — до тех пор, пока одна команда использовала метрическую систему, а другая — американскую (с дюймами и фунтами). Никто не заметил несостыковки.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Робот вместо Марса улетел в открытый космос и до сих пор болтается где-то в районе Плутона",
      "Марсоход разбился о поверхность Марса, потому что получил неверную команду",
      "Аппарат сел слишком рано, и его пришлось заново запускать с Земли"
    ],
    correct: 1,
    feedback: [
      "Звучит эффектно, но аппарат просто не смог выйти на нужную орбиту из-за ошибки. Чему нас это учит? Проверяйте, на каком языке говорит ваша команда — даже если это язык математики.",
      "Вот тебе и «наука точных расчетов»! Ошибка в единицах измерения стоила NASA 125 миллионов долларов. Чему нас это учит? Проверяйте, на каком языке говорит ваша команда — даже если это язык математики.",
      "Посадки вообще не было: он сгорел в атмосфере Марса. Чему нас это учит? Проверяйте, на каком языке говорит ваша команда — даже если это язык математики."
    ]
  },
  {
    title: "«Ядерный тест «Starfish Prime» — слишком зрелищный фейерверк»",
    text: "В 1962 году США решили испытать ядерную бомбу… в космосе. Прямо над Тихим океаном. Но просчитались: бомба была слишком мощной, и последствия оказались непредсказуемыми.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Земля сдвинулась с орбиты на долю градуса",
      "В Тихом океане образовался кратер, который до сих пор виден из космоса",
      "Взорвались спутники на орбите, и над Гавайями на час выключилось электричество"
    ],
    correct: 2,
    feedback: [
      "Земля сдвинулась с орбиты — нет, таких мощностей пока ни у кого нет (ключевое слово — пока). Чему нас это учит? Экспериментируйте с умом и хорошим расчетом на побочные эффекты.",
      "Кратер в океане — взрыв был в космосе, никакой воронки на воде не осталось. Чему нас это учит? Экспериментируйте с умом и хорошим расчетом на побочные эффекты.",
      "Когда устраиваете «небольшой» ядерный взрыв на высоте 400 км, не удивляйтесь, если у вас вырубится полпланеты. Чему нас это учит? Экспериментируйте с умом и хорошим расчетом на побочные эффекты."
    ]
  },
  {
    title: "«Coca-Cola и кокаин — бодрящий напиток XIX века»",
    text: "Оригинальный рецепт Coca-Cola включал экстракт листьев коки. На полном серьезе. Это считалось «лечебным тоником», а эффект — «озаряющим ум».<br><br><strong>К чему это привело?</strong>",
    options: [
      "Напиток стал невероятно популярным, но потребовалась реформа, когда начали подозревать зависимость",
      "Люди начали видеть галлюцинации, и продажи резко упали",
      "Город Атланта стал центром наркоторговли в США на десятилетия"
	],
    correct: 0,
    feedback: [
      "Хорошо бодрит — не всегда хорошо. Coca-Cola убрала кокаин только в начале XX века, когда запахло скандалом. Чему нас это учит? Успех продукта — не повод закрывать глаза на его риски.",
      "Галлюцинации и падение продаж — наоборот, напиток стал популярным именно благодаря «бодрящему эффекту». Чему нас это учит? Успех продукта — не повод закрывать глаза на его риски.",
      "Атланта и наркоторговля — фантазия! Проблема была в другом: в обществе начались обсуждения зависимости. Чему нас это учит? Успех продукта — не повод закрывать глаза на его риски."
    ]
  },
  {
    title: "«Наполеон, дождь и провал при Ватерлоо»",
    text: "В день решающей битвы при Ватерлоо в 1815 году ночью прошел ливень. Поле стало грязевым месивом, пушки вязли, кавалерия буксовала. Наполеон отложил атаку… и это стоило ему всего.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Армия Наполеона увязла в грязи и просто не дошла до поля боя",
      "Французы атаковали первыми, но у них отказали пушки от сырости",
      "Англичане успели подвести подкрепление, и Наполеона окончательно победили"
	],
    correct: 2,
    feedback: [
      "Армия не дошла до поля боя — дошла, и еще как! Просто пришла позже, чем хотелось бы. Чему нас это учит? От провала никто не застрахован, а внешние обстоятельства часто диктуют свои условия.",
      "Пушки отказали от сырости — пушки стреляли, но позднее. Главная проблема была во времени, а не в пушках. Чему нас это учит? От провала никто не застрахован, а внешние обстоятельства часто диктуют свои условия.",
      "Погода — еще тот стратег. Из-за грязи Наполеон отложил атаку, и все пошло не по плану. Чему нас это учит? От провала никто не застрахован, а внешние обстоятельства часто диктуют свои условия."
    ]
  },
  {
    title: "Операция с 300% смертности",
    text: "Хирург XIX века по имени Роберт Листон был известен скоростью. Однажды он провел ампутацию за 25 секунд, но... одновременно порезал ассистента, а один из зрителей упал в обморок.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Пациент умер, ассистент погиб от случайного пореза, а зритель от сердечного приступа",
      "Все выжили, но были заражены чумой из-за грязного скальпеля",
      "Хирург перепутал пациента и сделал ампутацию здоровой ноги"
	],
    correct: 0,
    feedback: [
      "Скорость — это не всегда преимущество. Особенно с острыми предметами. Чему нас это учит? Лучше точно, чем быстро. Особенно если вы стоите с ножом у операционного стола.",
      "Нет, заразились, но не чумой и не все. Чему нас это учит? Лучше точно, чем быстро. Особенно если вы стоите с ножом у операционного стола.",
      "Такая история есть, но это другой хирург и случай. Чему нас это учит? Лучше точно, чем быстро. Особенно если вы стоите с ножом у операционного стола."
    ]
  },
  {
    title: "Kodak: изобрели цифровую камеру — и спрятали",
    text: "В 1975 году инженер Kodak создал первый в мире прототип цифровой камеры. Компания испугалась, что это убьет продажи пленки — и спрятала разработку на полку.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Камера оказалась слишком дорогой, и Kodak подарила технологию NASA",
      "Компания обанкротилась, не выдержав конкуренции от цифровиков",
      "Устройство было запрещено в США из-за страха «фотошпионажа»"
	],
    correct: 1,
    feedback: [
      "NASA действительно использовала подобные разработки, но не от Kodak и не «в подарок». Чему нас это учит? Если вы придумали что-то великое — не прячьте, развивайте!",
      "Порой мы сами себе злейшие враги. Kodak так боялась будущего, что сама себя закопала. Чему нас это учит? Если вы придумали что-то великое — не прячьте, развивайте!",
      "Миф: запретов не было, просто бизнес-ошибка. Чему нас это учит? Если вы придумали что-то великое — не прячьте, развивайте!"
    ]
  },
  {
    title: "О, Windows 95: кнопка «Пуск» и глобальный затык",
    text: "Когда Microsoft выпустила Windows 95, на упаковке забыли указать, что системе нужен как минимум 386-й процессор. Люди покупали диск, ставили — а он не запускался.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Установочный файл случайно удалял старые версии Windows, и компьютеры превращались в «кирпич»",
      "Microsoft пришлось выслать по почте 14 миллионов дискет с патчами",
      "Миллионы пользователей не смогли установить систему и массово вернули диски"
	],
    correct: 2,
    feedback: [
      "Это бы точно устроило апокалипсис, но нет. Чему нас это учит? Даже самый крутой продукт не сработает, если не объяснить, как им пользоваться.",
      "Красиво звучит, но Microsoft просто перевыпустила коробки с уточенными требованиями. Чему нас это учит? Даже самый крутой продукт не сработает, если не объяснить, как им пользоваться.",
      "Запуск века чуть не закончился катастрофой из-за какой-то мелочи. Чему нас это учит? Даже самый крутой продукт не сработает, если не объяснить, как им пользоваться."
    ]
  },
  {
    title: "Blockbuster и отказ от стриминга",
    text: "В начале 2000-х Netflix предложил себя Blockbuster’у за $50 миллионов. Но в Blockbuster рассмеялись — кто вообще будет фильмы по интернету смотреть?<br><br><strong>К чему это привело?</strong>",
    options: [
      "Blockbuster выкупил Netflix и превратил его в онлайн-магазин DVD",
      "Netflix закрылся через 3 года, а Blockbuster остался лидером",
      "Blockbuster обанкротился, а Netflix стал стриминговым гигантом"
	],
    correct: 2,
    feedback: [
      "На самом деле, они отказались от сделки. Чему нас это учит? Даже если вы лидер рынка сегодня — не значит, что завтра вас не обгонят те, кого вы не приняли всерьез.",
      "Наоборот, именно Netflix выжил. Чему нас это учит? Даже если вы лидер рынка сегодня — не значит, что завтра вас не обгонят те, кого вы не приняли всерьез.",
      "Netflix стал тем, кто смеется последним. Чему нас это учит? Даже если вы лидер рынка сегодня — не значит, что завтра вас не обгонят те, кого вы не приняли всерьез."
    ]
  },
  {
    title: "Ford Edsel: машина, которую никто не понял",
    text: "В 1957 году Ford запустил модель Edsel. На нее потратили десятки миллионов, придумали кучу маркетинга, но забыли проверить, нужен ли кому-то такой дизайн. Продажи — полный провал.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Ford потерял около $250 млн и остановил выпуск через 3 года",
      "Edsel стал культовой машиной лишь спустя десятилетия",
      "Ford попытался переименовать модель и перезапустить продажи, но безуспешно"
	],
    correct: 0,
    feedback: [
      "Это один из самых громких провалов в истории автопрома. Чему нас это учит?  Громкий запуск — не гарантия успеха. Если продукт никому не нужен, никакой маркетинг не спасет.",
      "Нет, лишь символ провала. Чему нас это учит?  Громкий запуск — не гарантия успеха. Если продукт никому не нужен, никакой маркетинг не спасет.",
      "Не пытались: бренд свернули полностью. Чему нас это учит?  Громкий запуск — не гарантия успеха. Если продукт никому не нужен, никакой маркетинг не спасет."
    ]
  },
  {
    title: "Мост Tacoma Narrows — больше, чем ветер",
    text: "В 1940 году в США построили мост Tacoma Narrows. Элегантный, легкий, красивый. И невероятно неустойчивый. Через 4 месяца его унесло ветром — буквально.<br><br><strong>К чему это привело?</strong>",
    options: [
      "Автомобилисты оказались в ловушке, и мост пришлось подорвать",
      "Мост скрутился, как лента, и разрушился прямо на глазах",
      "Мост раскачивался от ветра и рухнул через несколько минут, все сняли на видео"
	],
    correct: 2,
    feedback: [
      "Нет, он сам развалился. Чему нас это учит? Красивый проект без оценки рисков — это красивая катастрофа.",
      "Почти правда, но не это было причиной. Чему нас это учит? Красивый проект без оценки рисков — это красивая катастрофа.",
      "Видео до сих пор показывают на лекциях по физике. Чему нас это учит? Красивый проект без оценки рисков — это красивая катастрофа."
    ]
  }
];


window.onload = function () {
  startTime = new Date();
  if (window.API_1484_11) {
    scorm = window.API_1484_11;
    scorm.Initialize("");
  }

  var btnStart = document.getElementById("btn-start");
  var btnSubmit = null;
  var btnNext = document.getElementById("btn-next");
  var btnRestart = document.getElementById("btn-restart");
  var questionForm = document.getElementById("question-form");
  var feedback = document.getElementById("feedback");
  var screenIntro = document.getElementById("screen-intro");
  var screenQuestion = document.getElementById("screen-question");
  var screenResult = document.getElementById("screen-result");
  var resultText = document.getElementById("result-text");

  var userScore = 0;
  var answered = false;
  var currentQuestion = 0;

  // --- Показать только один экран и скрыть остальные
  function showOnly(screen) {
    screenIntro.style.display = "none";
    screenQuestion.style.display = "none";
    screenResult.style.display = "none";

    screen.style.display = "flex"; // или "block" — в зависимости от css
  }

  // Показываем титульный экран при загрузке
  showOnly(screenIntro);

  btnStart.onclick = function () {
    currentQuestion = 0;
    userScore = 0;
    answered = false;
    btnNext.style.display = "none";
    feedback.style.display = "none";
    feedback.textContent = "";
    showOnly(screenQuestion);
    showQuestion(currentQuestion);
  };

  function attachFormHandlers() {
    btnSubmit = document.getElementById("btn-submit");
    btnSubmit.disabled = true;
    btnSubmit.style.display = "inline-block";

    questionForm.onchange = function () {
      btnSubmit.disabled = false;
    };

    questionForm.onsubmit = function (e) {
      e.preventDefault();
      if (answered) return;

      var formData = new FormData(questionForm);
      var answer = parseInt(formData.get("answer"));
      answered = true;

      btnSubmit.style.display = "none";

      var fbText = questions[currentQuestion].feedback[answer];
      feedback.textContent = fbText;
      feedback.style.display = "block";
      btnNext.style.display = "inline-block";

      var labels = questionForm.querySelectorAll("label.option");
      labels.forEach(function (label, i) {
        label.classList.remove("correct", "incorrect");
        if (i === questions[currentQuestion].correct) {
          label.classList.add("correct");
        }
        if (i === answer && i !== questions[currentQuestion].correct) {
          label.classList.add("incorrect");
        }
      });

      if (answer === questions[currentQuestion].correct) {
        userScore++;
      }

      if (scorm) {
        scorm.SetValue("cmi.score.raw", userScore.toString());
        scorm.SetValue("cmi.score.max", maxScore.toString());
        scorm.SetValue("cmi.score.min", "0");
        var percent = (userScore / maxScore) * 100;
        scorm.SetValue("cmi.score.scaled", (percent / 100).toFixed(2));
        scorm.SetValue("cmi.completion_status", "completed");
        scorm.SetValue("cmi.success_status", userScore === maxScore ? "passed" : "failed");
        scorm.SetValue("cmi.session_time", getSessionTime());
        scorm.Commit("");
      }
    };
  }

  btnNext.onclick = function () {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
      answered = false;
      btnNext.style.display = "none";
      feedback.style.display = "none";
      feedback.textContent = "";
    } else {
      showOnly(screenResult);
      showResult();
    }
  };

  btnRestart.onclick = function () {
    userScore = 0;
    answered = false;
    currentQuestion = 0;
    btnNext.style.display = "none";
    feedback.style.display = "none";
    feedback.textContent = "";
    var detailedFeedback = document.getElementById("detailed-feedback");
    if (detailedFeedback) {
      detailedFeedback.remove();
    }
    showOnly(screenIntro);
  };

  function showQuestion(index) {
    var q = questions[index];
    document.getElementById("question-number").textContent = "Вопрос " + (index + 1) + " из " + questions.length;
    document.querySelector(".question-title").textContent = q.title;
    document.querySelector(".question-text").innerHTML = q.text;
    document.getElementById("lead-bold").textContent = "";
    document.getElementById("lead-italic").textContent = "Выберите один вариант ответа";

    var optionsHtml = "";
    for (var i = 0; i < q.options.length; i++) {
      optionsHtml +=
        '<label class="option"><input type="radio" name="answer" value="' +
        i +
        '" /> ' +
        q.options[i] +
        "</label>";
    }
    questionForm.innerHTML = optionsHtml + '<button type="submit" id="btn-submit" class="btn primary-btn" disabled>Ответить</button>';
    attachFormHandlers();
  }

  function showResult() {
    var percent = (userScore / maxScore) * 100;
    resultText.textContent = "Вы набрали " + userScore + " из " + maxScore + " (" + percent.toFixed(0) + "%)";

    var feedbackText = "";

    if (percent >= 80) {
      feedbackText =
        "Ну что сказать — вы уверенно прошли по минному полю исторических фейлов — и ни разу (или почти ни разу) не оступились. У вас отличная интуиция, чувство логики и, возможно, скрытая страсть к эпичным провалам человечества. Какие-то истории вы точно знали, а где-то сработал здравый смысл. В любом случае — результат отличный. Мы вами гордимся.";
    } else if (percent >= 50) {
      feedbackText =
        "Очень достойно! Вы явно умеете различать фейлы локального значения и катастрофы масштаба NASA. Неважно, угадали вы половину историй, вспомнили или положились на интуицию — главное появилась тема для small talk с любимыми (и не очень) коллегами, родственниками, бизнес-партнерами. Поразите всех своей эрудированностью (это, когда человек много знает в разных областях — мы погуглили) и добейте чувством юмора (если оно у вас есть, если нет – добейте его отсутствием).";
    } else {
      feedbackText =
        "Ну, во-первых, вы не одни. Ошибки были, есть и будут — у людей, корпораций и даже у марсоходов. Во-вторых, теперь у вас есть новая коллекция абсурдных и абсолютно реальных историй, которую можно использовать как: а) оправдание, б) утешение, в) повод сказать “ну, бывает”. Главное — вы узнали новое, немного посмеялись и точно не взорвали спутник. Мы считаем, это уже победа.";
    }

    var detailedFeedback = document.getElementById("detailed-feedback");
    if (!detailedFeedback) {
      detailedFeedback = document.createElement("p");
      detailedFeedback.id = "detailed-feedback";
      detailedFeedback.style.marginTop = "20px";
      detailedFeedback.style.fontSize = "1.1rem";
      detailedFeedback.style.lineHeight = "1.4";
      resultText.parentNode.appendChild(detailedFeedback);
    }
    detailedFeedback.textContent = feedbackText;
  }

  function getSessionTime() {
    var endTime = new Date();
    var diff = endTime - startTime; // ms
    var totalSeconds = Math.floor(diff / 1000);

    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    function pad(num) {
      return num < 10 ? "0" + num : num;
    }
    return "PT" + pad(hours) + "H" + pad(minutes) + "M" + pad(seconds) + "S";
  }
};

window.onunload = function () {
  if (scorm) {
    scorm.Terminate("");
  }
};
