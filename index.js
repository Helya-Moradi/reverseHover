let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>'
})