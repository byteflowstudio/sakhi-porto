const aboutBox = document.querySelector('section');
    
aboutBox.addEventListener('mousedown', (e) => {
    const offsetX = e.clientX - aboutBox.getBoundingClientRect().left;
    const offsetY = e.clientY - aboutBox.getBoundingClientRect().top;

    function mouseMoveHandler(e) {
        aboutBox.style.position = 'absolute';
        aboutBox.style.left = `${e.clientX - offsetX}px`;
        aboutBox.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});
const draggableElements = document.querySelectorAll('.skill-set');

draggableElements.forEach(element => {
element.addEventListener('mousedown', (e) => {
const offsetX = e.clientX - element.getBoundingClientRect().left;
const offsetY = e.clientY - element.getBoundingClientRect().top;

function mouseMoveHandler(e) {
    element.style.position = 'absolute';
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
}

function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
}

document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);
});
});
const pendaha = document.querySelectorAll('section');

draggableElements.forEach(element => {
element.addEventListener('mousedown', (e) => {
const offsetX = e.clientX - element.getBoundingClientRect().left;
const offsetY = e.clientY - element.getBoundingClientRect().top;

function mouseMoveHandler(e) {
    element.style.position = 'absolute';
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
}

function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
}

document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);
});
});