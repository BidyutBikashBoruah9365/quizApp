const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "What year was JavaScript created?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1993",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz")
const answerElements = document.querySelectorAll(".answer")
const questionElement = document.getElementById("question")

const atext = document.getElementById("aText")
const btext = document.getElementById("bText")
const ctext = document.getElementById("cText")
const dtext = document.getElementById("dText")

const submitButton = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionElement.innerText = currentQuizData.question

    atext.innerText = currentQuizData.a
    btext.innerText = currentQuizData.b
    ctext.innerText = currentQuizData.c
    dtext.innerText = currentQuizData.d
}

function getSelected(){
    let answer
    answerElements.forEach(ans => {
        if( ans.checked){
            answer = ans.id
        }
    })
    return answer
}

submitButton.addEventListener("click", () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly </h2>
            <button onclick = "location.reload()"> Reload </button>`
        }
    }
})

