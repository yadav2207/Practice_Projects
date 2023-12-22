function fun() {
  let username = document.getElementById("username").value;
  let Password = document.getElementById("Password").value;

  if (username === "admin" && Password === "admin") {
    alert("login successful");
  } else {
    alert("username or password is wrong please try again");
  }
}
function openFormPage() {
  const formContainer = document.getElementById("formContainer");

  if (
    formContainer.style.display === "none" ||
    formContainer.style.display === ""
  ) {
    formContainer.style.display = "block"; // Show the form
  } else {
    formContainer.style.display = "none"; // Hide the form
  }
}
