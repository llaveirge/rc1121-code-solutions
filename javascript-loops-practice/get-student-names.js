/* exported getStudentNames */

function getStudentNames(students) {
  var studentNames = [];

  for (var studentObj of students) {
    for (var key in studentObj) {
      if (key === 'name') {
        studentNames.push(studentObj[key]);
      }
    }
  }
  return studentNames;
}
