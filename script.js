const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
        correct: 1
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correct: 1
    },
    {
        question: "Which is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Flask"],
        correct: 2
    },
    {
        question: "Which of the following is used to connect a database?",
        options: ["HTML", "CSS", "SQL", "JavaScript"],
        correct: 2
    },
    {
        question: "Which tag is used for inserting a line break in HTML?",
        options: ["<break>", "<br>", "<lb>", "<line>"],
        correct: 1
    },
    {
        question: "What is the default alignment of content in a <div> element?",
        options: ["Center", "Left", "Right", "Justify"],
        correct: 1
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correct: 0
    },
    {
        question: "In which year was JavaScript created?",
        options: ["1995", "2000", "1990", "1998"],
        correct: 0
    },
    {
        question: "What is the use of the <head> tag in HTML?",
        options: ["Contains main content", "Defines header section", "Contains meta and links", "None of the above"],
        correct: 2
    },
    {
        question: "Which attribute is used to define inline styles?",
        options: ["style", "class", "id", "styles"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 0
    },
    {
        question: "Which SQL command is used to retrieve data?",
        options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
        correct: 1
    },
    {
        question: "How do you define a variable in JavaScript?",
        options: ["var name", "variable name", "v name", "new name"],
        correct: 0
    },
    {
        question: "What is the extension for a JavaScript file?",
        options: [".html", ".css", ".js", ".java"],
        correct: 2
    },
    {
        question: "Which SQL keyword is used to insert data?",
        options: ["INSERT INTO", "ADD", "PUT", "APPEND"],
        correct: 0
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Order Model", "None"],
        correct: 0
    },
    {
        question: "Which of the following is a looping structure in JavaScript?",
        options: ["if", "for", "define", "loop"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to display a picture?",
        options: ["<pic>", "<image>", "<img>", "<src>"],
        correct: 2
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouse", "onchange", "onmouseover", "onclick"],
        correct: 3
    },
    {
        question: "How can you add a comment in HTML?",
        options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"],
        correct: 1
    },
    {
        question: "What is the correct syntax to link a CSS file?",
        options: ["<link src='style.css'>", "<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css>style.css</css>"],
        correct: 2
    },
    {
        question: "What is SQL primarily used for?",
        options: ["Creating web pages", "Styling content", "Managing databases", "Designing graphics"],
        correct: 2
    },
    {
        question: "Which keyword is used to create a function in JavaScript?",
        options: ["function", "method", "define", "create"],
        correct: 0
    },
    {
        question: "Which method is used to write a message in the console in JavaScript?",
        options: ["console.log()", "print()", "echo()", "log.console()"],
        correct: 0
    }
];

let currentIndex = 0;
let score = 0;
let timerInterval;

function loadQuestion() {
    clearInterval(timerInterval);
    document.getElementById("time").innerText = 15;
    startTimer();

    const q = questions[currentIndex];
    document.getElementById("question").innerText = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, element) {
    const correct = questions[currentIndex].correct;
    const options = document.querySelectorAll(".option");

    options.forEach((opt, idx) => {
        if (idx === correct) opt.classList.add("correct");
        else if (idx === selected) opt.classList.add("wrong");
        opt.onclick = null;
    });

    if (selected === correct) {
        score++;
    }

    clearInterval(timerInterval);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function startTimer() {
    let time = 15;
    timerInterval = setInterval(() => {
        time--;
        document.getElementById("time").innerText = time;
        if (time <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, null); // Treat as incorrect if not answered in time
        }
    }, 1000);
}

function showScore() {
    const total = questions.length;
    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: <strong>${score}</strong> out of ${total}</p>
    `;
}

window.onload = loadQuestion;