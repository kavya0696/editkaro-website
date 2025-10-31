const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

const forms = document.forms;
for (let form of forms) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => {
        if (form.name === 'submit-to-google-sheet')
          document.getElementById("msg").innerHTML = "Thanks for subscribing! 💌";
        if (form.name === 'contact-to-google-sheet')
          document.getElementById("contact-msg").innerHTML = "Message sent successfully! ✅";
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
}