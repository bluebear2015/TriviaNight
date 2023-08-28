import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { TriviaController } from "./controllers/TriviaController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: TriviaController,
    view: /*html*/`

    <main id="Trivia" class="trivia elevation-5 row m-2 bg-primary border border-5 border-info rounded">
      

    </main>
   
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]