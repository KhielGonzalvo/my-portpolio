
function showMessage() {
  window.alert("Thank you for getting in touch!");
}

function showProjects() {
  window.location.href = "projects.html";
}



function submitMessage() {
  let name = document.getElementById("fullName").value;

  if (name === "") {
    window.alert("Please fill out your name!");
  } else {
    window.alert("Thank you, " + name + "! Message sent.");
  }
}
