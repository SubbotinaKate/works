let input_name = document.querySelectorAll("#name");
let input_surname = document.querySelectorAll("#surname");
let input_login = document.querySelectorAll("#login");
let input_email = document.querySelectorAll("#email");
let input_pass = document.querySelectorAll("#password");
let input_Object = {};

this.onload = function() {
    let GetData_Storage = JSON.parse(localStorage.getItem("input_Object"));

    if (getdatafromstorage) {
        input_name.value = GetData_Storage.input_name;
        input_familia.value = GetData_Storage.input_surname;
        input_login.value = GetData_Storage.input_login;
        input_email.value = GetData_Storage.input_email;
        input_pass.value = GetData_Storage.input_pass;
    }
}