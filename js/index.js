document.getElementById('all-jobs-btn').addEventListener('click', function () {
    const interviewContainer = document.getElementById('interview-container');
    const interviewCount = interviewContainer.children.length;
    document.getElementById('interview-count').innerText = interviewCount;
    interviewContainer.classList.add('hidden');
    const rejectedContainer = document.getElementById('rejected-container');
    const rejectedCount = rejectedContainer.children.length;
    document.getElementById('rejected-count').innerText = rejectedCount;
    rejectedContainer.classList.add('hidden');
    const allJobsContainer = document.getElementById('all-jobs-container');
    const noJobsContainer = document.getElementById('no-jobs-container');
    const jobCount = allJobsContainer.children.length;
    const availableJobs = document.getElementById('available-jobs');
    availableJobs.innerText = jobCount;
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
    const rejectedContainer = document.getElementById('rejected-container');
    const rejectedCount = rejectedContainer.children.length;
    document.getElementById('rejected-count').innerText = rejectedCount;
    rejectedContainer.classList.add('hidden');
    const interviewContainer = document.getElementById('interview-container');
    const noJobsContainer = document.getElementById('no-jobs-container');
    const jobCount = interviewContainer.children.length;
    const availableJobs = document.getElementById('available-jobs');
    availableJobs.innerText = jobCount;
    document.getElementById('interview-count').innerText = jobCount;
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
    const interviewContainer = document.getElementById('interview-container');
    const interviewCount = interviewContainer.children.length;
    document.getElementById('interview-count').innerText = interviewCount;
    interviewContainer.classList.add('hidden');
    const rejectedContainer = document.getElementById('rejected-container');
    const noJobsContainer = document.getElementById('no-jobs-container');
    const jobCount = rejectedContainer.children.length;
    const availableJobs = document.getElementById('available-jobs');
    availableJobs.innerText = jobCount;
    document.getElementById('rejected-count').innerText = jobCount;
    if (rejectedContainer.children.length === 0) {
        rejectedContainer.classList.add('hidden');
        noJobsContainer.classList.remove('hidden');
    }
    else {
        rejectedContainer.classList.remove('hidden');
        noJobsContainer.classList.add('hidden');
    }
})