function validatePAN() {
    var pan = document.getElementById("pannumber").value;

    var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panPattern.test(pan)) {
        alert("Invalid PAN number");
        return false; 
    }
    else
        alert("Submitted Successfully");
    return true;
}