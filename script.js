// Wait for the document to be ready before executing the script
$(document).ready(function() {
    // Initialize the score
    let score = 0;

    // Function to update the score display
    function updateScoreDisplay() {
        // Check if the score is 5 (assuming there are 5 questions)
        if (score === 5) {
            // Update the text to congratulate the user
            $('#score').text("Congratulations, you got them all right!");
        } else {
            // Otherwise, display the current score
            $('#score').text("Score: " + score);
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