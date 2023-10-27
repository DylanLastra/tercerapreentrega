import { handleCursoSelection } from "../helpers/handleCursoSelection.js";

export const Card = (props)=> {
    let { name,id,price,thumbnail,duration} =props;
let div=document.createElement('div');
div.setAttribute('class', 'cards__card-body')
div.innerHTML= 
    `
    <img src=${thumbnail} alt="fotito" del ${name}>
    <div> 
    <p>el precio es de $ ${price} y la duracion es de  ${duration}</p>
    <h2>${name}</h2>
    <a data-id=${id} class="card-link">Selecciona tu curso.</a>
    </div>
    `;

    const selectedCursoLink = div.querySelector('.card-link');
    selectedCursoLink.addEventListener('click', () => handleCursoSelection(props));
    return div;
    }


