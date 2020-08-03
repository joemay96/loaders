const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init(){
    setTimeout(() => {
        loader.style.opacity = 0; //fading out
        loader.style.display = 'none';
        //bring in the Site
        main.style.display = "block";
        //damit es nicht aufploppt sondern reingleitet
        setTimeout(() => {
            main.style.opacity = 1;
        }, 50);
    }, 4000); //warte 4 sek
}

init();