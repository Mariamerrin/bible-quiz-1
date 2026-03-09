const correctAnswers = {
    q1: "b", q2: "b", q3: "c", q4: "b", q5: "true",
    q6: "c", q7: "c", q8: "c", q9: "c", q10: "true",
    q11: "c", q12: "b", q13: "a", q14: "b", q15: "true",
    q16: "c", q17: "c", q18: "c", q19: "b", q20: "true",
    q21: "c", q22: "d", q23: "b", q24: "c", q25: "false",
    q26: "b", q27: "b", q28: "c", q29: "b", q30: "true"
};

document.getElementById('quizForm').onsubmit = (e) => {
    e.preventDefault();
    let score = 0;
    const formData = new FormData(e.target);
    
    for (let [key, value] of formData.entries()) {
        if (correctAnswers[key] === value) {
            score++;
        }
    }
    
    localStorage.setItem('finalScore', score);
    window.location.href = 'result.html';
};