document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var firstName = document.querySelector("#user_fname").value;
      var lastName = document.querySelector("#user_lname").value;
      var email = document.querySelector("#user_email").value;
      var phoneNum = document.querySelector("#user_phone").value;
      var message = document.querySelector("#user_message").value;
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNum: phoneNum,
        message: message,
      };
      const phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/;
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let isValid = false;
      if (!phoneRegex.test(phoneNum)) {
        console.log("Invalid phone number");
        return false;
      } else if (!emailRegex.test(email)) {
        console.log("Invalid email");
        return false;
      } else if (
        user.firstName === null ||
        user.lastName === null ||
        user.message === null ||
        user.phoneNum === null ||
        user.email === null ||
        user.firstName === "" ||
        user.lastName === "" ||
        user.message === "" ||
        user.phoneNum === "" ||
        user.email === ""
      ) {
        console.log("Please complete the form.");
        return false;
      } else {
        emailjs.init("79RentwGDeFTpUfmc");
        emailjs
          .send("service_fs0ii5s", "template_5xo2uts", user)
          .then(function (mes) {
            console.log("Message Sent!");
            firstName = "";
            lastName = "";
            email = "";
            phoneNum = "";
            message = "";
          })
          .catch(function (eror) {
            console.log("Email failed to send, try again!");
          });
      }
      
    });
  
  });