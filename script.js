//Header event
window.addEventListener('scroll', () =>{

    let header = document.querySelector('.header-container');
    header.classList.toggle('sticky', window.scrollY > 0);
    
})

//Menu event
let btn = document.querySelector('.menu-btn')
let menu = document.querySelector('.header-container__navbar ul')

btn.addEventListener('click', () =>{

    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        btn.classList.remove('show');
    }else{
        menu.classList.add('active');
        btn.classList.add('show');
    }

})

//Menu close link
let links = document.querySelectorAll('.header-container__navbar ul li a')

links.forEach(item => 
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
)