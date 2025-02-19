function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Luku väliltä 1-100
    document.getElementById("random-number").innerText = "Satunnaisluku: " + randomNumber;
}
