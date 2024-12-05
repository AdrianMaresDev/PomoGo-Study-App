const studyPageBtn = document.getElementById('study-page');
const tasksPageBtn = document.getElementById('tasks-page');
const statsPageBtn = document.getElementById('stats-page');
const navBtnContainer = document.getElementById('nav-btn-container');
const studyPageContent = document.getElementById('study-page-content');
const tasksPageContent = document.getElementById('tasks-page-content');
const statsPageContent = document.getElementById('stats-page-content');

//Show the active navigation button

navBtnContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-btn')) {

        //Remove active class from all buttons
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        //Add active class back to button that is clicked on
        event.target.classList.add('active');

        //Hide content sections
        document.querySelectorAll('main section').forEach(section => section.classList.add('hidden'));

        //Display corresponding section depending on the active button
        const targetId = event.target.dataset.target;
        document.getElementById(targetId).classList.remove('hidden');
    }
});

//Display corresponding content depending on the active button

/*studyPageBtn.addEventListener('click', () => {
    studyPageContent.classList.remove('hidden');
    tasksPageContent.classList.add('hidden');
    statsPageContent.classList.add('hidden');
})

tasksPageBtn.addEventListener('click', () => {
    studyPageContent.classList.add('hidden');
    tasksPageContent.classList.remove('hidden');
    statsPageContent.classList.add('hidden');
})

statsPageBtn.addEventListener('click', () => {
    studyPageContent.classList.add('hidden');
    tasksPageContent.classList.add('hidden');
    statsPageContent.classList.remove('hidden');
})*/