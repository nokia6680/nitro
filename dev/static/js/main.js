var menuOpener = document.querySelector('.nav__toggle');
var menu = document.querySelector('.nav__list');

if (menuOpener) {
    menuOpener.addEventListener('click', function() {
        event.preventDefault();
        menuOpener.classList.toggle('opened');
        menu.classList.toggle('opened');
    });
};


var chatOpener = document.querySelector('.social__opener');
var chatCloser = document.querySelector('.social__closer');
var chatBody = document.querySelector('.social__list');

if (chatOpener) {
    chatOpener.addEventListener('click', function() {
        event.preventDefault();
        chatOpener.classList.add('active');
        chatBody.classList.add('active');
    });
};

if (chatCloser) {
    chatCloser.addEventListener('click', function() {
        event.preventDefault();
        chatOpener.classList.remove('active');
        chatBody.classList.remove('active');
    });
};


var upperItem = document.getElementsByClassName('goods__order');
var elNodes = document.querySelectorAll(".goods__order");
var orderForm = document.querySelector('.order');
var orderCloser = document.querySelector('.order__closer');

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        orderForm.classList.add("active");
    });
}

if (orderCloser) {
    orderCloser.addEventListener('click', function() {
        event.preventDefault();
        orderForm.classList.remove('active');
    });
};
