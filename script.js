function copyValue(element) {
    console.log("E");
    value = element.textContent.toLowerCase();
    navigator.clipboard.writeText(value);

    document.body.classList.add("active-popup");
    setTimeout(function() {
        document.body.classList.remove("active-popup");
    }, 1250);
}