let scrollAnimated = document.querySelectorAll(".scroll__animated");

function mostrarScroll() {

    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < scrollAnimated.length; i++) {
        let alturaScroll = scrollAnimated[i].offsetTop;
        if( alturaScroll - 800 < scrollTop){
            scrollAnimated[i].style.opacity = 1;
        }
    }
} 

window.addEventListener("scroll", mostrarScroll);