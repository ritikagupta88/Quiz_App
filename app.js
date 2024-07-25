const quizData = [{
    question: "What is the purpose of the '===' operator in JavaScript?",
    a: "Assign a value",
    b: "Compare values and types",
    c: "Concatenate strings",
    d: "Compare value only",
    correct: "b",
},
{
    question: "When did powershell become open-source and cross-platform?",
    a: "2016",
    b: "2010",
    c: "2014",
    d: "2012",
    correct: "a",
},
{
    question: "What does mode() function do?",
    a: "Data type",
    b: "Storage mode",
    c: "Data frame",
    d: "none of the above",
    correct: "b",
},
{
    question: "What is the function used to read CSV files into R?",
    a: "csv()",
    b: "Read.csv()",
    c: "Read()",
    d: "all of the above",
    correct: "b",
},
{
    question: "What does MATLAB stand for?",
    a: "Matrix Laboratory",
    b: "Mathematical Laboratory",
    c: "Methodical Laboratory",
    d: "none of the above",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
