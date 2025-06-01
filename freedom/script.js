const today = new Date();
const firstDay = new Date('5/23/2025');
const lastDay = new Date('11/3/2025');
const totalDays = Math.round(Math.abs(lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));
const daysPassed = Math.round(Math.abs(today.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));

document.getElementById('days-passed').innerText = daysPassed;
document.getElementById('days-total').innerText = totalDays;

document.addEventListener('DOMContentLoaded', () => {

    const listaProgresso = document.getElementById('project-list');
    listaProgresso.innerHTML = '';

    const progresso = {
        name: "Days passed",
        progress: 100 * (daysPassed / totalDays),
    };

    const contenedorProgresso = document.createElement('div');
    contenedorProgresso.classList.add('project-container');

    const tituloProgresso = document.createElement('div');
    tituloProgresso.classList.add('project-title');
    tituloProgresso.textContent = progresso.name;
    contenedorProgresso.appendChild(tituloProgresso);

    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('progress-bar-container');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('aria-valuenow', '0');
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    progressBar.textContent = `0%`;

    progressBarContainer.appendChild(progressBar);
    contenedorProgresso.appendChild(progressBarContainer);
    listaProgresso.appendChild(contenedorProgresso);

    let currentProgress = 0;
    const targetProgress = progresso.progress;
    const interval = setInterval(() => {
        currentProgress += 1;
        progressBar.style.width = `${currentProgress}%`;
        progressBar.setAttribute('aria-valuenow', currentProgress);
        progressBar.textContent = `${currentProgress}%`;

        if (currentProgress >= targetProgress) {
            clearInterval(interval);
        }
    }, 50);

});
