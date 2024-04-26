const form = document.getElementById("signup_form");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
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
      }
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
