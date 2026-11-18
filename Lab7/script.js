
let ball = document.getElementById("ball");
let input = document.getElementById("question");
let answerText = document.getElementById("answer");
let hint = document.getElementById("hint");


let answers = [
    "Так",
    "Ні",
    "Швидше за все так",
    "Швидше за все ні",
    "Навіть не думай",
    "Без сумнімів",
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
        hint.textContent = "Можєш спитати ще питання";
        ball.classList.remove("shake");
    }, 700);
});
