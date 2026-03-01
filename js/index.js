document.getElementById('all-jobs-btn').addEventListener('click', function () {
    const allJobsContainer = document.getElementById('all-jobs-container');
    const noJobsContainer = document.getElementById('no-jobs-container');
    console.log(allJobsContainer.children.length);
    if (allJobsContainer.children.length === 0) {
        allJobsContainer.classList.add('hidden');
        noJobsContainer.classList.remove('hidden');
    }
    else {
        allJobsContainer.classList.remove('hidden');
        noJobsContainer.classList.add('hidden');
    }
})
document.getElementById('interview-btn').addEventListener('click', function () {
    const allJobsContainer = document.getElementById('all-jobs-container');
    allJobsContainer.classList.add('hidden');
    const interviewContainer = document.getElementById('interview-container');
    const noJobsContainer = document.getElementById('no-jobs-container');
    console.log(interviewContainer.children.length);
    if (interviewContainer.children.length === 0) {
        interviewContainer.classList.add('hidden');
        noJobsContainer.classList.remove('hidden');
    }
    else {
        interviewContainer.classList.remove('hidden');
        noJobsContainer.classList.add('hidden');
    }
})
document.getElementById('rejected-btn').addEventListener('click', function () {
    const allJobsContainer = document.getElementById('all-jobs-container');
    allJobsContainer.classList.add('hidden');
    const rejectedContainer = document.getElementById('rejected-container');
    const noJobsContainer = document.getElementById('no-jobs-container');
    console.log(rejectedContainer.children.length);
    if (rejectedContainer.children.length === 0) {
        rejectedContainer.classList.add('hidden');
        noJobsContainer.classList.remove('hidden');
    }
    else {
        rejectedContainer.classList.remove('hidden');
        noJobsContainer.classList.add('hidden');
    }
})