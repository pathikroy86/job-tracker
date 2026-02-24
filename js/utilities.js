function activeBtn(id) {
    const arr = document.querySelectorAll(".active");
    for (const btn of arr) {
        btn.classList.remove('btn-info');
    }
    document.getElementById(id).classList.add('btn-info');
}