export const handleCursoSelection = (carrera) => {
    const selectedCurso = carrera;

    localStorage.setItem('selectedCurso', JSON.stringify(selectedCurso));

    const selectedCursoDisplay = document.querySelector('#selectedCurso');
    selectedCursoDisplay.textContent= `Compraste el curso de ${curso.name}`
}