export const Book =(curso) => {
const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs');

    const saveData = () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const curso = document.querySelector('#curso').value;
    
        const selectedCurso = JSON.parse(localStorage.getItem('selectedCurso'));
if (name && email && curso && selectedCurso && selectedCurso.id) {
            const data = {
                name,
                email,
                curso,
                curso:selectedCurso
            }
            localStorage.setItem('userTurn', JSON.stringify(data));
            console.log(data)
        }
    }
        
formContainer.innerHTML = `
    <div>
        <label for="name">Nombre:</label>
        <input id="name" placeholder="Ingresa tu nombre por favor" type="text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" placeholder="Ingrese su email" type="email">
    </div>
    <div>
        <label for="curso">curso:</label>
        <input id="curso" type="text">
    </div>
    <p id="selectedCurso"></p>
    <button id="save-button">Compra tu curso</button>
    `;
    const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', saveData)

    form.appendChild(formContainer);


    return form;
}