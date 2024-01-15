function calculateGrade(marks) {
    if (marks > 79) {
        console.log("A");
    } else if (marks >= 60 && marks <= 79) {
        console.log("B");
    } else if (marks > 49 && marks <= 59) {
        console.log("C");
    } else if (marks >= 40 && marks <= 49) {
        console.log("D");
    } else if (marks < 40) {
        console.log("E");
    }
}

function user(userMarks) {
   
    marks= parseFloat(userMarks); // Convert input to a number
    return calculateGrade(marks);
    
}

user(50);
