const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add("platform");
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});