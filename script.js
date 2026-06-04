/* ==========================================
   AGROTECH EXPERIENCE
   SCRIPT PRINCIPAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initThemeToggle();
    initParticles();
    initCounters();
    initProgressBars();
    initScrollAnimations();
    initBackToTop();
    initQuiz();

});

/* ==========================================
   MENU MOBILE
========================================== */

function initMobileMenu() {

    const menuBtn = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

/* ==========================================
   TEMA CLARO / ESCURO
========================================== */

function initThemeToggle() {

    const themeBtn = document.getElementById("themeToggle");

    if (!themeBtn) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        themeBtn.innerHTML = isLight
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

    });

}

/* ==========================================
   PARTÍCULAS
========================================== */

function initParticles() {

    const particlesContainer =
        document.getElementById("particles");

    if (!particlesContainer) return;

    const totalParticles = 60;

    for (let i = 0; i < totalParticles; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        const size =
            Math.random() * 6 + 2;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${Math.random() * 15 + 10}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;

        const colors = [
            "#22C55E",
            "#16A34A",
            "#0EA5E9"
        ];

        particle.style.background =
            colors[
            Math.floor(Math.random() * colors.length)
            ];

        particlesContainer.appendChild(particle);

    }

}

/* ==========================================
   CONTADORES
========================================== */

function initCounters() {

    const counters =
        document.querySelectorAll(".counter");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.4
        });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

function animateCounter(counter) {

    const target =
        Number(counter.dataset.target);

    let current = 0;

    const increment =
        Math.ceil(target / 100);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.textContent =
            current + "%";

    }, 20);

}

/* ==========================================
   BARRAS DE PROGRESSO
========================================== */

function initProgressBars() {

    const bars =
        document.querySelectorAll(".progress-fill");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width + "%";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.4
        });

    bars.forEach(bar => {

        observer.observe(bar);

    });

}

/* ==========================================
   ANIMAÇÕES AO ROLAR
========================================== */

function initScrollAnimations() {

    const elements =
        document.querySelectorAll(
            ".timeline-item, .tech-card, .stat-card, .curiosity-card"
        );

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.2
        });

    elements.forEach(el => {

        observer.observe(el);

    });

}

/* ==========================================
   BOTÃO TOPO
========================================== */

function initBackToTop() {

    const button =
        document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.style.display = "block";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================================
   QUIZ AGROTECH
========================================== */

function initQuiz() {

    const questions = [

        {
            question:
                "Qual tecnologia monitora plantações pelo céu?",

            options: [
                "Trator",
                "Drone",
                "Enxada",
                "Caminhão"
            ],

            answer: 1
        },

        {
            question:
                "Qual tecnologia utiliza aprendizado de máquina?",

            options: [
                "IA",
                "Arado",
                "Irrigação",
                "Semente"
            ],

            answer: 0
        },

        {
            question:
                "O que sensores inteligentes monitoram?",

            options: [
                "Solo e clima",
                "Somente máquinas",
                "Estradas",
                "Veículos"
            ],

            answer: 0
        },

        {
            question:
                "Qual tecnologia pode operar sem motorista?",

            options: [
                "Trator Autônomo",
                "Pulverizador Manual",
                "Enxada",
                "Carrinho"
            ],

            answer: 0
        },

        {
            question:
                "Qual benefício está ligado ao AgroTech?",

            options: [
                "Maior desperdício",
                "Menor produtividade",
                "Sustentabilidade",
                "Poluição"
            ],

            answer: 2
        }

    ];

    const quizBox =
        document.getElementById("quizBox");

    const nextBtn =
        document.getElementById("nextBtn");

    const result =
        document.getElementById("result");

    if (!quizBox || !nextBtn || !result) return;

    let currentQuestion = 0;
    let score = 0;
    let selected = null;

    renderQuestion();

    function renderQuestion() {

        const q =
            questions[currentQuestion];

        quizBox.innerHTML = `

            <h3>${q.question}</h3>

            ${q.options.map((option, index) => `

                <div class="option"
                     data-index="${index}">

                     ${option}

                </div>

            `).join("")}

        `;

        selected = null;

        document
            .querySelectorAll(".option")
            .forEach(option => {

                option.addEventListener("click", () => {

                    document
                        .querySelectorAll(".option")
                        .forEach(o =>
                            o.style.background = ""
                        );

                    option.style.background =
                        "#22C55E";

                    selected =
                        Number(option.dataset.index);

                });

            });

    }

    nextBtn.addEventListener("click", () => {

        if (selected === null) {

            alert(
                "Selecione uma alternativa."
            );

            return;
        }

        if (
            selected ===
            questions[currentQuestion].answer
        ) {

            score++;

        }

        currentQuestion++;

        if (
            currentQuestion <
            questions.length
        ) {

            renderQuestion();

        } else {

            finishQuiz();

        }

    });

    function finishQuiz() {

        quizBox.style.display = "none";

        nextBtn.style.display = "none";

        let message = "";

        if (score <= 2) {

            message =
                "🌱 Continue aprendendo sobre o AgroTech.";

        } else if (score <= 4) {

            message =
                "🚜 Ótimo conhecimento sobre inovação agrícola!";

        } else {

            message =
                "🏆 Você é um especialista do AgroTech!";

        }

        result.innerHTML = `

            <h2>Resultado Final</h2>

            <h3>${score} / ${questions.length}</h3>

            <p>${message}</p>

        `;

    }

}