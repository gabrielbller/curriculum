function openPrintDialog() {
  window.print();
}

function changeLanguage() {
    var elementsToTranslate = document.querySelectorAll('.translate');

    elementsToTranslate.forEach(function(element) {
        if (element.getAttribute('data-pt')) {
            if (element.innerText.trim() === element.getAttribute('data-pt').trim()) {
                element.innerText = element.getAttribute('data-en');
            } else {
                element.innerText = element.getAttribute('data-pt');
            }
        }
    });

    var button = document.querySelector('.button-language');
    if (button.innerText === 'ENGLISH') {
        button.innerText = 'PORTUGUÊS';
    } else {
        button.innerText = 'ENGLISH';
    }
}

