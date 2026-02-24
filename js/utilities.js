function activeBtn(id) {
    const arr = document.querySelectorAll(".active");
    for (const btn of arr) {
        btn.classList.remove('btn-info');
    }
    document.getElementById(id).classList.add('btn-info');
}
function jobCount() {
    const arr = document.querySelectorAll('.common');
    return arr.length;
}
function interviewCount() {
    const arr = document.querySelectorAll('.interview');
    return arr.length;
}
function rejectedCount() {
    const arr = document.querySelectorAll('.rejected');
    return arr.length;
}