const quizData = [
    {
        question :"How old is florin?",
        a: "10",
        b: "17",
        c:"26",
        d: "110",
        correct : "c",
    },
    {
        question : "Whate is the most used programming language in 2019",
        a :"Java",
        b:"C",
        c:"Pythone",
        d:"JavaScript",
        correct: "d",
    },
    {
        question : "Who is the president of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan saldano",
        d: "Mihai Andrei",
        correct:"b",
    },
    {
        question :"What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascarding Style Sheet",
        c: "Jason Object Notation",
        d: "Helicapters Terminals Motorboats lamborginis",
        correct: "a",
    },
    {
        question :"What year was JavaScript launched?",
        a: "1996",
        b:"1995",
        c:"1994",
        d: "one of th above",
        correct:"b"
    }
]
const quizEl = document.getElementById('quiz')
const questionEl= document.getElementById('question')
const answerEls=document.querySelectorAll('.answer')
const a_text= document.getElementById('a-text')
const b_text= document.getElementById('b-text')
const c_text= document.getElementById('c-text')
const d_text= document.getElementById('d-text')
const submitBtn= document.getElementById('submit')
let currentQuiz =0;
let score = 0;

loadQuiz ();
function loadQuiz(){
    deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText =currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
}


function getSelected(){
    let ansewer = undefined;
    answerEls.forEach((answerEl) =>{
        if (answerEl.checked){
            ansewer = answerEl.id;
        }
    });
    return ansewer;
}
    function deselectAnswers(){
        answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
        });
}

submitBtn.addEventListener("click", () =>{
    // check to see the ansewer
    const answer = getSelected();
    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length ){
            loadQuiz ();
        }else{
            //too :show result
            quizEl.innerHTML = `<h2>You answered correctly at 
            ${score}/${quizData.length}question.</h2>
            <button onClick="location .reload()">Reload</button>
            `; 
    
        }
    }
});