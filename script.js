document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quiz-form');
  const resultContainer = document.getElementById('result-container');
  const questions = [
    { id: 'q1', weight: 1 },
    { id: 'q2', weight: 1 },
    { id: 'q5', weight: 1 },
    { id: 'q6', weight: 1 },
    { id: 'q7', weight: 1 },
    { id: 'q8', weight: 1 },
    { id: 'q9', weight: 1 },
    { id: 'q10', weight: 1 },
  ];

  // Function to calculate the total score
  function calculateScore() {
    let totalScore = 0;
    questions.forEach((question) => {
      const selectedOption = document.querySelector(`input[name="${question.id}"]:checked`);
      if (selectedOption) {
        totalScore += parseInt(selectedOption.value) * question.weight;
      }
    });
    return totalScore;
  }

  // Function to display the result
  function displayResult(score) {
    let resultText = '';
    if (score <= 6) {
      resultText = 'Your anxiety level is minimal.';
    } else if (score <= 12) {
      resultText = 'Your anxiety level is moderate.';
    } else if (score <= 18) {
      resultText = 'Your anxiety level is significant.';
    } else {
      resultText = 'Your anxiety level is severe.';
      // resultText.style.color = "red";
    }
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = resultText;
    resultContainer.style.display = 'block';
  }

 // Function to calculate the total score and redirect to "results.html"
    function calculateScoreAndRedirect() {
      const totalScore = calculateScore();

      // Redirect to "results.html" with the score as a query parameter
      window.location.href = `results.html?score=${totalScore}`;
    }

    // Attach the calculateScoreAndRedirect function to the form submission
    const quizForm = document.getElementById('quiz-form');
    quizForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting in the default way
      calculateScoreAndRedirect();
    });

});



// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const totalScore = calculateScore();

//   // Store the totalScore in localStorage
//   localStorage.setItem('quizResult', totalScore.toString());
// });
// });


  // Handle form submission
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const totalScore = calculateScore();
//     displayResult(totalScore);
//   });
// });

// document.getElementById("navigateResult").addEventListener("click", function() {
//   preventDefault();
//   window.location.href = "results.html";
// })