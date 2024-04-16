if (document.body.clientWidth <= 200) {
    alert("Please use more wider screen for better view.")
}

window.onload = () => {
    alert("1:) Double click on the image/background image to change it.\n2:) Double click on the colored circle part to change it's speed.")
}

// alert("Image view (𝘸𝘪𝘵𝘩 💖 𝘣𝘺 '𝘬𝘶𝘮𝘢𝘳 𝘴𝘢𝘯𝘶')");

document.querySelector(".box").addEventListener("dblclick", (event_1) => {
    event_1.stopPropagation();
    let cnf = confirm("Do you want to change the image?");
    if (cnf) {
        let image = prompt("Enter the url of image:");
        document.body.querySelector(".box").children[0].src = `${image}`;

    }
})
document.querySelector(".container").addEventListener("dblclick", (event_2) => {
    event_2.stopPropagation();
    let cnf = confirm("Do you want to change the rotating speed?");
    if (cnf) {
        let speed = prompt("Enter any real number greater than 0 (like 0.1):\n(with increase in the value the speed will decrease, currently it's at 5)");
        document.querySelector(".container").style.animationDuration = `${speed}s`;

    }
})
document.body.addEventListener("dblclick", () => {
    let cnf = confirm("Do you want to change the background image?");
    if (cnf) {
        let bg_image = prompt("Enter the url of image:");
        document.body.style.backgroundImage = `url(${bg_image})`;

    }
})