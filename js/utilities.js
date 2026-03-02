
function activeBtn(id) {
    const arr = document.querySelectorAll(".active");
    for (const btn of arr) {
        btn.classList.remove('btn-info');
    }
    document.getElementById(id).classList.add('btn-info');
}

function switchContainer(destination, id, applied) {
    const appliedBtn = document.getElementById(applied);
    if (destination === "interview-container") {
        appliedBtn.innerText = "Interview";
    }
    else {
        appliedBtn.innerText = "Rejected";
    }
    const destinationContainer = document.getElementById(destination);
    const content = document.getElementById(id);
    destinationContainer.appendChild(content);
}

