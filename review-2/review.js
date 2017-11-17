var name;
var address;

function validate(event) {
    event.preventDefault();
    
    name = document.querySelector("#name").value;
    address = document.querySelector("#address").value;

    if (name.length > 5) {
        alert("name is too long");
    }

    if (address.length < 10) {
        alert("address is too short");
    }

    alert("form is valid");
}