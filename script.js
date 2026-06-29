/* =============================================
   LATIHAN MATEMATIK TAHUN 4 – PECAHAN
   script.js  |  Pure JavaScript, no framework
   ============================================= */

/* ===========================================
   BANK SOALAN
   Setiap soalan: { q, options: [A,B,C,D], answer }
   answer = teks tepat seperti dalam options
   =========================================== */
const SOALAN = {

  /* ---------- TAHAP 1: PECAHAN ASAS ---------- */
  1: [
    { q: "Apakah pecahan bagi 1 bahagian daripada 4 bahagian yang sama?", options: ["1/2", "1/3", "1/4", "1/5"], answer: "1/4" },
    { q: "Apakah pecahan bagi 2 bahagian daripada 5 bahagian yang sama?", options: ["2/3", "2/5", "3/5", "1/5"], answer: "2/5" },
    { q: "Apakah pecahan bagi 3 bahagian daripada 8 bahagian yang sama?", options: ["3/4", "3/6", "3/8", "5/8"], answer: "3/8" },
    { q: "Mana yang LEBIH BESAR: 1/2 atau 1/4?", options: ["1/4", "1/2", "Sama besar", "Tidak boleh dibandingkan"], answer: "1/2" },
    { q: "Mana yang LEBIH KECIL: 2/3 atau 1/3?", options: ["2/3", "1/3", "Sama besar", "Tiada jawapan"], answer: "1/3" },
    { q: "Susun dari TERKECIL ke TERBESAR: 1/4, 1/2, 1/3", options: ["1/4, 1/3, 1/2", "1/2, 1/3, 1/4", "1/3, 1/4, 1/2", "1/4, 1/2, 1/3"], answer: "1/4, 1/3, 1/2" },
    { q: "Pizza dibahagi kepada 6 bahagian sama besar. Amin makan 2 bahagian. Berapa pecahan pizza yang Amin makan?", options: ["1/6", "2/6", "4/6", "3/6"], answer: "2/6" },
    { q: "Pecahan manakah yang SETARA dengan 2/4?", options: ["1/4", "1/2", "3/4", "2/3"], answer: "1/2" },
    { q: "Pada garis nombor, pecahan manakah yang paling hampir dengan 1?", options: ["1/4", "1/2", "1/8", "3/4"], answer: "3/4" },
    { q: "Satu kek dibahagi kepada 8 bahagian sama besar. Berapa pecahan bagi SETIAP satu bahagian?", options: ["1/4", "1/6", "1/8", "1/10"], answer: "1/8" },
    { q: "Mana yang LEBIH BESAR: 3/5 atau 2/5?", options: ["2/5", "3/5", "Sama besar", "Tidak boleh dibandingkan"], answer: "3/5" },
    { q: "Apakah bentuk RINGKAS bagi 4/8?", options: ["2/4", "1/4", "1/2", "3/4"], answer: "1/2" },
  ],

  /* ---------- TAHAP 2: TAMBAH PECAHAN ---------- */
  2: [
    { q: "1/4 + 1/4 = ?", options: ["1/8", "2/4", "2/8", "1/2"], answer: "2/4" },
    { q: "2/6 + 1/6 = ?", options: ["3/6", "3/12", "2/6", "4/6"], answer: "3/6" },
    { q: "1/5 + 3/5 = ?", options: ["4/10", "4/5", "3/5", "5/5"], answer: "4/5" },
    { q: "2/8 + 3/8 = ?", options: ["5/16", "5/8", "4/8", "6/8"], answer: "5/8" },
    { q: "1/3 + 1/3 = ?", options: ["1/6", "2/6", "2/3", "3/3"], answer: "2/3" },
    { q: "3/10 + 4/10 = ?", options: ["7/10", "7/20", "8/10", "6/10"], answer: "7/10" },
    { q: "1/6 + 2/6 = ?", options: ["3/12", "2/6", "3/6", "4/6"], answer: "3/6" },
    { q: "4/9 + 3/9 = ?", options: ["7/18", "6/9", "8/9", "7/9"], answer: "7/9" },
    { q: "1/7 + 4/7 = ?", options: ["5/14", "4/7", "5/7", "6/7"], answer: "5/7" },
    { q: "2/5 + 2/5 = ?", options: ["4/10", "4/5", "3/5", "2/5"], answer: "4/5" },
    { q: "1/8 + 5/8 = ?", options: ["6/16", "5/8", "6/8", "7/8"], answer: "6/8" },
    { q: "3/7 + 2/7 = ?", options: ["5/14", "5/7", "4/7", "6/7"], answer: "5/7" },
  ],

  /* ---------- TAHAP 3: TOLAK PECAHAN ---------- */
  3: [
    { q: "3/4 - 1/4 = ?", options: ["2/4", "2/8", "1/4", "4/4"], answer: "2/4" },
    { q: "5/6 - 2/6 = ?", options: ["3/12", "2/6", "4/6", "3/6"], answer: "3/6" },
    { q: "4/5 - 1/5 = ?", options: ["3/10", "3/5", "2/5", "5/5"], answer: "3/5" },
    { q: "7/8 - 3/8 = ?", options: ["4/16", "4/8", "3/8", "5/8"], answer: "4/8" },
    { q: "5/9 - 2/9 = ?", options: ["3/18", "2/9", "4/9", "3/9"], answer: "3/9" },
    { q: "6/7 - 1/7 = ?", options: ["5/14", "4/7", "6/7", "5/7"], answer: "5/7" },
    { q: "8/10 - 3/10 = ?", options: ["5/20", "6/10", "4/10", "5/10"], answer: "5/10" },
    { q: "4/6 - 2/6 = ?", options: ["1/6", "3/6", "2/6", "4/6"], answer: "2/6" },
    { q: "9/10 - 4/10 = ?", options: ["5/10", "6/10", "4/10", "3/10"], answer: "5/10" },
    { q: "7/9 - 3/9 = ?", options: ["4/18", "3/9", "5/9", "4/9"], answer: "4/9" },
    { q: "5/8 - 2/8 = ?", options: ["3/16", "2/8", "4/8", "3/8"], answer: "3/8" },
    { q: "6/10 - 1/10 = ?", options: ["5/20", "4/10", "6/10", "5/10"], answer: "5/10" },
  ],

  /* ---------- TAHAP 4: PECAHAN + NOMBOR BULAT ---------- */
  4: [
    { q: "1 + 1/2 = ?", options: ["1/2", "2/2", "1 1/2", "2 1/2"], answer: "1 1/2" },
    { q: "2 + 3/4 = ?", options: ["2 1/4", "2 3/4", "3 3/4", "2 2/4"], answer: "2 3/4" },
    { q: "3 + 1/3 = ?", options: ["3 1/2", "4 1/3", "3 1/3", "3 2/3"], answer: "3 1/3" },
    { q: "1 + 2/5 = ?", options: ["2 2/5", "1 3/5", "1 1/5", "1 2/5"], answer: "1 2/5" },
    { q: "4 + 1/4 = ?", options: ["4 3/4", "4 1/4", "5 1/4", "4 2/4"], answer: "4 1/4" },
    { q: "2 + 1/6 = ?", options: ["2 2/6", "2 1/6", "3 1/6", "1 1/6"], answer: "2 1/6" },
    { q: "5 + 2/3 = ?", options: ["5 1/3", "6 2/3", "5 2/3", "4 2/3"], answer: "5 2/3" },
    { q: "1 + 3/8 = ?", options: ["1 5/8", "2 3/8", "1 3/8", "1 2/8"], answer: "1 3/8" },
    { q: "3 + 3/5 = ?", options: ["3 2/5", "4 3/5", "3 3/5", "2 3/5"], answer: "3 3/5" },
    { q: "2 + 5/8 = ?", options: ["3 5/8", "2 3/8", "2 5/8", "1 5/8"], answer: "2 5/8" },
    { q: "6 + 1/2 = ?", options: ["6 1/4", "7 1/2", "6 1/2", "5 1/2"], answer: "6 1/2" },
    { q: "4 + 2/6 = ?", options: ["4 1/6", "4 4/6", "5 2/6", "4 2/6"], answer: "4 2/6" },
  ],

  /* ---------- TAHAP 5: MASALAH AYAT ---------- */
  5: [
    { q: "Ali makan 1/4 pizza. Berapa bahagian pizza yang TINGGAL?", options: ["1/4", "2/4", "3/4", "4/4"], answer: "3/4" },
    { q: "Siti ada 3/4 gelas air. Dia minum 1/4 gelas. Berapa gelas air yang tinggal?", options: ["1/4", "2/4", "3/4", "4/4"], answer: "2/4" },
    { q: "Seorang guru mewarna 2/6 lukisan pada pagi dan 1/6 lukisan pada petang. Berapa bahagian lukisan yang telah diwarna?", options: ["1/6", "2/6", "3/6", "4/6"], answer: "3/6" },
    { q: "Kain riben sepanjang 5/8 meter. Tini gunting 2/8 meter. Berapa meter riben yang tinggal?", options: ["2/8", "3/8", "4/8", "6/8"], answer: "3/8" },
    { q: "Amin baca 1/5 buku pada hari Isnin dan 2/5 buku pada hari Selasa. Berapa bahagian buku yang Amin sudah baca?", options: ["2/5", "3/5", "4/5", "1/5"], answer: "3/5" },
    { q: "Sebuah bekas air penuh. Kak Ros tuang 3/8 bahagian air ke dalam jag. Berapa bahagian air yang tinggal dalam bekas?", options: ["3/8", "4/8", "5/8", "6/8"], answer: "5/8" },
    { q: "Sara ada 2 biji epal dan 1/2 lagi. Berapa biji epal Sara ada semuanya?", options: ["2 biji", "2 1/4 biji", "2 1/2 biji", "3 biji"], answer: "2 1/2 biji" },
    { q: "Adik minum 2/6 cawan susu waktu pagi dan 3/6 cawan susu waktu malam. Berapa cawan susu yang diminum adik hari itu?", options: ["4/6", "5/6", "6/6", "3/6"], answer: "5/6" },
    { q: "Ayah membeli 3/4 kg gula. Ibu guna 1/4 kg untuk masak. Berapa kg gula yang tinggal?", options: ["1/4 kg", "2/4 kg", "3/4 kg", "4/4 kg"], answer: "2/4 kg" },
    { q: "Kelas 4 Bestari mengumpul 1/3 botol air pada hari Isnin dan 1/3 botol air pada hari Rabu. Berapa botol air yang terkumpul?", options: ["1/3", "2/6", "2/3", "3/3"], answer: "2/3" },
    { q: "Seekor siput bergerak 2/9 meter pada waktu pagi dan 4/9 meter pada waktu petang. Berapa meter jarak keseluruhan yang ditempuh siput itu?", options: ["5/9", "6/9", "7/9", "8/9"], answer: "6/9" },
    { q: "Ibu beli kain 4/5 meter untuk baju Ayu dan 3/5 meter untuk baju Mimi. Berapa meter kain yang dibeli ibu?", options: ["6/5", "7/5", "7/10", "5/5"], answer: "7/5" },
  ],
};

/* Number of questions per quiz */
const SOALAN_PER_QUIZ = 10;
const PASS_MARK = 0.8; // 80%
const TOTAL_LEVELS = 5;

/* =========================================
   STATE
   ========================================= */
let currentLevel   = 1;
let questions      = [];   // shuffled subset of 10
let currentIndex   = 0;
let score          = 0;
let answered       = false;
let answers        = [];   // {q, correct, chosen, isRight}

/* =========================================
   UTILITIES
   ========================================= */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* Render simple fraction like "1/2" as styled HTML */
function renderFrac(text) {
  return text.replace(/(\d+)\/(\d+)/g, (_, n, d) =>
    `<span class="frac"><span class="num">${n}</span><span class="den">${d}</span></span>`
  );
}

/* =========================================
   START / SETUP QUIZ
   ========================================= */
function startQuiz(level) {
  currentLevel = level;
  score        = 0;
  currentIndex = 0;
  answered     = false;
  answers      = [];

  // Shuffle pool and pick SOALAN_PER_QUIZ
  const pool = shuffle(SOALAN[level]);
  questions  = pool.slice(0, SOALAN_PER_QUIZ);

  // UI reset
  document.getElementById('quiz-level-tag').textContent = `Tahap ${level}`;
  document.getElementById('q-total').textContent = SOALAN_PER_QUIZ;
  document.getElementById('q-score-live').textContent = '✅ 0 betul';
  document.getElementById('progress-fill').style.width = '0%';

  showScreen('screen-quiz');
  renderQuestion();
}

/* =========================================
   RENDER QUESTION
   ========================================= */
function renderQuestion() {
  answered = false;
  const q  = questions[currentIndex];

  // Animate card
  const card = document.getElementById('quiz-card');
  card.style.animation = 'none';
  void card.offsetWidth; // reflow
  card.style.animation = '';

  // Update counters
  const num = currentIndex + 1;
  document.getElementById('q-current').textContent = num;
  document.getElementById('question-num').textContent = `Soalan ${num}`;
  document.getElementById('question-text').innerHTML = renderFrac(q.q);

  // Progress bar
  document.getElementById('progress-fill').style.width =
    `${(currentIndex / SOALAN_PER_QUIZ) * 100}%`;

  // Shuffle options
  const opts = shuffle(q.options);
  const labels = ['A', 'B', 'C', 'D'];
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';

  opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.value = opt;
    btn.innerHTML = `<span class="opt-label">${labels[i]}</span><span>${renderFrac(opt)}</span>`;
    btn.addEventListener('click', () => selectAnswer(opt, btn, q.answer, q.q));
    grid.appendChild(btn);
  });

  // Disable "next" until answered
  const nextBtn = document.getElementById('btn-next');
  nextBtn.disabled = true;
  nextBtn.textContent = currentIndex === SOALAN_PER_QUIZ - 1 ? 'Lihat Keputusan 🏁' : 'Seterusnya ➜';
}

/* =========================================
   SELECT ANSWER
   ========================================= */
function selectAnswer(chosen, btn, correct, qText) {
  if (answered) return;
  answered = true;

  const isRight = chosen === correct;
  if (isRight) score++;

  // Record for review
  answers.push({ q: qText, correct, chosen, isRight });

  // Style all buttons
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.value === correct) {
      b.classList.add('correct');
    }
  });

  if (!isRight) {
    btn.classList.add('wrong');
    btn.classList.add('shake');
    btn.addEventListener('animationend', () => btn.classList.remove('shake'), { once: true });
    playTone('wrong');
  } else {
    playTone('correct');
  }

  // Update live score
  document.getElementById('q-score-live').textContent = `✅ ${score} betul`;

  document.getElementById('btn-next').disabled = false;
}

/* =========================================
   NEXT QUESTION / SHOW RESULTS
   ========================================= */
function nextQuestion() {
  if (!answered) return; // safety

  currentIndex++;
  if (currentIndex < SOALAN_PER_QUIZ) {
    renderQuestion();
  } else {
    showResults();
  }
}

/* =========================================
   RESULTS SCREEN
   ========================================= */
function showResults() {
  const pct   = score / SOALAN_PER_QUIZ;
  const lulus = pct >= PASS_MARK;
  const stars = pct === 1 ? '⭐⭐⭐' : pct >= 0.8 ? '⭐⭐' : pct >= 0.5 ? '⭐' : '';

  document.getElementById('result-icon').textContent  = lulus ? '🎉' : '😊';
  document.getElementById('result-title').textContent = lulus ? 'Tahniah! Anda Lulus! 🎉' : 'Cuba Lagi! 💪';
  document.getElementById('result-score').textContent = `${score} / ${SOALAN_PER_QUIZ}`;
  document.getElementById('result-pct').textContent   = `${Math.round(pct * 100)}%`;
  document.getElementById('result-stars').textContent = stars;
  document.getElementById('result-msg').textContent   = lulus
    ? 'Syabas! Prestasi anda cemerlang!'
    : 'Jangan putus asa! Ulang latihan untuk hasil lebih baik.';

  // Score box colour
  const box = document.querySelector('.result-score-box');
  box.style.background = lulus ? 'var(--green-light)' : 'var(--yellow-light)';
  document.querySelector('.result-score').style.color  = lulus ? 'var(--green-dark)' : 'var(--blue-dark)';
  document.querySelector('.result-pct').style.color    = lulus ? 'var(--green)' : 'var(--blue)';

  // "Next level" button visibility
  const btnNext = document.getElementById('btn-next-level');
  if (lulus && currentLevel < TOTAL_LEVELS) {
    btnNext.style.display = '';
    btnNext.textContent   = `Cuba Tahap ${currentLevel + 1} ➜`;
  } else if (lulus && currentLevel === TOTAL_LEVELS) {
    btnNext.style.display = '';
    btnNext.textContent   = 'Semua Tahap Selesai! 🏆';
    btnNext.disabled = true;
  } else {
    btnNext.style.display = 'none';
  }

  // Review
  buildReview();

  showScreen('screen-result');
}

function buildReview() {
  const el = document.getElementById('result-review');
  if (answers.length === 0) { el.style.display = 'none'; return; }
  el.style.display = '';

  let html = '<h3>Semakan Jawapan</h3>';
  answers.forEach((a, i) => {
    html += `
      <div class="review-item">
        <span class="review-icon">${a.isRight ? '✅' : '❌'}</span>
        <div>
          <div class="review-q">S${i+1}: ${a.q}</div>
          <div class="review-ans">
            ${a.isRight
              ? `Jawapan betul: ${a.correct}`
              : `Anda jawab: ${a.chosen} &nbsp;|&nbsp; Betul: ${a.correct}`
            }
          </div>
        </div>
      </div>`;
  });
  el.innerHTML = html;
}

/* =========================================
   SIMPLE SOUND (Web Audio API)
   ========================================= */
let audioCtx = null;

function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(type) {
  try {
    const ctx = getAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, ctx.currentTime);       // C5
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(); osc.stop(ctx.currentTime + 0.5);
    } else {
      osc.type = 'square';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(); osc.stop(ctx.currentTime + 0.35);
    }
  } catch (_) { /* ignore if audio blocked */ }
}

/* =========================================
   EVENT LISTENERS
   ========================================= */

// Level select buttons (home)
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    startQuiz(parseInt(btn.dataset.level, 10));
  });
});

// Back to menu
document.getElementById('btn-back').addEventListener('click', () => {
  showScreen('screen-home');
});

// Next question
document.getElementById('btn-next').addEventListener('click', nextQuestion);

// Result: next level
document.getElementById('btn-next-level').addEventListener('click', () => {
  if (currentLevel < TOTAL_LEVELS) startQuiz(currentLevel + 1);
});

// Result: retry same level
document.getElementById('btn-retry').addEventListener('click', () => {
  startQuiz(currentLevel);
});

// Result: home
document.getElementById('btn-home').addEventListener('click', () => {
  showScreen('screen-home');
});
