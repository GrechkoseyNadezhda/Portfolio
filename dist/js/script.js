const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");


            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.sidepanel__devider').toggleClass('sidepanel__devider_active');
            $('.sidepanel__link').toggleClass('sidepanel__link_active');
            $('.sidepanel__text').toggleClass('sidepanel__text_active');
        } else {
            $('.sidepanel__devider').removeClass('sidepanel__devider_active');
            $('.sidepanel__link').removeClass('sidepanel__link_active');
            $('.sidepanel__text').removeClass('sidepanel__text_active');
        }
    });
});