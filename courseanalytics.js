const fs = require("fs");

const data = fs.readFileSync("courseAnalytics.json");
const course = JSON.parse(data);

console.log("Students at Academic Risk:\n");

let totalInternal = 0;
let totalAssignments = 0;
let assignmentCount = 0;

course.students.forEach(student => {

    if (student.attendance_percentage < 75) {
        console.log(student.name + " - Risk: Low Attendance");
    }

    if (student.internal_marks < 40) {
        console.log(student.name + " - Risk: Low Internal Marks");
    }

    totalInternal += student.internal_marks;

    student.assignment_scores.forEach(score => {
        totalAssignments += score;
        assignmentCount++;
    });

});

const avgInternal = totalInternal / course.students.length;
const avgAssignments = totalAssignments / assignmentCount;

console.log("\nClass Average Internal Marks:", avgInternal.toFixed(2));
console.log("Average Assignment Score:", avgAssignments.toFixed(2));
