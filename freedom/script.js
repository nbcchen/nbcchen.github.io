const today = new Date();
const firstDay = new Date('2025-05-23T11:14:00Z');
const lastDay = new Date('2025-11-03T04:35:00Z'); // 6:35 but arrive 2 hours prior
const totalDays = Math.round(Math.abs(lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));
const daysPassed = (Math.abs(today.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24)).toFixed(1);
const totalHours =  (Math.abs(lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60));
const hoursPassed = (Math.abs(today.getTime() - firstDay.getTime()) / (1000 * 60 * 60)).toFixed(1);
const weeksPassed = Math.round((today - firstDay) / (7 * 24 * 60 * 60 * 1000));
const totalWeeks = Math.round((lastDay - firstDay) / (7 * 24 * 60 * 60 * 1000));
const monthsPassed = today.getMonth() - firstDay.getMonth() + 12 * (today.getFullYear() - firstDay.getFullYear());
const totalMonths = lastDay.getMonth() - firstDay.getMonth() + 12 * (today.getFullYear() - firstDay.getFullYear());

document.getElementById('days-passed').innerText = daysPassed;
document.getElementById('days-total').innerText = totalDays;
document.getElementById('months-passed').innerText = monthsPassed;
document.getElementById('months-total').innerText = totalMonths;
document.getElementById('hours-passed').innerText = hoursPassed;
document.getElementById('hours-total').innerText = totalHours;
document.getElementById('weeks-passed').innerText = weeksPassed;
document.getElementById('weeks-total').innerText = totalWeeks;

document.addEventListener('DOMContentLoaded', () => {

    const listaProgresso = document.getElementById('project-list');
    listaProgresso.innerHTML = '';

    const data = [
        {
            name: 'Hours passed',
            progress: 100 * (hoursPassed/totalHours),
        },
        {
            name: "Days passed",
            progress: 100 * (daysPassed / totalDays),
        },
        {
            name: "Weeks passed",
            progress: 100 * (weeksPassed / totalWeeks),
        },
        {
            name: "Months passed",
            progress: 100 * (monthsPassed/totalMonths),
        },
    ];

    data.forEach(progresso => {
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
});

