function addingEventListener() {
    alert('I was clicked!');
    const input = document.getElementById('input');
    input.addEventListener('click', addingEventListener);
    
    const six = document.getElementById('divSix');
    divSix.addEventListener('click', addingEventListener);
}

addingEventListener();