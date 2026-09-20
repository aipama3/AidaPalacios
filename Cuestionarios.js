// ==============================
// CUESTIONARIOS
// ==============================

const questionnaires = {

  bienestar: {
    title: "¿Cómo me encuentro últimamente?",
    category: "Bienestar emocional",
    description:
      "Piensa en cómo te has encontrado durante las últimas semanas y elige la opción que mejor describa tu experiencia.",

    questions: [
      {
        text: "¿Cómo ha sido tu estado de ánimo últimamente?",
        options: [
          "Generalmente bueno",
          "Algo bajo o cambiante",
          "Bastante bajo",
          "Muy bajo"
        ]
      },

      {
        text: "¿Cómo está siendo tu nivel de energía?",
        options: [
          "Tengo bastante energía",
          "A veces me siento cansado/a",
          "Me cuesta bastante mantener la energía",
          "Me siento sin energía gran parte del tiempo"
        ]
      },

      {
        text: "¿Cómo está siendo tu motivación para hacer cosas?",
        options: [
          "Mantengo mi motivación habitual",
          "A veces me cuesta empezar",
          "Me cuesta bastante ponerme en marcha",
          "Casi nada me motiva"
        ]
      },

      {
        text: "¿Cómo estás disfrutando de las cosas que normalmente te gustan?",
        options: [
          "Las disfruto como siempre",
          "Un poco menos que antes",
          "Bastante menos que antes",
          "Me cuesta mucho disfrutar"
        ]
      },

      {
        text: "¿Cómo sientes que estás afrontando tu día a día?",
        options: [
          "Lo estoy llevando bien",
          "Con algunas dificultades",
          "Me está resultando bastante difícil",
          "Siento que me está sobrepasando"
        ]
      }
    ],

    results: [
      {
        max: 5,
        title: "Parece que estás atravesando un momento relativamente estable.",
        description:
          "Tus respuestas reflejan, en general, un funcionamiento emocional bastante estable. Aun así, puede ser útil seguir prestando atención a cómo evolucionas y cuidar tus necesidades."
      },

      {
        max: 10,
        title: "Parece que hay algunas áreas que merecen atención.",
        description:
          "Tus respuestas señalan algunas dificultades que podrían estar afectando a tu bienestar. Observarlas con calma puede ayudarte a comprender mejor qué necesitas en este momento."
      },

      {
        max: 15,
        title: "Parece que estás atravesando algunas dificultades importantes.",
        description:
          "Tus respuestas reflejan un malestar que merece ser escuchado y comprendido. Si estas dificultades están interfiriendo en tu vida cotidiana, puede ser útil valorar hablar con un profesional."
      },

      {
        max: 20,
        title: "Tus respuestas reflejan un nivel elevado de malestar.",
        description:
          "Parece que estás atravesando un momento que puede estar resultando especialmente difícil. Una valoración psicológica individualizada puede ayudarte a comprender qué está ocurriendo y qué apoyo necesitas."
      }
    ]
  },


  autoestima: {

    title: "Mi relación conmigo",
    category: "Autoestima",
    description:
      "Observa cómo te relacionas contigo mismo/a. No hay respuestas correctas o incorrectas.",

    questions: [

      {
        text: "¿Cómo sueles hablarte cuando cometes un error?",
        options: [
          "Con comprensión",
          "Depende del momento",
          "Suelo ser bastante crítico/a",
          "Soy muy duro/a conmigo"
        ]
      },

      {
        text: "¿Te resulta fácil reconocer tus propias cualidades?",
        options: [
          "Sí, bastante",
          "A veces",
          "Me cuesta",
          "Me resulta muy difícil"
        ]
      },

      {
        text: "¿Cómo te afecta la opinión de otras personas?",
        options: [
          "Poco",
          "A veces me afecta",
          "Bastante",
          "Mucho"
        ]
      },

      {
        text: "¿Sientes que tus necesidades son importantes?",
        options: [
          "Sí, normalmente",
          "A veces las dejo en segundo plano",
          "Con frecuencia las ignoro",
          "Me cuesta mucho tenerlas en cuenta"
        ]
      },

      {
        text: "¿Cómo te comparas con otras personas?",
        options: [
          "Raramente me comparo",
          "A veces lo hago",
          "Me comparo con frecuencia",
          "Suelo sentir que los demás son mejores que yo"
        ]
      }
    ],

    results: [

      {
        max: 5,
        title: "Tu relación contigo parece bastante amable.",
        description:
          "Tus respuestas reflejan una tendencia a tratarte con cierta comprensión y reconocer tus propias necesidades y cualidades."
      },

      {
        max: 10,
        title: "Hay espacio para cuidar más tu relación contigo.",
        description:
          "Tus respuestas sugieren que en algunos momentos puedes ser exigente contigo o dejar tus necesidades en segundo plano."
      },

      {
        max: 15,
        title: "Parece importante prestar atención a cómo te estás tratando.",
        description:
          "Tus respuestas reflejan bastante autocrítica o dificultad para reconocer tus propias necesidades. Trabajar la relación contigo puede ser un área interesante de crecimiento."
      },

      {
        max: 20,
        title: "Tu relación contigo podría estar generándote bastante malestar.",
        description:
          "Tus respuestas reflejan una relación especialmente exigente contigo mismo/a. Explorar estas experiencias en un espacio profesional puede ayudarte a desarrollar una relación más amable y flexible contigo."
      }
    ]
  },


  ansiedad: {

    title: "Observando mi ansiedad",
    category: "Ansiedad",
    description:
      "Piensa en cómo has experimentado la ansiedad recientemente y selecciona la respuesta que más se aproxime a tu experiencia.",

    questions: [

      {
        text: "¿Con qué frecuencia notas preocupación difícil de controlar?",
        options: [
          "Raramente",
          "A veces",
          "Con frecuencia",
          "Muy frecuentemente"
        ]
      },

      {
        text: "¿Hasta qué punto notas tensión o nerviosismo?",
        options: [
          "Poco",
          "Algo",
          "Bastante",
          "Mucho"
        ]
      },

      {
        text: "¿Te cuesta desconectar de tus preocupaciones?",
        options: [
          "Casi nunca",
          "A veces",
          "Con frecuencia",
          "Casi siempre"
        ]
      },

      {
        text: "¿Notas síntomas físicos cuando estás preocupado/a?",
        options: [
          "Raramente",
          "A veces",
          "Con frecuencia",
          "Muy frecuentemente"
        ]
      },

      {
        text: "¿Hasta qué punto la preocupación interfiere en tu día a día?",
        options: [
          "Muy poco",
          "Algo",
          "Bastante",
          "Mucho"
        ]
      }
    ],

    results: [

      {
        max: 5,
        title: "Parece que actualmente la ansiedad tiene poca presencia.",
        description:
          "Tus respuestas reflejan pocas experiencias relacionadas con preocupación o tensión en este momento."
      },

      {
        max: 10,
        title: "Hay algunos signos de preocupación o tensión.",
        description:
          "Tus respuestas indican que la ansiedad puede aparecer en algunos momentos. Observar cuándo aparece y qué situaciones la acompañan puede resultar útil."
      },

      {
        max: 15,
        title: "Parece que la ansiedad está teniendo bastante presencia.",
        description:
          "Tus respuestas reflejan experiencias frecuentes de preocupación, tensión o dificultad para desconectar. Puede ser útil explorar cómo está afectando a tu vida cotidiana."
      },

      {
        max: 20,
        title: "La ansiedad parece estar teniendo una presencia importante.",
        description:
          "Tus respuestas reflejan un nivel elevado de experiencias relacionadas con ansiedad. Si está interfiriendo en tu bienestar o funcionamiento cotidiano, puede ser recomendable realizar una valoración profesional."
      }
    ]
  }

};


// ==============================
// ESTADO
// ==============================

let currentQuestionnaire = null;
let currentQuestionIndex = 0;
let answers = [];


// ==============================
// ELEMENTOS
// ==============================

const questionnaireSection =
  document.querySelector(".questionnaires-section");

const testSection =
  document.querySelector("#test-section");

const resultSection =
  document.querySelector("#result-section");

const questionTitle =
  document.querySelector("#questionTitle");

const questionDescription =
  document.querySelector("#questionDescription");

const questionCategory =
  document.querySelector("#questionCategory");

const answersContainer =
  document.querySelector("#answers");

const questionCounter =
  document.querySelector("#questionCounter");

const progressBar =
  document.querySelector("#progressBar");

const progressPercentage =
  document.querySelector("#progressPercentage");

const previousButton =
  document.querySelector("#previousQuestion");

const nextButton =
  document.querySelector("#nextQuestion");

const resultTitle =
  document.querySelector("#resultTitle");

const resultScore =
  document.querySelector("#resultScore");

const resultDescription =
  document.querySelector("#resultDescription");

const restartButton =
  document.querySelector("#restartQuestionnaire");

const backToQuestionnaires =
  document.querySelector("#backToQuestionnaires");

const backToAllQuestionnaires =
  document.querySelector("#backToAllQuestionnaires");


// ==============================
// INICIAR CUESTIONARIO
// ==============================

document
  .querySelectorAll(".start-questionnaire")
  .forEach(button => {

    button.addEventListener("click", () => {

      const questionnaireId =
        button.dataset.questionnaire;

      startQuestionnaire(questionnaireId);

    });

  });


function startQuestionnaire(id) {

  if (!questionnaires[id]) {
    return;
  }

  currentQuestionnaire =
    questionnaires[id];

  currentQuestionIndex = 0;

  answers =
    new Array(currentQuestionnaire.questions.length)
      .fill(null);

  questionnaireSection.hidden = true;
  resultSection.hidden = true;
  testSection.hidden = false;

  renderQuestion();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ==============================
// MOSTRAR PREGUNTA
// ==============================

function renderQuestion() {

  const question =
    currentQuestionnaire.questions[currentQuestionIndex];

  const total =
    currentQuestionnaire.questions.length;

  const current =
    currentQuestionIndex + 1;

  const progress =
    Math.round((current / total) * 100);


  questionCategory.textContent =
    currentQuestionnaire.category;

  questionTitle.textContent =
    question.text;

  questionDescription.textContent =
    currentQuestionnaire.description;

  questionCounter.textContent =
    `Pregunta ${current} de ${total}`;

  progressPercentage.textContent =
    `${progress}%`;

  progressBar.style.width =
    `${progress}%`;


  answersContainer.innerHTML = "";


  question.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "answer-option";

    button.setAttribute(
      "role",
      "radio"
    );

    button.setAttribute(
      "aria-checked",
      "false"
    );

    button.innerHTML = `
      <span class="answer-circle"></span>
      <span class="answer-text"></span>
    `;

    button.querySelector(".answer-text")
      .textContent = option;


    if (answers[currentQuestionIndex] === index) {

      button.classList.add("selected");

      button.setAttribute(
        "aria-checked",
        "true"
      );

    }


    button.addEventListener("click", () => {

      answers[currentQuestionIndex] =
        index;

      document
        .querySelectorAll(".answer-option")
        .forEach(item => {

          item.classList.remove("selected");

          item.setAttribute(
            "aria-checked",
            "false"
          );

        });


      button.classList.add("selected");

      button.setAttribute(
        "aria-checked",
        "true"
      );

      updateNextButton();

    });


    answersContainer.appendChild(button);

  });


  previousButton.disabled =
    currentQuestionIndex === 0;

  updateNextButton();

}


// ==============================
// BOTÓN SIGUIENTE
// ==============================

function updateNextButton() {

  const hasAnswer =
    answers[currentQuestionIndex] !== null;

  nextButton.disabled =
    !hasAnswer;

  if (
    currentQuestionIndex ===
    currentQuestionnaire.questions.length - 1
  ) {

    nextButton.textContent =
      "Ver resultado →";

  } else {

    nextButton.textContent =
      "Siguiente →";

  }

}


nextButton.addEventListener("click", () => {

  if (
    answers[currentQuestionIndex] === null
  ) {
    return;
  }


  const lastQuestion =
    currentQuestionIndex ===
    currentQuestionnaire.questions.length - 1;


  if (lastQuestion) {

    showResult();

    return;

  }


  currentQuestionIndex++;

  renderQuestion();

  window.scrollTo({
    top: testSection.offsetTop,
    behavior: "smooth"
  });

});


// ==============================
// ANTERIOR
// ==============================

previousButton.addEventListener("click", () => {

  if (currentQuestionIndex <= 0) {
    return;
  }

  currentQuestionIndex--;

  renderQuestion();

  window.scrollTo({
    top: testSection.offsetTop,
    behavior: "smooth"
  });

});


// ==============================
// RESULTADO
// ==============================

function showResult() {

  const score =
    answers.reduce(
      (total, answer) =>
        total + (answer ?? 0),
      0
    ) + answers.length;


  const result =
    currentQuestionnaire.results.find(
      item => score <= item.max
    );


  if (!result) {
    return;
  }


  resultTitle.textContent =
    result.title;

  resultDescription.textContent =
    result.description;

  resultScore.textContent =
    `Puntuación orientativa: ${score}`;


  testSection.hidden = true;
  resultSection.hidden = false;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ==============================
// REPETIR
// ==============================

restartButton.addEventListener("click", () => {

  if (!currentQuestionnaire) {
    return;
  }

  startQuestionnaire(
    Object.keys(questionnaires)
      .find(
        key =>
          questionnaires[key] ===
          currentQuestionnaire
      )
  );

});


// ==============================
// VOLVER A CUESTIONARIOS
// ==============================

function showQuestionnaireList() {

  testSection.hidden = true;
  resultSection.hidden = true;
  questionnaireSection.hidden = false;

  window.scrollTo({
    top: questionnaireSection.offsetTop,
    behavior: "smooth"
  });

}


backToQuestionnaires.addEventListener(
  "click",
  showQuestionnaireList
);

backToAllQuestionnaires.addEventListener(
  "click",
  showQuestionnaireList
);


// ==============================
// AÑO
// ==============================

const year =
  document.querySelector("#year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}
