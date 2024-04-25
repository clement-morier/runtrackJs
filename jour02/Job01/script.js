function citation(){
    const citationElement = document.getElementById("citation");
    const citationText = citationElement.textContent;
    console.log(citationText);
}
const button = document.getElementById("button");
button.addEventListener("click",citation);