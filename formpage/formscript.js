let form = document.getElementById("form");

function formValidation() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let mail = document.getElementById("mail").value;
    if (!(/^[a-ząćęłńóśźżĄĘŁŃÓŚŹŻ ,.'-]+$/i.test(firstname) && /^[a-ząćęłńóśźżĄĘŁŃÓŚŹŻ ,.'-]+$/i.test(lastname) && /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(mail))) {
        window.alert("Nieprawidłowy format danych");
        return false;
    }
    return true;
}