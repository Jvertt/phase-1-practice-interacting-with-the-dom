let Timer = 0;
window.onload = function() {
    setInterval(function(){
        Timer++;
        console.log (Timer);
    }, 1000)
}

document.getElementById(".counter").addEventListener("click ", counter)

