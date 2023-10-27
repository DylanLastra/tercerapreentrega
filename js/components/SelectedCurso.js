export const SelectedCurso = () => {

    const userData = JSON.parse(localStorage.getItem('userTurn'));

    const form = document.querySelector('.form-container');
    const div = document.createElement('div');
    div.setAttribute('class', 'curso-container')

    div.innerHTML = `
    <div>
        <div>
            <h2>Compro el curso</h2>
            <h3>A nombre de: ${userData.name}</h3>
            <p>Mail: ${userData.email}</p>
            <p>Curso: ${userData.curso}</p>
        </div>
    </div>
    
    `;
    return div;
}