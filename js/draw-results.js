var select = document.getElementById("select");
select.addEventListener("change", filter);

// function updateBoard() {
//   var selectedIndex = event.target.selectedIndex;
//   var currentOption = event.target[selectedIndex];
//   var office = currentOption.dataset.sede;
//   var generation = currentOption.dataset.generation;
//   var enrollment = getEnrollment(office, generation);
//   var dropout = getDropout(office, generation);
//   var nps = getNPS(office, generation);
//   console.log("enrollment", enrollment);
//   console.log("dropout", dropout);
//   console.log("nps", nps);
// }

function paintData(activeStudents, percentageDesertion) {
    var containerEnrolledStudents = document.getElementById('students-enrolled');
    var containerDesertion = document.getElementById('students-dropout');
    containerEnrolledStudents.innerText = activeStudents;
    containerDesertion.innerHTML = percentageDesertion;
}
