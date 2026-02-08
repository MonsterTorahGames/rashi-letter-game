const GEMARA_VOCAB = [
    { aramaic: 'אמר', english: 'Said' },
    { aramaic: 'אביי', english: 'Abaye' },
    { aramaic: 'הני', english: 'These' },
    { aramaic: 'תנאי', english: 'Sages' },
    { aramaic: 'רבי', english: 'Rabbi' },
    { aramaic: 'דבר', english: 'Thing/Word' },
    { aramaic: 'אחד', english: 'One' },
    { aramaic: 'הא', english: 'This' },
    { aramaic: 'מאי', english: 'What' },
    { aramaic: 'היא', english: 'Is/She' },
    { aramaic: 'נכי', english: 'Minus/Less' },
    { aramaic: 'חיה', english: 'Midwife' },
    { aramaic: 'מזונות', english: 'Food' },
    { aramaic: 'מאן', english: 'The one who' },
    { aramaic: 'כל שכן', english: 'All the more so' },
    { aramaic: 'אבל', english: 'But' },
    { aramaic: 'לא', english: 'No/Not' },
    { aramaic: 'אתתא', english: 'Woman/Wife' },
    { aramaic: 'דידי', english: 'Mine' },
    { aramaic: 'פקיחא', english: 'Smart/Sharp' },
    { aramaic: 'ולא מבעיא', english: 'Needless to say' },
    { aramaic: 'רב', english: 'Rav' },
    { aramaic: 'בריה', english: 'His son' },
    { aramaic: 'עובדא', english: 'Act/Case' },
    { aramaic: 'כוותיה', english: 'Like him' },
    { aramaic: 'בששים', english: 'In sixty' },
    { aramaic: 'לישנא', english: 'Language' },
    { aramaic: 'אחרינא', english: 'Other' },
    { aramaic: 'דקלא', english: 'Palm tree' },
    { aramaic: 'ארעא', english: 'Land' },
    { aramaic: 'והלכתא', english: 'And the law' },
    { aramaic: 'ארמאה', english: 'Aramean Palm' },
    { aramaic: 'ריש גלותא', english: 'Head of Exile' },
    { aramaic: 'פרסאה', english: 'Persian' },
    { aramaic: 'זעירא', english: 'Small/Zeira' },
    { aramaic: 'הוה', english: 'Was' },
    { aramaic: 'סיים', english: 'Wearing' },
    { aramaic: 'מסאני', english: 'Shoes' },
    { aramaic: 'אוכמי', english: 'Black' },
    { aramaic: 'בשוקא', english: 'In the market' },
    { aramaic: 'אשכחוה', english: 'They found him' },
    { aramaic: 'מאי שנא', english: 'What is diff?' },
    { aramaic: 'מאבילנא', english: 'I am mourning' },
    { aramaic: 'אירושלים', english: 'Over Jerusalem' },
    { aramaic: 'את', english: 'You' },
    { aramaic: 'חשיבת', english: 'Important' },
    { aramaic: 'יוהרא', english: 'Arrogance' },
    { aramaic: 'וחבשוה', english: 'Imprisoned him' },
    { aramaic: 'גברא', english: 'Man' },
    { aramaic: 'רבה', english: 'Great' },
    { aramaic: 'אנא', english: 'I' },
    { aramaic: 'מנא', english: 'From where' },
    { aramaic: 'ידעינן', english: 'Do we know' },
    { aramaic: 'בעו', english: 'Ask' },
    { aramaic: 'מילתא', english: 'Word/Question' },
    { aramaic: 'מינייכו', english: 'From you' },
    { aramaic: 'האי', english: 'This' },
    { aramaic: 'קץ', english: 'Cut down' },
    { aramaic: 'כופרא', english: 'Young palm' },
    { aramaic: 'משלם', english: 'Pays' },
    { aramaic: 'דמי', english: 'Value of' },
    { aramaic: 'תמרי', english: 'Dates' },
    { aramaic: 'שקל', english: 'Took' },
    { aramaic: 'מיניה', english: 'From him' },
    { aramaic: 'אימא', english: 'Say' },
    { aramaic: 'לן', english: 'To us' },
    { aramaic: 'שמואל', english: 'Samuel' },
    { aramaic: 'חי', english: 'Alive' },
    { aramaic: 'קיים', english: 'Existing' },
    { aramaic: 'שדרו', english: 'They sent' },
    { aramaic: 'קמיה', english: 'Before him' },
    { aramaic: 'שפיר', english: 'Well' },
    { aramaic: 'קאמר', english: 'He says' },
    { aramaic: 'ושבקוהו', english: 'Leave him' },
    { aramaic: 'פירות', english: 'Fruits' },
    { aramaic: 'גמורים', english: 'Complete/Ripe' },
    { aramaic: 'טעמא', english: 'Reason' },
    { aramaic: 'רחמנא', english: 'The Merciful' },
    { aramaic: 'ובער', english: 'And consumed' },
    { aramaic: 'בשדה', english: 'In the field' },
    { aramaic: 'אחר', english: 'Another' },
    { aramaic: 'מלמד', english: 'Teaches' },
    { aramaic: 'ששמין', english: 'We appraise' },
    { aramaic: 'על גב', english: 'On the back' },
    { aramaic: 'השדה', english: 'The field' },
    { aramaic: 'מילי', english: 'Words/Matters' },
    { aramaic: 'מידי', english: 'Something' },
    { aramaic: 'דצריך', english: 'That needs' },
    { aramaic: 'כיון', english: 'Since' },
    { aramaic: 'דלא', english: 'That not' },
    { aramaic: 'צריכי', english: 'Need' },
    { aramaic: 'בעינייהו', english: 'As they are' },
    { aramaic: 'בעי', english: 'Need/Want' },
    { aramaic: 'שלומי', english: 'To pay' },
    { aramaic: 'בר', english: 'Son of' },
    { aramaic: 'דן', english: 'Judged' },
    { aramaic: 'כרבי', english: 'Like Rabbi' },
    { aramaic: 'מאיר', english: 'Meir' },
    { aramaic: 'ופסק', english: 'Ruled' },
    { aramaic: 'כתב', english: 'Wrote' },
    { aramaic: 'לראשון', english: 'To the first' },
    { aramaic: 'ולא', english: 'And not' },
    { aramaic: 'חתמה', english: 'Signed' },
    { aramaic: 'לו', english: 'To him' },
    { aramaic: 'לשני', english: 'To the second' },
    { aramaic: 'אבדה', english: 'Lost' },
    { aramaic: 'כתובתה', english: 'Her Ketubah' },
    { aramaic: 'דברי', english: 'Words of' },
    { aramaic: 'יכולה', english: 'Able' },
    { aramaic: 'שתאמר', english: 'To say' },
    { aramaic: 'נחת רוח', english: 'Compliance' },
    { aramaic: 'עשיתי', english: 'I did' },
    { aramaic: 'לבעלי', english: 'To my husband' },
    { aramaic: 'אתם', english: 'You (Pl) ' },
    { aramaic: 'מה', english: 'What' },
    { aramaic: 'לכם', english: 'To you' },
    { aramaic: 'עלי', english: 'On me' },
    { aramaic: 'כי', english: 'Like/Because' },
    { aramaic: 'דהא', english: 'For this' },
    { aramaic: 'דתנן', english: 'As we learned' },
    { aramaic: 'אם', english: 'If' },
    { aramaic: 'סאה', english: 'Se\'ah' },
    { aramaic: 'סאתים', english: 'Two Se\'ahs' }
];

let score = 0;
let highScore = localStorage.getItem('gemaraHighScore') || 0;
let streak = 0;
let answerHistory = []; // Tracks last 10 answers (true=correct, false=incorrect)
let timer = 25;
let timerInterval;
let currentTarget = null;
let options = [];

const targetElement = document.getElementById('target-letter');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const streakElement = document.getElementById('streak');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback');
const resetBtn = document.getElementById('reset-btn');

function initGame() {
    highScoreElement.textContent = highScore;
    nextRound();
}

function startTimer() {
    clearInterval(timerInterval);
    timer = 25;
    timerElement.textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    feedbackElement.textContent = 'Time\'s up! 😈';
    feedbackElement.style.color = 'var(--error-color)';
    feedbackElement.classList.remove('hidden');

    // Treat as wrong answer
    updateStreak(false);

    setTimeout(nextRound, 1500);
}

function updateStreak(isCorrect) {
    answerHistory.push(isCorrect);
    if (answerHistory.length > 10) {
        answerHistory.shift();
    }

    // "Forgiving Streak": Lost if 3 or more wrong in last 10
    const wrongAnswers = answerHistory.filter(x => !x).length;

    if (wrongAnswers >= 3) {
        streak = 0;
        // Optionally clear history or keep it? 
        // "Streak gets lost" implies reset. Let's clear history to avoid immediate re-trigger?
        // But the user said "if user gets 3 in 10 wrong".
        // A clean reset makes sense.
        answerHistory = [];
        feedbackElement.textContent += ' Streak Lost! 😈';
    } else if (isCorrect) {
        streak++;
    }
    // If incorrect, streak just stays same (doesn't increment), unless it hit the lost condition.

    streakElement.textContent = streak;
}

function nextRound() {
    clearInterval(timerInterval);

    // Select a random target word
    const randomIndex = Math.floor(Math.random() * GEMARA_VOCAB.length);
    currentTarget = GEMARA_VOCAB[randomIndex];

    // Display word in Rashi font (using the class)
    targetElement.textContent = currentTarget.aramaic;
    targetElement.classList.remove('bounce');
    void targetElement.offsetWidth; // Trigger reflow
    targetElement.classList.add('bounce');

    // Generate options (target + 5 random others)
    options = [currentTarget];
    while (options.length < 6) {
        const randomOption = GEMARA_VOCAB[Math.floor(Math.random() * GEMARA_VOCAB.length)];
        // Ensure distinct English translations for options
        if (!options.find(o => o.english === randomOption.english)) {
            options.push(randomOption);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    renderOptions();
    feedbackElement.classList.add('hidden');
    startTimer();
}

function renderOptions() {
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        // Display English translation on buttons
        button.textContent = option.english;
        button.addEventListener('click', () => handleChoice(option, button));
        optionsContainer.appendChild(button);
    });
}

function handleChoice(choice, button) {
    clearInterval(timerInterval);

    if (choice.english === currentTarget.english) {
        // Correct
        score++;
        scoreElement.textContent = score;
        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem('gemaraHighScore', highScore);
        }

        button.classList.add('correct');
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'var(--success-color)';
        feedbackElement.classList.remove('hidden');

        updateStreak(true);

        // Wait a bit before next round
        setTimeout(nextRound, 1000);
    } else {
        // Incorrect
        button.classList.add('incorrect');
        feedbackElement.textContent = 'Try again! 😈';
        feedbackElement.style.color = 'var(--error-color)';
        feedbackElement.classList.remove('hidden');

        updateStreak(false);

        // No auto-advance on wrong answer usually? 
        // User asked "every time that user gets one wrong...". 
        // If I don't advance, they can guess again. 
        // But for streak tracking, allowing multiple guesses per round breaks logic (could spam correct after wrong).
        // Let's advance on wrong too? Or let them try but record the error once.
        // No auto-advance on wrong answer
        // setTimeout(nextRound, 1500);
    }
}

resetBtn.addEventListener('click', () => {
    score = 0;
    streak = 0;
    answerHistory = [];
    scoreElement.textContent = score;
    streakElement.textContent = streak;
    nextRound();
});

initGame();
