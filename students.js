const fs = require("fs");

// read JSON file
const data = fs.readFileSync("students.json");
const studentsData = JSON.parse(data);

// filter students with CGPA > 8
console.log("Students with CGPA greater than 8.0:\n");

studentsData.students.forEach(student => {
    if (student.cgpa > 8.0) {
        console.log("ID:", student.student_id);
        console.log("Name:", student.name);
        console.log("Department:", student.department);
        console.log("CGPA:", student.cgpa);
        console.log("Skills:", student.skills.join(", "));
        console.log("----------------------------");
    }
});
