document.getElementById('all-jobs-btn').addEventListener('click', function () {
    const jobs = jobCount();
    if (jobs) {
        document.getElementById('jobs-container').classList.remove('hidden');
    }
    else {
        document.getElementById('no-jobs-container').classList.add('hidden');
    }
    activeBtn('all-jobs-btn');
})
document.getElementById('interview-btn').addEventListener('click', function () {
    const jobs = interviewCount();
    if (jobs) {
        document.getElementById('jobs-container').classList.add('hidden');
        document.getElementById('interview-container').classList.remove('hidden');
    }
    else {
        document.getElementById('jobs-container').classList.add('hidden');
        document.getElementById('no-jobs-container').classList.remove('hidden');
    }
    activeBtn('interview-btn');
})
document.getElementById('rejected-btn').addEventListener('click', function () {
    const jobs = rejectedCount();
    if (jobs) {
        document.getElementById('jobs-container').classList.add('hidden');
        document.getElementById('rejected-container').classList.remove('hidden');
    }
    else {
        document.getElementById('jobs-container').classList.add('hidden');
        document.getElementById('no-jobs-container').classList.remove('hidden');
    }
    activeBtn('rejected-btn');
})