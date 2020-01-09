const clockData = document.querySelector('.clock_data');
const clockFrame = document.querySelector('.clock_frame');
console.log('testing')
setInterval(()=>{
    const timeNow = new Date().getTime();
    const newYear = new Date('jan 1, 2020 00:00 am').getTime();
    const timePassed = timeNow - newYear;
    var days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timePassed % (1000 * 60)) / 1000);
    clockData.textContent = days + 'D:' + hours + 'H:' + minutes + 'M:' + seconds + 'S'
}, 1000)