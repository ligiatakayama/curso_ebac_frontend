const form = document .getElementById("form-confirm");

let formValid = false;

function numberValid (ValA, ValB) {
    return ValB > ValA;
}

form.addEventListener("submit", function(e) {
preventDeFault (),
    let ValA = parseFloat(document.getElementById("valor_a").value);
    let ValB = parseFloat(document.getElementById("valor_b").value);

    const messagesucess = "Dados enviados com sucesso" 
    const containermessagesucess = document.querySelector(".success-message");


formValid = numberValid (ValA, ValB);

if (formValid) {
    document.querySelector(".error-message").style.display = "none";
    containermessagesucess.innerHTML = messagesucess;
    containermessagesucess.style.display = "block";
    document.querySelector(".error-message").style.display = "none";

    ValA.value = " ";
    ValB.value = " ";
} Else {
    document.querySelector(".error-message").style.display = "block";
    containermessagesucess.style.display = "none";
}


})