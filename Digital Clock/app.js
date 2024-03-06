setInterval(() =>{
    let hour = document.getElementById('hh');
    let min =  document.getElementById('mm');
    let sec = document.getElementById('ss');

    let sec_dot = document.querySelector('.sec-dot')
    let min_dot = document.querySelector('.min-dot')
    let hour_dot = document.querySelector('.hour-dot')

    let hours = document.querySelector('#hours')
    let minutes = document.querySelector('#minutes')
    let seconds = document.querySelector('#seconds')
    let ampm = document.querySelector('#ampm')


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s =new Date().getSeconds();

    let am = h >= 12? "PM" : "AM";

    //convert 24hr clock to 12 hr clock system

    if(h > 12){
        h = h -12; 
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    hour.style.strokeDashoffset = 510 - (510 * h)/12;
    //12 hrs clock 
    min.style.strokeDashoffset = 630 - (630 * m)/60;
    //60min
    sec.style.strokeDashoffset = 760 - (760 * s)/60;

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

    
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;

    
    // hour_dot.style.transform = `rotateZ(${h * 30}deg)`;
    
})


const body = document.querySelector('body'),
modeToggle = document.querySelector('.dark-light');

modeToggle.addEventListener('click',()=>{
    modeToggle.classList.toggle('active');
    body.classList.toggle('dark')
})

