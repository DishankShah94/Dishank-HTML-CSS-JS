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
    var cs = document.getElementById("cs").value;
    var it = document.getElementById("it").value;
    var ca = document.getElementById("ca").value;
    var tc = document.getElementById("tc").value;
    var pass = document.forms["reg"]["password"].value;
    if (fname == "") {
        alert("First Name must be required")
        return false;
    }
    else if (lname == "") {
        alert("Last Name must be required")
        return false;
    }
    else if (email == "") {
        alert("email must be required")
        return false;
    }
    else if (mobile == "") {
        alert("mobile must be required")
        return false;
    }
    else if (gender == "") {
        alert("gender must be required")
        return false;
    }
    else if (dob == "") {
        alert("dob must be required")
        return false;
    }
    else if (address == "") {
        alert("address must be required")
        return false;
    }
    else if (city == "") {
        alert("city must be required")
        return false;
    }
    else if (area == "") {
        alert("area pin must be required")
        return false;
    }
    else if (state == "") {
        alert("state must be required")
        return false;
    }
    else if (qu == "") {
        alert("qualification must be required")
        return false;
    }
    else if (cs == "" || it == "" || ca == "" || tc == "") {
        alert("checkbox must be required")
        return false;
    }
    else if (pass == "") {
        alert("password must be required")
        return false;
    }

    else {
        alert("All entry successfully entered")
    }
}