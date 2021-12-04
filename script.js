const obj = {
    start: 0,
    duration: 30,
    title: 'Travel to work'
}




const button = document.querySelector('button');


    
button.onclick = myPlan;


function myPlan(){
    
    const title = document.getElementById('title').value;
    const start = document.getElementById('start').value;
    const duration = document.getElementById('duration').value;
    const eventEl = document.createElement('div');

    eventEl.style.backgroundColor = '#679fcd';
    eventEl.style.width = '200px';
    eventEl.style.height = `${duration * 2}px`;
    // eventEl.style.height = `${obj.duration * 2}px`;
    eventEl.textContent = title;
    eventEl.style.zIndex = '99';
    
    
    let domain = document.getElementById('800')
    domain.appendChild(eventEl)

}


