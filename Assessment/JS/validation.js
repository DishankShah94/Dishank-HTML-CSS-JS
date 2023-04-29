function registration() {
    var fname = document.forms["reg"]["fname"].value;
    var lname = document.forms["reg"]["lname"].value;
    var email = document.forms["reg"]["Email"].value;
    var mobile = document.forms["reg"]["imobile"].value;
    var gender = document.forms["reg"]["gender"].value;
    var dob = document.forms["reg"]["dob"].value;
    var address = document.forms["reg"]["address"].value;
    var city = document.forms["reg"]["icity"].value;
    var area = document.forms["reg"]["area"].value;
    var state = document.forms["reg"]["state"].value;
    var select = document.getElementById('qualification');
    var qu = select.options[select.selectedIndex].value;
    var spe = document.getElementsByName('specialization');
    var result = "";
    var pass = document.forms["reg"]["password"].value;
    var name = /^([a-zA-Z]{3,6})$/;
    var telm = /^\d{10}$/;
    for (var i = 0; i < spe.length; i++) {
        if (spe[i].checked) {
            result += spe[i].value;
        }
    }

    if (fname == "") {

        alert("First Name must be required")
        document.getElementById("fname").focus();
        return false;
    }
    else if (lname == "") {
        alert("Last Name must be required")
        document.getElementById("lname").focus();
        return false;
    }
    else if (email == "") {
        alert("email must be required")
        document.getElementById("Email").focus();
        return false;
    }
    else if (mobile == "") {
        alert("mobile must be required")
        document.getElementById("imobile").focus();
        return false;
    }
    else if (gender == "") {
        alert("gender must be required")
        document.getElementById("gender").focus();
        return false;
    }
    else if (dob == "") {
        alert("dob must be required")
        document.getElementById("dob").focus();
        return false;
    }
    else if (address == "") {
        alert("address must be required")
        document.getElementById("address").focus();
        return false;
    }
    else if (city == "") {
        alert("city must be required")
        document.getElementById("city").focus();
        return false;
    }
    else if (area == "") {
        alert("area pin must be required")
        document.getElementById("area").focus();
        return false;
    }
    else if (state == "") {
        alert("state must be required")
        document.getElementById("state").focus();
        return false;
    }
    else if (qu == "") {
        alert("qualification must be required")
        document.getElementById("qualification").focus();
        return false;
    }
    else if (result == "") {
        alert("checkbox must be required")
        document.getElementById("cs").focus();
        return false;
    }
    else if (pass == "") {
        alert("password must be required")
        document.getElementById("password").focus();
        return false;
    }

    else {
        // alert("All entry successfully entered")
        if (!name.test(fname)) {
            alert("please enter valid name")
            document.getElementById("fname").focus();
            return false;
        }
        else {
            alert("YOUR NAME IS VALID")

        }
        if (mobile.length != 10) {
            alert("Please enter 10 digit only")
            document.getElementById("imobile").focus();
            return false;
        }
        else {
            if (mobile.match(telm)) {
                alert("mobile number valid")

                // console.log("called")
            }
            else {
                alert("wrong format mobile")
                document.getElementById("imobile").focus();
                return false;
                // console.log("called")

            }
        }
    }
}