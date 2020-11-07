document.getElementById("tab2").onclick = fadeLettersIn;

function fadeLettersIn() {
    const text = document.querySelector('.subheader');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
    
    for(let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span class = 'random'>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 50);
    
    function onTick() {
        const span = text.querySelectorAll('span.random')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length) {
            complete();
            return;
        }
    }
    
    function complete() {
        clearInterval(timer);
        timer = null;
    }
}
