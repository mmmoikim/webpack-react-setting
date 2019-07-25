function component() {
    var element = document.createElement('pre');
    element.innerHTML = 'HELLO !'
    return element;
}

document.body.appendChild(component());