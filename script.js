
let container = document.createElement("div");
container.className = "container";

let title = document.createElement("h1");
title.textContent = "Шар гадань";

let input = document.createElement("input");
input.type = "text";
input.id = "question";
input.placeholder = "Напиши своє питання зі знаком ?";

let ball = document.createElement("div");
ball.id = "ball";

let windowBox = document.createElement("div");
windowBox.id = "window";

let answerText = document.createElement("p");
answerText.id = "answer";

let hint = document.createElement("p");
hint.id = "hint";
hint.textContent = "Спочатку ваше питання та натисни на шар";

// ---------------------------------------
windowBox.appendChild(answerText);
ball.appendChild(windowBox);

container.appendChild(title);
container.appendChild(input);
container.appendChild(ball);
container.appendChild(hint);

document.body.appendChild(container);


//куля
let answers = [
    "Так",
    "Ні",
    "Швидше за все так",
    "Швидше за все ні",
    "Навіть не думай",
    "Без сумнівів",
    "Спитай пізніше",
    "Не можу сказати зараз",
    "Зірки кажуть так",
    "Сумнівно",
    "100% так",
    "Шанси малі"
];

ball.addEventListener("click", function () {
    let question = input.value.trim();

    if (question === "") {
        hint.textContent = "Спочатку ваше питання!";
        return;
    }

    let lastChar = question[question.length - 1];
    if (lastChar !== "?") {
        hint.textContent = "Це не питання, в кінці потрібен знак ?";
        answerText.textContent = "?";
        return;
    }

    hint.textContent = "Шар думає...";
    answerText.textContent = "...";

    ball.classList.add("shake");

    setTimeout(function () {
        let randomNumber = Math.floor(Math.random() * answers.length);
        answerText.textContent = answers[randomNumber];
        hint.textContent = "Можеш спитати ще питання";
        ball.classList.remove("shake");
    }, 700);
});
