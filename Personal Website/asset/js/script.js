const navbar = document.querySelector(".container");

window.addEventListener('scroll', () => {
    if(scrollY > 150){
        navbar.classList.add('blurnav')
    } else{
        navbar.classList.remove('blurnav')
    }
    console.log(scrollY)
})