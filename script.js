const questions = [
  { category: "외교안보", text: "대한민국이 미국, 일본, 대만과의 협력관계를 강화하는 것은 옳지 않다." },
  { category: "외교안보", text: "대한민국은 중국과의 협력관계를 강화해야 한다." },
  { category: "외교안보", text: "남북정상회담을 통해 남북이 다시 화해 국면으로 들어서야 한다." },
  { category: "외교안보", text: "대한민국이 나토(NATO)에 참여하는 것은 옳지 않다." },

  { category: "사회", text: "동성혼은 합법적이다." },
  { category: "사회", text: "대한민국의 사회복지제도는 아직 미비하다." },
  { category: "사회", text: "대한민국은 아직 남성 중심의 사회이다." },
  { category: "사회", text: "검찰청은 폐지해야 한다." },

  { category: "경제", text: "기본소득을 가능한 빨리 도입해야 한다." },
  { category: "경제", text: "부자를 증세하고 서민을 감세해야 한다." },
  { category: "경제", text: "현재 노동조합의 행태는 정상적이다." },
  { category: "경제", text: "현금지원정책을 통해 경제를 활성화시켜야 한다." },

  { category: "기타", text: "대통령이라도 헌법을 위반했다면 탄핵될 수 있어야 한다." },
  { category: "기타", text: "중국인 관광객을 적극 유치하여 경제를 활성화해야 한다." },
  { category: "기타", text: "우크라이나, 대만, 이스라엘 문제에 개입하면 안 된다." },
  { category: "기타", text: "대한민국의 선거제도는 전반적으로 신뢰할 만하다." }
];

const answers = [
  { text: "매우 그렇다", score: -5 },
  { text: "그렇다", score: -3 },
  { text: "그런 편이다", score: -1 },
  { text: "아닌 편이다", score: 1 },
  { text: "아니다", score: 3 },
  { text: "매우 아니다", score: 5 }
];

const candidateMap = {
  "강성좌파": [
    {
      name: "정청래",
      current: "더불어민주당 당대표",
      career: "제17·19·21·22대 국회의원"
    },
    {
      name: "추미애",
      current: "제37대 경기도지사",
      career: "제15·16·18·19·20·22대 국회의원, 전 법무부 장관, 전 더불어민주당 대표"
    }
  ],

  "온건좌파": [
    {
      name: "김민석",
      current: "더불어민주당계 중진 정치인",
      career: "제15·16·21·22대 국회의원"
    },
    {
      name: "송영길",
      current: "전 더불어민주당 대표",
      career: "전 인천광역시장, 5선 국회의원"
    },
    {
      name: "박찬대",
      current: "제19대 인천광역시장",
      career: "제20·21·22대 국회의원, 전 더불어민주당 원내대표"
    }
  ],

  "중도좌파": [
    {
      name: "강훈식",
      current: "더불어민주당 국회의원",
      career: "제20·21·22대 국회의원"
    },
    {
      name: "한준호",
      current: "더불어민주당 국회의원",
      career: "MBC 아나운서 출신, 제21·22대 국회의원"
    },
    {
      name: "전재수",
      current: "제39대 부산광역시장",
      career: "제20·21·22대 국회의원"
    }
  ],

  "중도": [
    {
      name: "유승민",
      current: "개혁보수·중도 성향 정치인",
      career: "경제학자 출신, 제17·18·19·20대 국회의원, 전 바른정당 대선 후보"
    }
  ],

  "중도우파": [
    {
      name: "한동훈",
      current: "제22대 국회의원",
      career: "전 법무부 장관, 전 국민의힘 대표"
    },
    {
      name: "이준석",
      current: "개혁신당 대표",
      career: "전 국민의힘 대표, 제22대 국회의원"
    },
    {
      name: "오세훈",
      current: "제39대 서울특별시장",
      career: "제33·38대 서울특별시장, 전 국회의원"
    }
  ],

  "온건우파": [
    {
      name: "나경원",
      current: "국민의힘 국회의원",
      career: "판사 출신, 제17·18·19·20·22대 국회의원, 전 자유한국당 원내대표"
    },
    {
      name: "안철수",
      current: "국민의힘 국회의원",
      career: "의사·기업인 출신, 안랩 창업자, 제19·20·21·22대 국회의원"
    },
    {
      name: "원희룡",
      current: "보수권 정치인",
      career: "전 제주특별자치도지사, 전 국토교통부 장관, 전 국회의원"
    }
  ],

  "강성우파": [
    {
      name: "장동혁",
      current: "국민의힘 당대표",
      career: "판사 출신, 제21·22대 국회의원"
    },
    {
      name: "황교안",
      current: "보수권 정치인",
      career: "전 법무부 장관, 전 국무총리, 전 대통령 권한대행, 전 미래통합당 대표"
    }
  ]
};

const resultDescriptions = {
  "강성좌파": "사회적 평등과 복지 확대를 가장 중요하게 생각하는 성향입니다.",
  "온건좌파": "복지와 개혁을 중시하지만 현실적인 정책 집행도 고려하는 성향입니다.",
  "중도좌파": "개혁을 선호하지만 극단적인 정책에는 신중한 성향입니다.",
  "중도": "이념보다 실용성과 현실적인 정책 효과를 중요하게 생각합니다.",
  "중도우파": "시장경제와 안보를 중요하게 여기지만 유연성도 갖춘 성향입니다.",
  "온건우파": "자유시장경제와 법치주의를 중요하게 생각하는 보수 성향입니다.",
  "강성우파": "강한 안보와 자유시장경제, 전통적 가치를 매우 중요하게 생각하는 성향입니다."
};

let currentQuestionIndex = 0;
let totalScore = 0;
let resultType = "";

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const candidateScreen = document.getElementById("candidate-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const candidateBtn = document.getElementById("candidate-btn");
const backResultBtn = document.getElementById("back-result-btn");
const shareBtn = document.getElementById("share-btn");
const shareResultBtn = document.getElementById("share-result-btn");

const progressText = document.getElementById("progress-text");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");

const candidateList = document.getElementById("candidate-list");
const candidateSubtitle = document.getElementById("candidate-subtitle");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);
candidateBtn.addEventListener("click", showCandidates);
backResultBtn.addEventListener("click", backToResult);
shareBtn.addEventListener("click", sharePage);
shareResultBtn.addEventListener("click", shareResult);

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];

  progressText.textContent =
    `${question.category} | ${currentQuestionIndex + 1} / ${questions.length}`;

  questionText.textContent = question.text;

  answerButtons.innerHTML = "";

  answers.forEach(answer => {
    const button = document.createElement("button");

    button.textContent = answer.text;

    button.addEventListener("click", () => {
      selectAnswer(answer.score);
    });

    answerButtons.appendChild(button);
  });
}

function selectAnswer(score) {
  totalScore += score;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {

  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  if (totalScore <= -61) {
    resultType = "강성좌파";
  } else if (totalScore <= -31) {
    resultType = "온건좌파";
  } else if (totalScore <= -11) {
    resultType = "중도좌파";
  } else if (totalScore <= 10) {
    resultType = "중도";
  } else if (totalScore <= 30) {
    resultType = "중도우파";
  } else if (totalScore <= 60) {
    resultType = "온건우파";
  } else {
    resultType = "강성우파";
  }

  resultTitle.innerHTML =
    `${resultType}<br><small>${resultDescriptions[resultType]}</small>`;

  resultScore.textContent =
    `총점 : ${totalScore}점`;
}

function showCandidates() {

  resultScreen.classList.remove("active");
  candidateScreen.classList.add("active");

  candidateSubtitle.textContent =
    `${resultType} 성향과 가까운 차기 대통령 주자들입니다.`;

  candidateList.innerHTML = "";

  candidateMap[resultType].forEach(candidate => {

    const card = document.createElement("div");

    card.className = "candidate-card";

    card.innerHTML = `
      <h2>${candidate.name}</h2>

      <p class="current-position">
        현재 직책 : ${candidate.current}
      </p>

      <p>
        주요 경력 : ${candidate.career}
      </p>
    `;

    candidateList.appendChild(card);
  });
}

function backToResult() {
  candidateScreen.classList.remove("active");
  resultScreen.classList.add("active");
}

function restartQuiz() {

  currentQuestionIndex = 0;
  totalScore = 0;
  resultType = "";

  resultScreen.classList.remove("active");
  candidateScreen.classList.remove("active");

  startScreen.classList.add("active");
}

function sharePage() {

  const shareText =
    "고1이 만든 2026 대한민국 정치성향테스트!";

  if (navigator.share) {

    navigator.share({
      title: "2026 대한민국 정치성향테스트",
      text: shareText,
      url: window.location.href
    });

  } else {

    copyToClipboard(
      `${shareText}\n${window.location.href}`
    );
  }
}

function shareResult() {

  const shareText =
    `나는 2026 대한민국 정치성향테스트에서 "${resultType}" 성향이 나왔어!`;

  if (navigator.share) {

    navigator.share({
      title: "2026 대한민국 정치성향테스트 결과",
      text: shareText,
      url: window.location.href
    });

  } else {

    copyToClipboard(
      `${shareText}\n${window.location.href}`
    );
  }
}

function copyToClipboard(text) {

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("공유 링크가 복사되었습니다.");
    })
    .catch(() => {
      alert("복사에 실패했습니다.");
    });
}