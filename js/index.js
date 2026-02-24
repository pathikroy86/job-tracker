document.getElementById('all-jobs-btn').addEventListener('click', function () {
    document.getElementById('jobs-container').classList.remove('hidden');
    document.getElementById('no-jobs-container').classList.add('hidden');
    activeBtn('all-jobs-btn');
})
document.getElementById('interview-btn').addEventListener('click', function () {
    document.getElementById('jobs-container').classList.add('hidden');
    document.getElementById('no-jobs-container').classList.remove('hidden');
    activeBtn('interview-btn');
})
document.getElementById('rejected-btn').addEventListener('click', function () {
    document.getElementById('jobs-container').classList.add('hidden');
    document.getElementById('no-jobs-container').classList.remove('hidden');
    activeBtn('rejected-btn');
})