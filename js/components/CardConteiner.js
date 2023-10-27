import { Card } from "./Card.js";

export const CardContainer = (props) => {

    let { cursos }=props;
    console.log(cursos)
    let section = document.createElement ('section');
    section.setAttribute('class', 'cards')

    cursos.forEach(curso => {
        const card= Card(curso);
        section.append(card);
    });
return section;
}