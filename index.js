function myNameIs() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hallo " + person + "! Leuk dat je er bent";
    }
}



let getRandomNumber = function () {
    let getRandom = Math.floor((Math.random() * 25) + 1);
    return getRandom;
}




var number = prompt("kies een nummer");



while (number != getRandomNumber) {
    console.log("dat is niet juist");
} console.log("dat is goed")
    ;

console.log(getRandomNumber());
