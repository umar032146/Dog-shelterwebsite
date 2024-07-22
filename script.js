document.getElementById('js-navbar-toggle').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '0px';
});

document.getElementById('dropdown-toggle').addEventListener('click', function() {
    var dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const qs1 = document.getElementById('1stqs');
    const ans1 = document.getElementById('1stans');

    const qs2 = document.getElementById('2ndqs');
    const ans2 = document.getElementById('2ndans');

    const qs3 = document.getElementById('3rdqs');
    const ans3 = document.getElementById('3rdans');

    const qs4 = document.getElementById('4thqs');
    const ans4 = document.getElementById('4thans');

    qs1.addEventListener('click', function () {
        ans1.classList.toggle('visible');
        qs1.classList.toggle('pressed');
        // answer.classList.toggle('visible');
        // menuIcon.classList.toggle('clicked');
    });


    qs2.addEventListener('click', function () {
        ans2.classList.toggle('visible');
        qs2.classList.toggle('pressed');
        // answer.classList.toggle('visible');
        // menuIcon.classList.toggle('clicked');
    });


    qs3.addEventListener('click', function () {
        ans3.classList.toggle('visible');
        qs3.classList.toggle('pressed');
        // answer.classList.toggle('visible');
        // menuIcon.classList.toggle('clicked');
    });

    qs4.addEventListener('click', function () {
        ans4.classList.toggle('visible');
        qs4.classList.toggle('pressed');
        // answer.classList.toggle('visible');
        // menuIcon.classList.toggle('clicked');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    const messages = document.querySelectorAll('.message');
    let currentSlide = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 50}%)`;
    }

    function cloneMessages() {
        messages.forEach(message => {
            const clone = message.cloneNode(true);
            slider.appendChild(clone);
        });
    }

    cloneMessages();

    leftButton.addEventListener('click', function () {
        if (currentSlide === 0) {
            currentSlide = messages.length;
            slider.style.transition = 'none';
            updateSlider();
            setTimeout(() => {
                slider.style.transition = 'transform 0.8s ease';
                currentSlide -= 2;
                updateSlider();
            }, 0);
        } else {
            currentSlide -= 1;
            updateSlider();
        }
    });

    rightButton.addEventListener('click', function () {
        if (currentSlide === messages.length) {
            currentSlide = 0;
            slider.style.transition = 'none';
            updateSlider();
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease';
                currentSlide += 2;
                updateSlider();
            }, 0);
        } else {
            currentSlide += 1;
            updateSlider();
        }
    });
});


// Transitions
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-view');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing after adding the class
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-viewL');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-left');
                observer.unobserve(entry.target); // Stop observing after adding the class
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-viewR');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-right');
                observer.unobserve(entry.target); // Stop observing after adding the class
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
