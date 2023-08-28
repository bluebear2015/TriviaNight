import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { setHTML } from "../utils/Writer.js"

function _drawTrivia() {

    let trivia = AppState.triviaQuestions
    let content = ''
    trivia.forEach(t => content += t.TriviaTemplate)
    setHTML('Trivia', content)
}
export class TriviaController {
    constructor() {
        console.log('Trivia Controller');
        this.currentQuestionIndex = 0
        this.getTrivia();

    }

    async getTrivia() {
        await triviaService.getTrivia();
        _drawTrivia()
        this.displayCurrentQuestion();
    }


    displayCurrentQuestion() {
        let currentQuestion = AppState.triviaQuestions[this.currentQuestionIndex];
        if (currentQuestion) {
            let content = currentQuestion.TriviaTemplate;
            setHTML('Trivia', content);
        }
    }

    wrongAnswer() {
        window.alert('wrong Answer')

    }

    correctAnswer() {
        window.alert('your answer is correct')
        this.nextQuestion()

    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.displayCurrentQuestion();
    }
}
