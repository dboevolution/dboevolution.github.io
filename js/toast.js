// toast.js
function showToast(message) {
    let existingToast = document.querySelector(".toast.show");
    if (existingToast) {
        existingToast.classList.remove("show");
    }

    let toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(function(){
        toast.classList.remove("show");
    }, 3000);
}
