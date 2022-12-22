let btn = document.querySelector(".btn");
let serial = document.querySelector(".serial");




btn.onclick = function () {
    let charecters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*-";
    let charCount = 10;
    let result = "";

    for (let i = 0; i < charCount; i++) {

    result += charecters[Math.floor(Math.random() * charecters.length)];console.log(result)
} 
serial.innerHTML = result;
}

