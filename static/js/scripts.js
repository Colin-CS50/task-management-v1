const signupForm = document.getElementById("signup_form");
const loginForm = document.getElementById("login_form");
const error = document.querySelector(".error");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(signupForm);
  const formDataObject = Object.fromEntries(formData.entries());

  fetch("/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        // error.insertAdjacentHTML("afterbegin", data.error);
        // throw new Error("Network response was not ok");
      } else {
        window.location.href = "/dashboard";
      }

      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const formDataObject = Object.fromEntries(formData.entries());

  fetch("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        // error.insertAdjacentHTML("afterbegin", data.error);
        // throw new Error("Network response was not ok");
      } else {
        window.location.href = "/dashboard";
      }

      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
