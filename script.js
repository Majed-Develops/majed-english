const gmailBtn = document.getElementById("gmailButton");
const phoneBtn = document.getElementById("phonenumberButton");

gmailBtn.addEventListener("click", () => {
    console.log("Contact through Gmail");
    location.href = "mailto: majedbashir.dev@gmail.com";
});

phoneBtn.addEventListener("click", () => {
    console.log("Contact through phone number")
    location.href = "tel: +962790699156";
});

document.querySelectorAll('.QA').forEach(qa => {
  const answer = qa.querySelector('.answer');

  qa.addEventListener('click', () => {
    qa.classList.toggle('open');

    if (qa.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});