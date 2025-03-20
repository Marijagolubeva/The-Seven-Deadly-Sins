


document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("signupForm");
    let message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (!username || !email || !password) {
            message.textContent = "Пожалуйста, заполните все поля!";
            message.style.color = "red";
        } else {
            message.textContent = "Регистрация прошла успешно!";
            message.style.color = "green";

            form.reset();
        }
    });


let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = link.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    
        
    });



});



});
