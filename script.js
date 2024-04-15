// Wait for the document to be ready before executing the script
$(document).ready(function() {
    // Initialize the score
    let score = 0;
    let totalQuestions = 5;
    let answeredQuestions = 0;
    $("#startQuiz").click(function () {
        $("#quizContent").removeClass("d-none")
        $(this).hide();
    })
    // Function to update the score display
    function updateScoreDisplay() {
        answeredQuestions++;
        if (answeredQuestions === totalQuestions) {
            let message = "";
            if (score === totalQuestions) {
                message = "Congratulations, you got them all right!";
            } else if (score === totalQuestions - 1) {
                message = "SO CLOSE! Score: " + score;
            } else if (score === totalQuestions - 2) {
                message = "Decent! Score: " + score;
            } else if (score === totalQuestions - 3) {
                message = "Better luck next time! Score: " + score;
            } else if (score === totalQuestions - 4) {
                message = "Oof. Score: " + score;
            } else {
                message = "Womp Womp. Score: " + score;
            }
            $('#score').text(message);
        }
    }
    // Hide all elements with the class 'card-footer' initially
    $('.card-footer').hide();

    // Add a click event listener to all buttons within elements with the class 'card'
    $('.card button').click(function() {
        // Prevent further clicks on this button
        $(this).off('click');

        // Check if the clicked button is the correct answer
        if ($(this).attr('id') === 'correct') {
            // Increment the score
            score++;
        }

        // Add the class 'correct' if the button's id is 'correct', otherwise add 'wrong'
        $(this).addClass($(this).attr('id') === 'correct' ? 'correct' : 'wrong');

        // Disable the other button within the same card
        $(this).siblings().prop('disabled', true);

        // Show the closest '.card-footer' element when a button is clicked
        $(this).closest('.card').find('.card-footer').show();

        // Update the score display
        updateScoreDisplay();
    });
});