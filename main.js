document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Витягуємо id цілі
        const targetElement = document.getElementById(targetId);

        // Прокрутка до цілі з плавним переходом
        targetElement.scrollIntoView({
            behavior: 'smooth', // Задаємо плавність прокрутки
            block: 'start' // Прокрутка до початку елемента
        });
    });
});