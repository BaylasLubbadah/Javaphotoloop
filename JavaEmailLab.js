var validEmail = false;
        while (!validEmail) {
            
            var email = prompt("Please enter your email:");

            var atIndex = -1;
            for (var i = 0; i < email.length; i++) {
                if (email[i] === "@") {
                    if (atIndex === -1) {
                        atIndex = i;
                    } else {
                        alert("Email should contain only one @ symbol.");
                        break;
                    }
                }
                if (email[i] === " ") {
                    alert("Email should not contain spaces.");
                    break;
                }
                if (i === email.length - 1 && atIndex !== -1) {
                    validEmail = true;
                    alert("Valid email!");
                }
            }
            if (atIndex === -1) {
                alert("Email should contain exactly one @ symbol.");
            }
        }
        

var validPassword = false;
        while (!validPassword) {
            
            var password = prompt("Please enter your password:");

            
            if (password.length > 6 && password.length < 12) {
                var hasUppercase = false;
                var hasNumber = false;
                for (var i = 0; i < password.length; i++) {
                    if (password[i] >= "A" && password[i] <= "Z") {
                        hasUppercase = true;
                    }
                    if (password[i] >= "0" && password[i] <= "9") {
                        hasNumber = true;
                    }
                }
                if (hasUppercase && hasNumber) {
                    validPassword = true;
                    alert("Valid password!");
                } else {
                    alert("Password should contain at least one uppercase letter and one number.");
                }
            } else {
                alert("Password should be between 6 and 12 characters long.");
            }
        }