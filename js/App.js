import { CardContainer } from "./components/CardConteiner.js";
import { Book } from "./components/Book.js";
import { Carreras } from "./helpers/data.js";
import { SelectedCurso } from "./components/SelectedCurso.js";

export const App = () => {

    let appRoot = document.querySelector('#root');
    const userData = JSON.parse(localStorage.getItem('userTurn'));

if(userData){
        appRoot.append(userData ? SelectedCurso() : '')
    } else {
        appRoot.append(CardContainer({ cursos: Carreras }));
        appRoot.append(Book({ cursos: Carreras }))
    }
}