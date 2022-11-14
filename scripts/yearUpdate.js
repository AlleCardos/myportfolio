function yearUpdate(){

    const boxYear = document.querySelector('#year')

    let date = new Date();
    let year = date.getFullYear();

    boxYear.innerHTML = year;
}

yearUpdate()