const keylogger = document.getElementById("keylogger")
document.addEventListener("keydown",function(event){
    if (event.key.match(/[a-z]/i)){
        if (document.activeElement === keylogger){
            keylogger.value += event.key + event.key;
        } else {
            keylogger.value += event.key;
        }
    }
});