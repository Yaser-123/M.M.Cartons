let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
//FAQ SECTION JS STARTING
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            if (i === index) {
                c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
                ic.classList.toggle("ri-add-line", isOpen);
                ic.classList.toggle("ri-subtract-fill", !isOpen);
            } else {
                c.style.height = "0px";
                ic.classList.add("ri-add-line");
                ic.classList.remove("ri-subtract-fill");
            }
        });
    });
});
//FAQ SECTION JS ENDS HERE

//Contact us

const scriptURL = 'https://script.google.com/macros/s/AKfycbyyR4Km1XrHfbvxWImf2NNbFgwCKfjWobgx-4mtrErkul44bUOl_OXAaVYPUsKTk8fb/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
