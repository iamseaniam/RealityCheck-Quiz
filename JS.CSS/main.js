document.addEventListener('DOMContentLoaded', function() {
    function calculateScore() {
        const correctAnswers = document.querySelectorAll('.No_There_Not');
        const score = correctAnswers.length;
        document.getElementById('score').textContent = "Score: " + score;
    }

    const rightAnswers = document.querySelectorAll('.Birds_Are_Real');
    rightAnswers.forEach(function(answer) {
        answer.addEventListener('click', function() {
            this.classList.toggle('Birds_Are_Real');
            this.classList.toggle('No_There_Not');
            calculateScore();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.cow');

    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener('click', function() {
            this.classList.toggle('cow');
            this.classList.toggle('Moo');
        });
    });
});



