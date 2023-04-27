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
    
    if (fname == "") {
        alert("First Name must be required")
        return false;
    }
    else if (lname == "") {
        alert("Last Name must be required")
        return false;
    }
    else {
        alert("name is entered successfully")
    }
}