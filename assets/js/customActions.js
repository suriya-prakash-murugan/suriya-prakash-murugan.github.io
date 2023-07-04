function changeIntroVisiblility(event) {
    console.log("called");
    let content = document.getElementsByClassName("extendedIntro")[0];
    let extButton = document.getElementById("extend");
    if(content) {
        if(content.style.display === 'block') {
            content.style.display = 'none';
            extButton.textContent = "Know more";
        } else {
            
            content.style.display = 'block';
            extButton.textContent = "Show less";
        }
    }
}

function changeRowVisiblility(event) {
    console.log("called");
    let content = document.getElementsByClassName("extendedRow")[0];
    console.log(content);
    let extButton = document.getElementById("extendrow");
    if(content) {
        if(content.style.display === 'block') {
            content.style.display = 'none';
            extButton.textContent = "Full portfolio";
        } else {
            
            content.style.display = 'block';
            extButton.textContent = "Show less";
        }
    }
}