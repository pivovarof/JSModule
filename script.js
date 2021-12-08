const arrObj = [];

const button = document.querySelector('button');    
button.onclick = myPlan;




function Object(start, duration, tittle){
    this.id = start,
    this.start = start,
    this.duration = duration,
    this.title = tittle

}





function myPlan(){
    
    let title = document.getElementById('title').value;
    let start = document.getElementById('start').value.replace(/\D/g, '');
    let duration = document.getElementById('duration').value
    let eventEl = document.createElement('div');
    eventEl.className = 'online-Event';
    
    let user = new Object(start, duration, title);
    arrObj.push(user)
    console.log(arrObj);

    arrObj.forEach(el =>{
        eventEl.style.backgroundColor = '#679fcd';
        eventEl.style.width = '200px';
        eventEl.style.height = `${el.duration * 2}px`;
        // eventEl.style.height = `${obj.duration * 2}px`;
        eventEl.textContent = el.title;
        eventEl.style.zIndex = '99';
    
    
    let domain = document.getElementById(`${el.start}`)
    domain.appendChild(eventEl)

    })

    

    // clearInput()

    // document.getElementById('title').value = '';
    // document.getElementById('start').value = '';
    // document.getElementById('duration').value = '';
}

document.getElementById('Clear').addEventListener('click', function clearAll(){

    let onlineEvent = document.getElementsByClassName('online-Event');
    let wrapper = document.querySelectorAll('.wrapper');
    
    wrapper.forEach(el => {
        el.lastChild.remove();
    
    }) 
    
    
    
    document.getElementById('title').value = '';
    document.getElementById('start').value = '';
    document.getElementById('duration').value = '';

})






