const quizData = [
    {
        question: 'How did you hear about us',
        options: {
            a: 'Linkedin',
            b: 'Facebook',
            c: 'Google Ad',
            d: 'Google Search',
            correct: 'a'
        }

    },

    {
        question: 'what do you lie about us',
        options: {
            a: 'flexibility',
            b: 'salary',
            c: 'party',
            d: 'others specify',
            correct: 'd'
        }

    },

    {
        question: 'Why do you want to work here',
        options: {
            a: 'Linkedin',
            b: 'Facebook',
            c: 'Google Ad',
            d: 'Google Search',
            correct: 'c'
        }

    },

    {
        question: 'How did you hear about us',
        options: {
            a: 'Linkedin',
            b: 'Facebook',
            c: 'Google Ad',
            d: 'Google Search',
            correct: 'b'
        }
    },

    {
        question: 'How did you hear about us',
        options: {
            a: 'Linkedin',
            b: 'Facebook',
            c: 'Google Ad',
            d: 'Google Search',
            correct: 'a'
        }
    }

]

const quiz = document.getElementById('quiz')
const questionElement = document.getElementById('question')
const answerElement = document.querySelectorAll('.answer')
const answerA = document.getElementById('a_text')
const answerB = document.getElementById('b_text')
const answerC = document.getElementById('c_text')
const answerD = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz = 0

let score = 0

loadQuiz()

function loadQuiz() {
    deSelectAnswer()
    const currentQuizData = quizData[currentQuiz]
    questionElement.innerText = currentQuizData.question
    answerA.innerText = currentQuizData.options.a
    answerB.innerText = currentQuizData.options.b
    answerC.innerText = currentQuizData.options.c
    answerD.innerText = currentQuizData.options.d
}

function deSelectAnswer() {
    answerElement.forEach(answerEl => answerEl.checked = false)
}

function submitBtn() {
    let answer
    answerElement.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submit.addEventListener('click', () => {
    const answer = submitBtn()
    if (answer) {
        if (answer === quizData[currentQuiz].options.correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = ` 
            <h2>
                You answered ${score} / ${quizData.length} questions correctly
            </h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }

})
