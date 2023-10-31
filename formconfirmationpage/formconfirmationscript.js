let kibic = document.getElementById('kibic');
let searchParams = new URLSearchParams(window.location.search);
let firstname = searchParams.get('firstname');
let lastname = searchParams.get('lastname');

kibic.innerHTML = "<h2>" + firstname + " " + lastname + ", od dziś oficjalnie jesteś Kibicem!</h2>";