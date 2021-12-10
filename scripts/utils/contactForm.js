function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
   
}


envoyerbutton = document.getElementById("envoyerbutton")

envoyerbutton.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "none";
})