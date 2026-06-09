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
            question: "Qual tecnologia monitora plantações pelo ar, detectando pragas e doenças?",
            options: ["Trator Autônomo", "Drone Agrícola", "Sensor de Solo", "Satélite Geoestacionário"],
            answer: 1
        },

        {
            question: "O que é 'agricultura de precisão'?",
            options: [
                "Plantar com sementes selecionadas manualmente",
                "Aplicar insumos de forma diferenciada conforme a necessidade de cada área",
                "Usar apenas fertilizantes orgânicos",
                "Irrigar toda a lavoura ao mesmo tempo"
            ],
            answer: 1
        },

        {
            question: "Qual tecnologia permite que um trator opere sem motorista?",
            options: ["Bluetooth agrícola", "GPS de alta precisão e sensores de obstáculos", "Rádio frequência", "Câmera térmica"],
            answer: 1
        },

        {
            question: "O que os sensores inteligentes no solo são capazes de medir?",
            options: [
                "Velocidade do vento apenas",
                "Umidade, temperatura, pH e nutrientes do solo",
                "Quantidade de chuva do mês anterior",
                "Peso das colheitas"
            ],
            answer: 1
        },

        {
            question: "O que significa 'Agricultura 4.0'?",
            options: [
                "Uso de quatro tipos de adubo diferentes",
                "A quarta geração de tratores a combustão",
                "Integração de IoT, big data, drones e IA na produção agrícola",
                "Plantio feito em quatro estações do ano"
            ],
            answer: 2
        },

        {
            question: "Para que servem as imagens de satélite na agricultura?",
            options: [
                "Apenas para prever chuvas",
                "Monitorar grandes áreas, acompanhar culturas e identificar variações no solo",
                "Controlar pragas urbanas",
                "Substituir o trabalho dos drones"
            ],
            answer: 1
        },

        {
            question: "Como a Inteligência Artificial ajuda na agricultura?",
            options: [
                "Substituindo completamente o agricultor",
                "Analisando dados para prever colheitas, identificar doenças e sugerir irrigação",
                "Fabricando sementes geneticamente modificadas",
                "Controlando o clima local"
            ],
            answer: 1
        },

        {
            question: "Qual é uma vantagem dos robôs de colheita em culturas como morango e uva?",
            options: [
                "São mais baratos que qualquer outra máquina",
                "Identificam e colhem frutos no ponto certo de maturação com precisão",
                "Eliminam totalmente o uso de água",
                "Produzem energia solar durante a colheita"
            ],
            answer: 1
        },

        {
            question: "Qual organização internacional é referência em segurança alimentar e tecnologia agrícola global?",
            options: ["NASA", "OMS", "FAO — ONU", "OTAN"],
            answer: 2
        },

        {
            question: "Qual é o principal objetivo do AgroTech?",
            options: [
                "Substituir toda mão de obra rural por robôs",
                "Produzir mais alimentos com menos recursos e menor impacto ambiental",
                "Eliminar o uso de máquinas agrícolas tradicionais",
                "Exportar tecnologia brasileira para outros países"
            ],
            answer: 1
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

    // Armazena as respostas do usuário
    const userAnswers = [];

    renderQuestion();

    function renderQuestion() {

        const q =
            questions[currentQuestion];

        quizBox.innerHTML = `

            <div class="quiz-progress">
                <span>Pergunta ${currentQuestion + 1} de ${questions.length}</span>
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${((currentQuestion) / questions.length) * 100}%"></div>
                </div>
            </div>

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
                        .forEach(o => {
                            o.style.background = "";
                            o.classList.remove("selected");
                        });

                    option.style.background =
                        "#22C55E";

                    option.classList.add("selected");

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

        // Salva a resposta do usuário
        userAnswers.push(selected);

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
        let messageIcon = "";

        if (score <= 4) {

            messageIcon = "🌱";
            message = "Continue aprendendo sobre o AgroTech.";

        } else if (score <= 7) {

            messageIcon = "🚜";
            message = "Ótimo conhecimento sobre inovação agrícola!";

        } else {

            messageIcon = "🏆";
            message = "Você é um especialista do AgroTech!";

        }

        // Monta o gabarito detalhado
        const reviewHTML = questions.map((q, i) => {

            const userChoice = userAnswers[i];
            const correctChoice = q.answer;
            const isCorrect = userChoice === correctChoice;

            const optionsHTML = q.options.map((opt, idx) => {

                let optClass = "review-option";
                let icon = "";

                if (idx === correctChoice) {
                    optClass += " review-correct";
                    icon = '<span class="review-icon">✓</span>';
                }

                if (idx === userChoice && !isCorrect) {
                    optClass += " review-wrong";
                    icon = '<span class="review-icon">✗</span>';
                }

                return `<div class="${optClass}">${icon}${opt}</div>`;

            }).join("");

            return `
                <div class="review-card ${isCorrect ? 'review-card-correct' : 'review-card-wrong'}">
                    <div class="review-card-header">
                        <span class="review-badge ${isCorrect ? 'badge-correct' : 'badge-wrong'}">
                            ${isCorrect ? '✓ Acertou' : '✗ Errou'}
                        </span>
                        <span class="review-num">Questão ${i + 1}</span>
                    </div>
                    <p class="review-question">${q.question}</p>
                    <div class="review-options">${optionsHTML}</div>
                </div>
            `;

        }).join("");

        result.innerHTML = `

            <div class="result-header">
                <div class="result-icon">${messageIcon}</div>
                <h2>Resultado Final</h2>
                <div class="result-score">
                    <span class="score-num">${score}</span>
                    <span class="score-sep">/</span>
                    <span class="score-total">${questions.length}</span>
                </div>
                <p class="result-message">${message}</p>
            </div>

            <div class="review-section">
                <h3 class="review-title">📋 Gabarito Detalhado</h3>
                <div class="review-list">${reviewHTML}</div>
            </div>

            <button id="restartQuiz" class="restart-btn">
                <i class="fas fa-redo"></i> Tentar Novamente
            </button>

        `;

        // Botão de reiniciar
        document.getElementById("restartQuiz").addEventListener("click", () => {

            currentQuestion = 0;
            score = 0;
            selected = null;
            userAnswers.length = 0;

            result.innerHTML = "";
            quizBox.style.display = "block";
            nextBtn.style.display = "inline-block";

            renderQuestion();

        });

    }

}