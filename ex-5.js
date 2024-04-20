const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let averageScore = 0;
  for(let i = 0; i < students.length; i++) {
    averageScore = averageScore + students[i].score
  }
  return averageScore / students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
