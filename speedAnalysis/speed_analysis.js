let phrases = [
  "Every morning brings a new chance to improve the day before and become a better version of yourself.",
  "Hard work beats talent when talent does not work hard and stays comfortable with mediocrity.",
  "The best ideas often come when you least expect them, during quiet moments or simple routines.",
  "A calm mind brings inner strength and self-confidence, even when the world feels chaotic outside.",
  "Practice makes progress, not perfection every time, but improvement is always within your reach.",
  "You are stronger than you believe and smarter than you think, especially when you stay consistent.",
  "Kind words can change someone's entire day or mood, creating a ripple effect of kindness around you.",
  "Creativity grows when you allow yourself to take risks and step beyond what you already know well.",
  "Discipline is choosing what you want most over what you want now, even when it's not easy to do.",
  "Focus on the process, and the results will follow soon, especially if you trust your daily efforts.",
  "Learning from failure is the key to lasting success, because each setback teaches something vital.",
  "Every expert was once a complete beginner at something, and they chose to keep learning every day.",
  "Don't wait for opportunity. Create your own path today by starting small and staying consistent.",
  "A great attitude becomes a great mood, which becomes a great day, and eventually a great life.",
  "Success is the sum of small efforts repeated every single day, even when you feel like giving up.",
  "Believe in your ability to learn, grow, and overcome challenges, no matter how big they may seem.",
  "Small steps in the right direction lead to big achievements when taken with patience and purpose.",
  "The way you start your day can shape how the rest will go, so choose your first thoughts wisely.",
  "Stay focused on your goals, not on your distractions, and remember why you started in the first place.",
  "Honest effort always brings better results in the long run, even when progress feels very slow.",
  "Confidence is built by doing what once scared you until it becomes a normal part of your routine.",
  "A curious mind is the beginning of lifelong learning and can lead to discoveries you never imagined.",
  "You grow stronger every time you step outside your comfort zone and challenge your old limits.",
  "Doing your best now prepares you for what's ahead tomorrow, even if you don't see it right away.",
  "Daily habits shape the future you are working toward, one decision and one action at a time.",
  "Energy flows where your attention consistently goes, so direct your focus toward what truly matters.",
  "Progress happens one small action at a time, every day, even if it seems invisible in the moment.",
  "The more you try, the better your results will become, so keep showing up and doing your part.",
  "Patience and persistence turn goals into accomplishments, especially when the journey is long.",
  "Your mindset can turn obstacles into opportunities if you decide to learn from every experience.",
];

let userInput;
let testText;
let startTime, endTime;
let timerInterval;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startTest() {
  testText = document.getElementById("inputText").value = "3...";
  await delay(1000);
  testText = document.getElementById("inputText").value = "2...";
  await delay(1000);
  testText = document.getElementById("inputText").value = "1...";
  await delay(1000);

  testText = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("inputText").value = testText;

  userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();

  document.getElementById("output").innerHTML = "";

  startTime = new Date().getTime();
  document.getElementById("timer").textContent = "0.00";

  timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const elapsed = (now - startTime) / 1000;
    document.getElementById("timer").textContent = elapsed.toFixed(2);
  }, 100);
}

// ~ ////////////////////////////////////////////////////////////////////////////// Listener
document
  .getElementById("userInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      endTest();
    }

    let typed = userInput.value;
    let actualPhrase = testText.substring(0, typed.length);
    let isCorrect = actualPhrase === typed;

    if (isCorrect) {
      document.getElementById("userInput").className = "user-input";
      document.getElementById("user-input-label").className = "";
    } else {
      document.getElementById("userInput").className = "user-input-error";
      document.getElementById("user-input-label").className =
        "user-input-error";
    }

    // console.log(actualPhrase);
    // console.log(typed);
  });

function endTest() {
  endTime = new Date().getTime();
  clearInterval(timerInterval); // Para o cronômetro

  var timeElapsed = (endTime - startTime) / 1000;
  var userTypedText = document.getElementById("userInput").value;
  var totalLength = userTypedText.length;
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0;

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    `<h2>Typing Test Results:</h2>` +
    `<p>Words Typed: ${typedWords}</p>` +
    `<p>Characters Typed: ${totalLength}</p>` +
    `<p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>` +
    `<p>Words per minute: ${wpm}</p>`;
}

document
  .getElementById("userInput")
  .addEventListener("keyup", function (event) {
    if (
      document.getElementById("userInput").value ===
      document.getElementById("inputText").value
    ) {
      endTest();
    }
  });
