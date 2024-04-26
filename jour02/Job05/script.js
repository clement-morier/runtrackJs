window.addEventListener("scroll", function() {
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    const percentageScrolled = (scrollPosition / (bodyHeight - windowHeight)) * 100;

    const footer = document.getElementById("footer");
    footer.style.backgroundColor = `hsl(${percentageScrolled}, 50%, 50%)`;
});