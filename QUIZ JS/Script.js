
function question() {

    // get correct answers
    let correctAnswer = ["option1","option3","option2"];
    // get users answers
    let usersAnswer = [];
    let score = 0;
    // select the questions
    let questions = document.getElementsByClassName("question");

    // looping through the questions
    for (let i = 0; i < questions.length; i++) {
        // get each input for the question
        let inputs = questions[i].getElementsByTagName("input");
        // let answerFound = false

        // we get the user answer and push it to the usersAnswer array
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].checked) {
                usersAnswer.push(inputs[j].value);
                answerFound = true
            }
        }

        if (!answerFound) {
            usersAnswer.push("")
        }
    }
    console.log(usersAnswer)

    // compare the users answers with the correct answers
    for (let k = 0; k < correctAnswer.length; k++) {
        if ( usersAnswer[k] === correctAnswer[k]) {
            score++
        }
        // else if (!usersAnswer[k]) {
        //     score + 0
        // }
    }

    alert("You scored " + score + " out of " + correctAnswer.length + ".")
}

