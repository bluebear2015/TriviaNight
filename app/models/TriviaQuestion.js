

export class triviaQuestion {


    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correct_answer = correct_answer
        this.incorrect_answers = incorrect_answers

    }



    get TriviaTemplate() {
        return `
    <div class="col-12 m-2">
      <div class=" card elevation-5 m-3 border border-5 border-info rounded">
          <h1 class="border border-5 border-info rounded m-2 bg-secondary text-center fw-bold mb-1 text-danger"><span>
          <a class="navbar-brand ms-3" href="#">
          <img
            src="https://media0.giphy.com/media/h7Lv3A5AvwIFF15TdL/giphy.gif?cid=ecf05e47n2lxfaaundb681n0i42p9vtxjjuc1nge92098uls&ep=v1_gifs_related&rid=giphy.gif&ct=s"
            height="45"
            alt=""
            loading="lazy" />
        </a>
          </span>${this.category}</h1>
          <h3 class="text-center fw-bold">${this.question}</h3>


          
          <div class="d-flex justify-content-evenly p-2">
          <div onClick="app.TriviaController.wrongAnswer()" class="border border-5 border-danger rounded btn btn-secondary fw-bold  fs-4 text-dark text-bold p-2 m-2">${this.incorrect_answers[0]}</div><div onClick="app.TriviaController.wrongAnswer()" class="border border-5 border-danger rounded btn btn-secondary fw-bold  fs-4 text-dark text-bold p-2 m-2">${this.incorrect_answers[1]}</div>
          <div onClick="app.TriviaController.wrongAnswer()" class="border border-5 border-danger rounded btn btn-secondary fw-bold fs-4 text-dark text-bold p-2 m-2">${this.incorrect_answers[2]}</div><div onClick="app.TriviaController.correctAnswer()" class="border border-5 border-danger rounded btn btn-secondary fw-bold  fs-4 text-dark text-bold p-2 m-2">${this.correct_answer}</div>  
          </div>
          <div onClick="app.TriviaController.nextQuestion()" class ="border border-5 border-info rounded m-2 btn btn-secondary fw-bold text-danger">
          Pass Question
          <span>
          <a class="navbar-brand ms-3" href="#">
          <img
            src="https://media0.giphy.com/media/3o7btW2KMZBuxGY716/giphy.gif?cid=ecf05e470w8p7dst4efbfr30wo13eb7vitii1u8vc8w236jy&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            height="45"
            alt=""
            loading="lazy" />
        </a>
          </span>
          </div>
          </div>
    </div>
        `
    }


}

// category": "Entertainment: Music",
// "type": "multiple",
//     "difficulty": "medium",
//         "question": "Who had hits in the 70s with the songs &quot;Lonely Boy&quot; and &quot;Never Let Her Slip Away&quot;?",
//             "correct_answer": "Andrew Gold",
//                 "incorrect_answers":