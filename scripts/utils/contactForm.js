const valNom = document.querySelector("#nom")
const valPrenom = document.querySelector("#prenom")
const valEmail = document.querySelector("#email")
const valMessage = document.querySelector("#inputmessage")


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
    const modal = document.getElementById("contact_modal");
    e.preventDefault()
    var Affiche = `${valPrenom.value} ${valNom.value} dont l'email ${valEmail.value} vous a laissé le message suivant : ${valMessage.value} ` 
    console.log(Affiche)
    valNom.value = ""
    valPrenom.value = ""
    valEmail.value = ""
    valMessage.value=""
    modal.style.display = "none";
})

window.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.key === "Escape") {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";

    }

})