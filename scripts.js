document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const gender = document.getElementById("gender").value;
    const termsCheckbox = document.getElementById("termsCheckbox");

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!termsCheckbox.checked) {
      alert("Please accept the terms and conditions");
      return;
    }

    // Here you can proceed with form submission or any other action
    alert("Registration successful!");
  });
