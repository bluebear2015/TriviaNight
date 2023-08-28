import { AppState } from "../AppState.js"
import { triviaQuestion } from "../models/TriviaQuestion.js"


class TriviaService {
    async getTrivia() {
        console.log('getting questions');
        const response = await fetch('https://opentdb.com/api.php?amount=50&type=multiple');
        const data = await response.json();
        console.log(response);
        console.log(data.results);

        let newTrivia = data.results.map(TriviaQuestions => new triviaQuestion(TriviaQuestions));
        console.log(newTrivia);


        this.triviaQuestions = this.shuffle(newTrivia);

        AppState.triviaQuestions = this.triviaQuestions;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }




}

export const triviaService = new TriviaService()