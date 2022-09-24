//Header event
window.addEventListener('scroll', () =>{

    let header = document.querySelector('.header-container');
    header.classList.toggle('sticky', window.scrollY > 0);
    
})

//Menu event
let btn = document.querySelector('.menu-btn')

btn.addEventListener('click', () =>{

    let menu = document.querySelector('.header-container__navbar ul')

    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        btn.classList.remove('show');
    }else{
        menu.classList.add('active');
        btn.classList.add('show');
    }

})