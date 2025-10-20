const gmailBtn = document.getElementById("gmailButton");
const phoneBtn = document.getElementById("phonenumberButton");

gmailBtn.addEventListener("click", () => {
    console.log("Contact through Gmail");
    window.open = "mailto: majedbashir.dev@gmail.com";
});

phoneBtn.addEventListener("click", () => {
    console.log("Contact through phone number")
    window.open = "tel: +962790699156";
})