let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let header = document.querySelector('.header-3')
let scrolltop = document.querySelector('.sroll-top')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

    if (window.scrollY > 250) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

    if (window.scrollY > 250) {
        scrolltop.style.display = 'initial'
    } else {
        scrolltop.style.display = 'none'

    }
}

var swiper = new Swiper('.home-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

 let countDate = new Date('May 12, 2024 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;
    // console.log();
    let day=15
    let hour=15
    let min=15
    let sec=15
    // sec+=1
    
    setInterval(() => {
        sec-=1
        if(sec==0){
            sec=60
            min-=1
        }
        if(min==0){
            min-60
            hour-=1
        }
        if(hour==0){
            hour=24
            day-=1
        }
        console.log("seconds: ",sec, "mins: ",min);
        second.innerHTML=sec
        minute.innerHTML=min
        hor.innerHTML=hour
        days.innerHTML=day
    }, 1000);
    
}


countDown();

