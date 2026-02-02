const HEBREW_ALPHABET = [
    { hebrew: 'א', rashi: 'א' },
    { hebrew: 'ב', rashi: 'ב' },
    { hebrew: 'ג', rashi: 'ג' },
    { hebrew: 'ד', rashi: 'ד' },
    { hebrew: 'ה', rashi: 'ה' },
    { hebrew: 'ו', rashi: 'ו' },
    { hebrew: 'ז', rashi: 'ז' },
    { hebrew: 'ח', rashi: 'ח' },
    { hebrew: 'ט', rashi: 'ט' },
    { hebrew: 'י', rashi: 'י' },
    { hebrew: 'כ', rashi: 'כ' },
    { hebrew: 'ך', rashi: 'ך' },
    { hebrew: 'ל', rashi: 'ל' },
    { hebrew: 'מ', rashi: 'מ' },
    { hebrew: 'ם', rashi: 'ם' },
    { hebrew: 'נ', rashi: 'נ' },
    { hebrew: 'ן', rashi: 'ן' },
    { hebrew: 'ס', rashi: 'ס' },
    { hebrew: 'ע', rashi: 'ע' },
    { hebrew: 'פ', rashi: 'פ' },
    { hebrew: 'ף', rashi: 'ף' },
    { hebrew: 'צ', rashi: 'צ' },
    { hebrew: 'ץ', rashi: 'ץ' },
    { hebrew: 'ק', rashi: 'ק' },
    { hebrew: 'ר', rashi: 'ר' },
    { hebrew: 'ש', rashi: 'ש' },
    { hebrew: 'ת', rashi: 'ת' }
];

const IMAGE_MAPPING = {
    'א': { title: 'Orangutan', img: 'assets/aleph.png' },
    'ב': { title: 'Bear', img: 'assets/bet.png' },
    'ג': { title: 'Giraffe', img: 'assets/gimel.png' },
    'ד': { title: 'Dinosaur', img: 'assets/dalet.png' },
    'ה': { title: 'Horse', img: 'assets/he.png' },
    'ו': { title: 'Violin', img: 'assets/vav.png' }
};

let score = 0;
let highScore = localStorage.getItem('rashiHighScore') || 0;
let currentTarget = null;
let options = [];

const targetElement = document.getElementById('target-letter');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const feedbackElement = document.getElementById('feedback');
const resetBtn = document.getElementById('reset-btn');

// Modal Elements
const successModal = document.getElementById('success-modal');
const comicImage = document.getElementById('comic-image');
const comicText = document.getElementById('comic-text');
const nextBtn = document.getElementById('next-btn');

function initGame() {
    highScoreElement.textContent = highScore;
    nextRound();
}

function nextRound() {
    successModal.classList.add('hidden');

    // Select a random target letter
    const randomIndex = Math.floor(Math.random() * HEBREW_ALPHABET.length);
    currentTarget = HEBREW_ALPHABET[randomIndex];

    targetElement.textContent = currentTarget.rashi;
    targetElement.classList.remove('bounce');
    void targetElement.offsetWidth; // Trigger reflow
    targetElement.classList.add('bounce');

    // Generate options (target + 5 random others)
    options = [currentTarget];
    while (options.length < 6) {
        const randomOption = HEBREW_ALPHABET[Math.floor(Math.random() * HEBREW_ALPHABET.length)];
        if (!options.find(o => o.hebrew === randomOption.hebrew)) {
            options.push(randomOption);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    renderOptions();
    feedbackElement.classList.add('hidden');
}

function renderOptions() {
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.hebrew;
        button.addEventListener('click', () => handleChoice(option, button));
        optionsContainer.appendChild(button);
    });
}

function handleChoice(choice, button) {
    if (choice.hebrew === currentTarget.hebrew) {
        // Correct
        score++;
        scoreElement.textContent = score;
        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem('rashiHighScore', highScore);
        }

        button.classList.add('correct');
        feedbackElement.textContent = 'Well done! That is correct!';
        feedbackElement.style.color = 'var(--success-color)';
        feedbackElement.classList.remove('hidden');

        // Check if we have an image for this letter
        const mapping = IMAGE_MAPPING[currentTarget.rashi];
        if (mapping) {
            setTimeout(() => {
                showSuccessModal(mapping);
            }, 600);
        } else {
            // Wait a bit before next round if no image
            setTimeout(nextRound, 1000);
        }
    } else {
        // Incorrect
        button.classList.add('incorrect');
        feedbackElement.textContent = 'Oops, try again!';
        feedbackElement.style.color = 'var(--error-color)';
        feedbackElement.classList.remove('hidden');
    }
}

function showSuccessModal(mapping) {
    comicImage.src = mapping.img;
    comicText.textContent = mapping.title;
    successModal.classList.remove('hidden');
}

nextBtn.addEventListener('click', nextRound);

resetBtn.addEventListener('click', () => {
    score = 0;
    scoreElement.textContent = score;
    nextRound();
});

initGame();
