(function(){
    emailjs.init("79RentwGDeFTpUfmc");
})();

document.getElementById('sendContact').addEventListener('click', function(event){
    event.preventDefault();

    if(validateForm()){
        let user_fname = document.getElementById('user_fname').value;
        let user_lname = document.getElementById('user_lname').value;
        let user_email = document.getElementById('user_email').value;
        let user_phone = document.getElementById('user_phone').value;
        let user_message = document.getElementById('user_message').value;

        emailjs.send("service_fs0ii5s", "template_5xo2uts", {
            from_name: user_fname, user_lname,
            message: user_message,
            user_email: user_email,
            user_phone: user_phone
        }).then(function(response){
            console.log("Email sent successfully!", response.status, response.text)
            let contactForm = document.getElementById("contactForm");
            contactForm.reset();
            let sentEmail = document.getElementById("emailStatus");
            sentEmail.textContent = "Email successfully sent to hkaur@udel.edu";
            sentEmail.style.color = "green";
        }, function(err){
            console.error("Failed to send the email", err);
            let errorEmailing = document.getElementById("emailStatus");
            errorEmailing.textContent = "An error occurred while sending the email";
            errorEmailing.style.color = "red";
        });
    } else{
        let errorEmailing = document.getElementById("emailStatus");
        errorEmailing.textContent = "Please recheck your input in the form";
        errorEmailing.style.color = "red";
    }


});

function validateForm(){
    let isValid = true; 

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;

    ["fnameValidation", "lnameValidation", "emailValidation", "messageValidation", "phoneValidation"].forEach(id => {
        document.getElementById(id).textContent = '';
    });

    ["user_fname", "user_lname", "user_email", "user_message", "user_phone"].forEach(id => {
        document.getElementById(id).classList.remove('invalid');
    });

    let user_fname = document.getElementById('user_fname').value;
    let user_lname = document.getElementById('user_lname').value;
    let user_email = document.getElementById('user_email').value;
    let user_phone = document.getElementById('user_phone').value;
    let user_message = document.getElementById('user_message').value;

    if(user_fname){
        isValid = false;
        let firstNameVal = document.getElementById("fnameValidation");
        firstNameVal.textContent = "First name is required";
        firstNameVal.style.color = "red";
        document.getElementById('user_fname').classList.add('invalid');
    }

    if(user_lname){
        isValid = false;
        let lastNameVal = document.getElementById("lnameValidation");
        lastNameVal.textContent = "Last name is required";
        lastNameVal.style.color = "red";
        document.getElementById('user_lname').classList.add('invalid');
    }

    if(!user_email){
        isValid = false;
        let user_email = document.getElementById("emailValidation");
        user_email.textContent = "Email is required";
        user_email.style.color = "red";
        document.getElementById('user_email').classList.add('invalid');
    }else{
        if(!emailPattern.test(email)){
            isValid = false;
            let emailPattern = document.getElementById("emailValidation");
            emailPattern.textContent = "Please enter an email address in the form: xyz@domain.<upper-level domain>";
            emailPattern.style.color = "red";
            document.getElementById('user_email').classList.add('invalid');
        }
    }

    if(!user_message){
        isValid = false;
        let user_message = document.getElementById("messageValidation");
        user_message.textContent = "A message is required";
        user_message.style.color = "red";
        document.getElementById('user_message').classList.add('invalid');
    }

    if(!user_phone && !phoneNumberPattern.test(phone)){
        isValid = false;
        let phonePattern = document.getElementById("phoneValidation");
        phonePattern.textContent = "Please enter a phone number in the form: 123-456-7890";
        phonePattern.style.color = "red";
        document.getElementById('user_phone').classList.add('invalid');
    }

    return isValid;


}