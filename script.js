// Wait for the document to be ready before executing the script
$(document).ready(function() {
    // Initialize the score
    let score = 0;
    let quizStarted = false; // Flag to check if the quiz has started

    $("#startQuiz").click(function () {
        $("#quizContent").removeClass("d-none");
        $(this).hide();
    });
    // Function to update the score display
    function updateScoreDisplay() {
        let message = "";
        if (score === 5) {
            message = "Congratulations, you got them all right!";
        } else if (score === 4) {
            message = "Nice! Score: " + score;
        } else if (score === 3) {
            message = "Decent! Score: " + score;
        } else if (score === 2) {
            message = "Gettin' there.. Score: " + score;
        } else {
            message = "Score: " + score;
        }
        $('#score').text(message);
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

        if (!quizStarted) {
            $("#score").removeClass("d-none");
            quizStarted = true; // Set the flag to true to indicate the quiz has started
        }
    });
});
